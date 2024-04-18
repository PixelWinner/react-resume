import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { QueriesProvider } from "@utils/providers/QueriesProvider";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const AppLayout = () => {
    return (
        <QueriesProvider>
            <Container>
                <Outlet />
            </Container>
        </QueriesProvider>
    );
};

export default AppLayout;
