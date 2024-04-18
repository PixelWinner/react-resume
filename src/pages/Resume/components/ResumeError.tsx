import React, { FC } from "react";
import { ResumeContainer } from "@pages/Resume/components/ResumeContainer.styled";
import { BackgroundWrapper } from "@pages/Resume/components/BackgroundWrapper.styled";
import { Typography } from "@mui/material";
import { AxiosError } from "axios";
import ToHomeButton from "@components/ToHomeButton";


type ResumeErrorProps = {
    error: unknown;
}

const ResumeError: FC<ResumeErrorProps> = ({ error }) => {
    if(error instanceof AxiosError) {
        const message = error?.message;
        const details = error?.response?.data?.message

       return (
           <BackgroundWrapper>
               <ResumeContainer sx={{alignItems: "center"}}>
                   <Typography variant="h3">
                       Error loading user data!
                   </Typography>

                   {message && <Typography variant="body1">
                       Error message: {message}
                   </Typography>}

                   {details && <Typography variant="body1">
                       Error details: {details}
                   </Typography>}

                   <ToHomeButton/>
               </ResumeContainer>
           </BackgroundWrapper>
       )
    }

    return (
        <BackgroundWrapper>
            <ResumeContainer sx={{alignItems: "center"}}>
                <Typography variant="h3">
                    Error loading user data!
                </Typography>

                <ToHomeButton/>
            </ResumeContainer>
        </BackgroundWrapper>
    );
};

export default ResumeError;
