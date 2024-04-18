import React from "react";
import { Skeleton } from "@mui/material";
import { Details } from "@utils/styles/Details.styled";
import { RepositoriesContainer } from "@utils/styles/RepositoriesContainer.styled";

const EditedRepositoriesLoader = () => {
    return (
        <RepositoriesContainer>
            <Skeleton variant="text" sx={{ width: "160px" }} />

            <Details>
                <Skeleton variant="rectangular" sx={{ width: "160px", height: "120px" }} />
                <Skeleton variant="rectangular" sx={{ width: "160px", height: "120px" }} />
                <Skeleton variant="rectangular" sx={{ width: "160px", height: "120px" }} />
            </Details>
        </RepositoriesContainer>
    );
};

export default EditedRepositoriesLoader;