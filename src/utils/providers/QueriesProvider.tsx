import React, { FC, PropsWithChildren, createContext, useContext, useMemo } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { ApiTag } from "@utils/enums/api.enums";
import { getLanguageStats, getUserInfo, getUserRepositories } from "../../api/api";
import { useParams } from "react-router-dom";
import { GitHubRepository, GitHubUser, LanguageStats } from "@utils/typings/common.types";

type QueriesContextType = {
    userInfo: UseQueryResult<GitHubUser, unknown> | undefined;
    repositories: UseQueryResult<GitHubRepository[], unknown> | undefined;
    languageStats: UseQueryResult<LanguageStats, unknown> | undefined;
};

const ThemeContext = createContext<QueriesContextType>({
    userInfo: undefined,
    repositories: undefined,
    languageStats: undefined

});

export const QueriesProvider: FC<PropsWithChildren> = ({ children }) => {
    const { userName = "" } = useParams();

    const userInfo = useQuery(ApiTag.USER_INFO, ({ signal }) => getUserInfo(userName, signal), { enabled: !!userName });
    const repositories = useQuery(ApiTag.USER_REPO, ({ signal }) => getUserRepositories(userName, signal), { enabled: !!userName });
    const languageStats = useQuery(ApiTag.LANGUAGE_STATS, ({ signal }) => getLanguageStats(userName, signal, repositories?.data), { enabled: !!userName && !!repositories?.data?.length });


    const contextValue: QueriesContextType = useMemo(
        () => ({
            userInfo,
            repositories,
            languageStats
        }),
        [userInfo, repositories, userName]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useQueriesContext = () => useContext(ThemeContext);

