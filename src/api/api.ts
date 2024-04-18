import axios from "axios";
import { API_URL } from "@utils/constants/api.constants";
import { GitHubRepository, GitHubUser, LanguageStats } from "@utils/typings/common.types";

export const AXIOS_INSTANCE = axios.create({
    baseURL: API_URL.main,
    headers: {
        "Authorization": import.meta.env.VITE_GITHUB_AUTH_TOKEN
    }
});

export const getUserInfo = async (userName: string, signal?: AbortSignal): Promise<GitHubUser> => {
    try {
        const response = await AXIOS_INSTANCE.get<GitHubUser>(API_URL.getUser(userName), { signal });
        return response.data;
    } catch (err) {
        console.error("Error fetching user info:", err);
        throw err;
    }
};

export const getRepoLanguages = async (userName: string, repo: string, signal?: AbortSignal): Promise<LanguageStats> => {
    try {
        const response = await AXIOS_INSTANCE.get<LanguageStats>(API_URL.getLanguages(userName, repo), { signal });
        return response.data;
    } catch (err) {
        console.error("Error fetching repository languages:", err);
        throw err;
    }
};

export const getUserRepositories = async (userName: string, signal?: AbortSignal): Promise<GitHubRepository[]> => {
    let allRepos: GitHubRepository[] = [];
    let page = 1;
    let response;

    try {
        do {
            response = await AXIOS_INSTANCE.get<GitHubRepository[]>(API_URL.getRepositories(userName, page), { signal });
            allRepos = allRepos.concat(response.data);
            page++;
        } while (response.data.length === 100);
    } catch (err) {
        console.error("Error fetching repositories:", err);
        throw err;
    }

    return allRepos;
};


export const getLanguageStats = async (userName: string, signal?: AbortSignal, repositories: GitHubRepository[] = []) => {
    try {
        const languagesStats: LanguageStats = {};

        for (const repo of repositories) {
            const languages = await getRepoLanguages(userName, repo.name, signal);
            for (const [language, bytes] of Object.entries(languages)) {
                if (languagesStats[language]) {
                    languagesStats[language] += bytes;
                } else {
                    languagesStats[language] = bytes;
                }
            }
        }

        return languagesStats;
    } catch (err) {
        console.error("Error fetching language statistics:", err);
        throw err;
    }
};
