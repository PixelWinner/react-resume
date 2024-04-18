import React from "react";
import { Typography } from "@mui/material";
import { useQueriesContext } from "@utils/providers/QueriesProvider";
import { getLanguagePercentages } from "@utils/helpers/getLanguagePercentages.helper";
import LanguageCard from "@components/LanguageCard";
import { LanguagesContainer } from "@pages/Resume/components/Languages/components/LanguagesContainer.styled";
import { HeaderContainer } from "@pages/Resume/components/Header/components/HeaderContainer.styled";
import LanguagesLoader from "@pages/Resume/components/Languages/components/Languages.loader";
import { CardsContainer } from "@pages/Resume/components/Languages/components/CardsContainer.styled";

const Languages = () => {
    const { languageStats, userInfo } = useQueriesContext();

    if (languageStats?.isLoading || userInfo?.isLoading) {
        return <LanguagesLoader />;
    }

    if (languageStats?.isError || !languageStats?.data || !userInfo?.data) {
        return <HeaderContainer>Languages: No data available!</HeaderContainer>;
    }

    const stats = getLanguagePercentages(languageStats.data);

    const cards = Object.entries(stats).map(([language, percentage]) => {
        return <LanguageCard key={language} userName={userInfo.data.login} language={language} percentage={percentage} />;
    });

    return (
        <LanguagesContainer>
            <Typography variant="body1" fontWeight="bolder">
                Languages:
            </Typography>

            <CardsContainer>
                {cards}
            </CardsContainer>
        </LanguagesContainer>
    );
};

export default Languages;