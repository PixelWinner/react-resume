import React from "react";
import { LanguagesContainer } from "@pages/Resume/components/Languages/components/LanguagesContainer.styled";
import { CardsContainer } from "@pages/Resume/components/Languages/components/CardsContainer.styled";
import { Skeleton } from "@mui/material";

const LanguagesLoader = () => {
    return (
        <LanguagesContainer>
            <Skeleton variant="text" sx={{ width: "80px" }} />

            <CardsContainer>
                <Skeleton variant="text" sx={{ width: "100px" }} />
                <Skeleton variant="text" sx={{ width: "100px" }} />
                <Skeleton variant="text" sx={{ width: "100px" }} />

                <Skeleton variant="text" sx={{ width: "100px" }} />
                <Skeleton variant="text" sx={{ width: "100px" }} />
                <Skeleton variant="text" sx={{ width: "100px" }} />
            </CardsContainer>
        </LanguagesContainer>
    );
};

export default LanguagesLoader;