import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PAGE_PATH } from "@utils/constants/common.constants";
import { QUERY_CLIENT } from "../../api/queryClient/queryClient";

const ToHomeButton = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(PAGE_PATH.main);

        QUERY_CLIENT.cancelQueries()
        QUERY_CLIENT.removeQueries();
    };

    return (
        <Button variant="contained" onClick={handleNavigate}>
            To home page
        </Button>
    );
};

export default ToHomeButton;