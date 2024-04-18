import React, { Fragment } from "react";
import { useQueriesContext } from "@utils/providers/QueriesProvider";
import { Details } from "@utils/styles/Details.styled";
import { Box, Divider, Typography } from "@mui/material";
import RepositoryCard from "@components/RepositoryCard";
import styled from "styled-components";
import { HeaderContainer } from "@pages/Resume/components/Header/components/HeaderContainer.styled";
import EditedRepositoriesLoader from "@pages/Resume/components/EditedRepositories/components/EditedRepositories.loader";

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 8px;`;


const EditedRepositories = () => {
    const { repositories } = useQueriesContext();

    if (repositories?.isLoading) {
        return <EditedRepositoriesLoader />;
    }

    if (repositories?.isError || !repositories?.data) {
        return <HeaderContainer>Recently edited repositories: No data available!</HeaderContainer>;
    }

    const slicedRepositories = repositories.data.slice(0, 5)

    const repositoriesDetails = slicedRepositories.map((repository, index) => {
        return (
            <Fragment key={repository.id}>
                <RepositoryCard repository={repository} />

                {index !== slicedRepositories.length - 1 && <Divider />}
            </Fragment>
        );
    });


    return (
        <Container>
            <Typography variant="body1" fontWeight="bolder" sx={{maxWidth:"160px"}}>Recently edited repositories:</Typography>

            <Details>
                {repositoriesDetails}
            </Details>
        </Container>
    );
};

export default EditedRepositories;