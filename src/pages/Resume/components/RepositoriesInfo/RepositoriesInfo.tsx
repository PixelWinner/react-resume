import React from "react";
import { Details } from "@utils/styles/Details.styled";
import { Typography } from "@mui/material";
import { useQueriesContext } from "@utils/providers/QueriesProvider";
import { HeaderContainer } from "@pages/Resume/components/Header/components/HeaderContainer.styled";
import RepositoriesInfoLoader from "@pages/Resume/components/RepositoriesInfo/components/RepositoriesInfo.loader";


const RepositoriesInfo = () => {
    const { userInfo } = useQueriesContext();

    if (userInfo?.isLoading) {
        return <RepositoriesInfoLoader />;
    }

    if (!userInfo?.data) {
        return <HeaderContainer>Repositories info: No data available!</HeaderContainer>;
    }

    const { public_repos, public_gists } = userInfo.data;

    return (
        <Details>
            <Typography variant="body1"><strong>Public repositories:</strong> {public_repos}</Typography>

            <Typography variant="body1"><strong>Public gists:</strong> {public_gists}</Typography>
        </Details>
    );
};

export default RepositoriesInfo;