import React, { FC } from "react";
import styled from "styled-components";
import { Box, Link, Typography } from "@mui/material";
import { GitHubRepository } from "@utils/typings/common.types";

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
`;

type RepositoryCardProps = {
    repository: GitHubRepository
};

const RepositoryCard: FC<RepositoryCardProps> = ({ repository }) => {
    const { name, html_url, forks_count, stargazers_count, description, language } = repository;

    return (
        <Container>
            <Typography variant="body2">
               Name: <Link href={html_url} target="_blank" rel="noopener">{name}</Link>
            </Typography>

            <Typography variant="body2">
                Language: {language ?? "No information available"}
            </Typography>

            <Typography variant="body2">
                Stars: {stargazers_count}
            </Typography>

            <Typography variant="body2">
                Forks: {forks_count}
            </Typography>

            <Typography variant="body2">
                Description: {description ?? "No description available"}
            </Typography>

        </Container>
    );
};

export default RepositoryCard;

