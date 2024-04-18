import { GitHubRepository } from "@utils/typings/common.types";

export const getPopularRepositories = (repositories: GitHubRepository[], topN: number = 5): GitHubRepository[] => {
    return repositories
        .toSorted((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, topN);
};