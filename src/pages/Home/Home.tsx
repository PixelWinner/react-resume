import React from "react";
import styled from "styled-components";
import { Button, TextField, Typography } from "@mui/material";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 16px;
`;

const Home = () => {
    const navigate = useNavigate();

    const initialValues = {
        userName: ""
    };

    const formikHook = useFormik({
        initialValues,
        validationSchema,
        onSubmit: ({ userName }) => {
            navigate(userName);
        }
    });

    return (
        <Form onSubmit={formikHook.handleSubmit}>
            <Typography variant="h3">Enter the GitHub username</Typography>

            <TextField id="userName" label="UserName" helperText={formikHook.errors.userName} onChange={formikHook.handleChange}
                       error={!!formikHook.errors.userName && formikHook.touched.userName} value={formikHook.values.userName} />

            <Button variant="contained" type="submit">Submit</Button>
        </Form>
    );
};

export default Home;

const validationSchema = toFormikValidationSchema(z.object({ userName: z.string().min(1) }));