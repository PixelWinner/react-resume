import React from "react";
import { Skeleton } from "@mui/material";
import { Details } from "@utils/styles/Details.styled";

const RepositoriesInfoLoader = () => {
    return (
        <Details>
            <Skeleton variant="text" sx={{ width: "180px" }} />

            <Skeleton variant="text" sx={{ width: "180px" }} />
        </Details>
    );
};

export default RepositoriesInfoLoader;