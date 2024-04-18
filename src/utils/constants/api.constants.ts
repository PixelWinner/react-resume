export const API_URL = {
    main: "https://api.github.com/",
    getUser: (userName: string) => `users/${userName}`,
    getLanguages: (userName: string, repo: string) => `repos/${userName}/${repo}/languages`,
    getRepositories: (userName: string, page: number) => `users/${userName}/repos?per_page=100&page=${page}&sort=updated`
};

