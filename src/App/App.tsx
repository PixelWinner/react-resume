import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppPages from "@pages/AppPages";
import { ErrorBoundary } from "./ErrorBoundary";
import { GlobalStyle } from "@utils/styles/GlobalStyles";
import { QueryClientProvider } from "react-query";
import { QUERY_CLIENT } from "../api/queryClient/queryClient";

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <ErrorBoundary>
                <QueryClientProvider client={QUERY_CLIENT}>
                    <AppPages />
                    <GlobalStyle />
                </QueryClientProvider>
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export default App;
