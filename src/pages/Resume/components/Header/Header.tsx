import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { useQueriesContext } from "@utils/providers/QueriesProvider";
import HeaderLoader from "@pages/Resume/components/Header/components/Header.loader";
import { HeaderContainer } from "@pages/Resume/components/Header/components/HeaderContainer.styled";



const Img = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;

    @media screen and (max-width: 480px) {
        width: 48px;
        height: 48px;
    }
`;

const Header = () => {
    const { userInfo } = useQueriesContext();

    if (userInfo?.isLoading) {
        return <HeaderLoader />;
    }

    if (!userInfo?.data) {
        return <HeaderContainer>User: No data available!</HeaderContainer>;
    }

    const { avatar_url, login } = userInfo.data;

    const avatar = avatar_url ? <Img src={avatar_url} alt="Avatat" /> : null;

    return (
        <HeaderContainer>
            <Typography variant="h4">Resume of {login}</Typography>
            {avatar}
        </HeaderContainer>
    );
};

export default Header;