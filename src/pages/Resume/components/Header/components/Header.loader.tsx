import React from "react";
import { HeaderContainer } from "@pages/Resume/components/Header/components/HeaderContainer.styled";
import { Skeleton } from "@mui/material";

const HeaderLoader = () => {
    return (
        <HeaderContainer>
            <Skeleton variant="text" sx={{ width: "300px" }} />

            <Skeleton variant="circular" width={48} height={48} />
        </HeaderContainer>
    );
};

export default HeaderLoader;