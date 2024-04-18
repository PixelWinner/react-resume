import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import ToHomeButton from "@components/ToHomeButton";

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px`;

const Footer = () => {
    return (
        <Container>
            <Typography variant="body1">
                Want to see the other users?
            </Typography>

            <ToHomeButton />
        </Container>
    );
};

export default Footer;