import React from "react";
import { Divider } from "@mui/material";
import Header from "@pages/Resume/components/Header/Header";
import UserInfo from "@pages/Resume/components/UserInfo/UserInfo";
import RepositoriesInfo from "@pages/Resume/components/RepositoriesInfo/RepositoriesInfo";
import PopularRepositories from "@pages/Resume/components/PopularRepositories/PopularRepositories";
import { useQueriesContext } from "@utils/providers/QueriesProvider";
import EditedRepositories from "@pages/Resume/components/EditedRepositories/EditedRepositories";
import Languages from "@pages/Resume/components/Languages/Languages";
import { ResumeContainer } from "@pages/Resume/components/ResumeContainer.styled";
import { BackgroundWrapper } from "@pages/Resume/components/BackgroundWrapper.styled";
import ResumeError from "@pages/Resume/components/ResumeError";
import Footer from "@pages/Resume/components/Footer";


const Resume = () => {
    const { userInfo } = useQueriesContext();

    if (userInfo?.error) {
        return <ResumeError error={userInfo?.error} />;
    }

    return (
        <BackgroundWrapper>
            <ResumeContainer>
                <Header />

                <Divider />

                <UserInfo />

                <Divider />

                <RepositoriesInfo />

                <Divider />

                <Languages />

                <Divider />

                <PopularRepositories />

                <Divider />

                <EditedRepositories />

                <Divider/>

                <Footer/>
            </ResumeContainer>
        </BackgroundWrapper>
    );
};

export default Resume;