import React, { Fragment } from "react";
import { Details } from "@utils/styles/Details.styled";
import { Divider, Typography } from "@mui/material";
import { getPopularRepositories } from "@utils/helpers/getPopularRepositories.helper";
import RepositoryCard from "@components/RepositoryCard";
import { useQueriesContext } from "@utils/providers/QueriesProvider";
import { HeaderContainer } from "@pages/Resume/components/Header/components/HeaderContainer.styled";
import PopularRepositoriesLoader from "@pages/Resume/components/PopularRepositories/components/PopularRepositories.loader";
import { RepositoriesContainer } from "@utils/styles/RepositoriesContainer.styled";

const PopularRepositories = () => {
    const { repositories } = useQueriesContext();

    if (repositories?.isLoading) {
        return <PopularRepositoriesLoader />;
    }

    if (repositories?.isError || !repositories?.data) {
        return <HeaderContainer>Popular repositories: No data available!</HeaderContainer>;
    }

    const popularRepositories = getPopularRepositories(repositories.data);

    const repositoriesDetails = popularRepositories.map((repository, index) => {
        return (
            <Fragment key={repository.id}>
                <RepositoryCard repository={repository} />

                {index !== popularRepositories.length - 1 && <Divider />}
            </Fragment>
        );
    });


    return (
        <RepositoriesContainer>
            <Typography variant="body1" fontWeight="bolder" sx={{ maxWidth: "160px" }}>Popular repositories:</Typography>

            <Details>
                {repositoriesDetails}
            </Details>
        </RepositoriesContainer>
    );
};

export default PopularRepositories;