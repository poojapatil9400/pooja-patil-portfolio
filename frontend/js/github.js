/**
 * GitHub Integration Module
 * Fetches real public repository data from the GitHub REST API.
 * Includes rate limit detection, graceful fallbacks, and pagination.
 */

let allRepositories = [];
let visibleRepoCount = 6;
const REPOS_PER_PAGE = 6;

document.addEventListener('DOMContentLoaded', () => {
    initGitHubSection();
});

async function initGitHubSection() {
    const userContainer = document.getElementById('github-user-card');
    const reposContainer = document.getElementById('github-repos-container');
    const loadMoreBtn = document.getElementById('load-more-repos-btn');

    if (!reposContainer) return;

    try {
        // Fetch User Profile
        await fetchGitHubUserProfile();

        // Fetch Public Repositories
        await fetchGitHubRepositories();
    } catch (error) {
        console.warn('GitHub API request failed or rate limit reached. Using verified offline fallbacks.', error);
        useFallbackData();
    }

    // Attach Load More button listener
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleRepoCount += REPOS_PER_PAGE;
            renderRepositories();
        });
    }
}

async function fetchGitHubUserProfile() {
    const username = CONFIG.PROFILE.githubUsername;
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
        throw new Error(`GitHub User API error: ${response.status}`);
    }

    const userData = await response.json();
    
    // Update Profile UI
    const avatarEl = document.getElementById('gh-avatar');
    const reposCountEl = document.getElementById('gh-repos-count');
    const followersCountEl = document.getElementById('gh-followers-count');
    const usernameEl = document.getElementById('gh-username');

    if (avatarEl && userData.avatar_url) avatarEl.src = userData.avatar_url;
    if (reposCountEl) reposCountEl.textContent = userData.public_repos ?? '20+';
    if (followersCountEl) followersCountEl.textContent = userData.followers ?? '4';
    if (usernameEl) usernameEl.textContent = `@${userData.login}`;
}

async function fetchGitHubRepositories() {
    const username = CONFIG.PROFILE.githubUsername;
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);

    if (!response.ok) {
        throw new Error(`GitHub Repos API error: ${response.status}`);
    }

    const repos = await response.json();

    if (!Array.isArray(repos) || repos.length === 0) {
        useFallbackData();
        return;
    }

    // Sort by recent update, filter out empty repos if any
    allRepositories = repos.filter(repo => !repo.fork);
    renderRepositories();
}

function renderRepositories() {
    const reposContainer = document.getElementById('github-repos-container');
    const loadMoreBtn = document.getElementById('load-more-repos-btn');
    if (!reposContainer) return;

    const reposToDisplay = allRepositories.slice(0, visibleRepoCount);

    reposContainer.innerHTML = reposToDisplay.map(repo => {
        const description = repo.description || 'Public software engineering repository demonstrating clean code and architectural best practices.';
        const language = repo.language || 'Code';
        const stars = repo.stargazers_count ?? 0;
        const forks = repo.forks_count ?? 0;
        const updatedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        return `
            <div class="repo-card">
                <div class="repo-name-row">
                    <span class="repo-name">
                        <i class="fab fa-github"></i> ${escapeHtml(repo.name)}
                    </span>
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn-icon-only" aria-label="View on GitHub">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
                <p class="repo-desc">${escapeHtml(description)}</p>
                <div class="repo-meta-row">
                    <div class="repo-lang">
                        <span class="repo-lang-dot" style="background-color: ${getLanguageColor(language)}"></span>
                        <span>${escapeHtml(language)}</span>
                    </div>
                    <div class="repo-counts">
                        <span title="Stars"><i class="far fa-star"></i> ${stars}</span>
                        <span title="Forks"><i class="fas fa-code-branch"></i> ${forks}</span>
                        <span title="Last updated"><i class="far fa-clock"></i> ${updatedDate}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Toggle Load More button visibility
    if (loadMoreBtn) {
        if (visibleRepoCount >= allRepositories.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

function useFallbackData() {
    allRepositories = CONFIG.FALLBACK_REPOS;
    renderRepositories();
}

function getLanguageColor(language) {
    const colors = {
        'Java': '#b07219',
        'Python': '#3572A5',
        'Dart': '#00B4AB',
        'JavaScript': '#f1e05a',
        'TypeScript': '#3178c6',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'C++': '#f34b7d',
        'C': '#555555'
    };
    return colors[language] || '#8b5cf6';
}

function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
