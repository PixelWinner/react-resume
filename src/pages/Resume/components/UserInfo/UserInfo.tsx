import React from "react";
import { Link, Typography } from "@mui/material";

import { format } from "date-fns";
import { DATE_TIME_FORMAT } from "@utils/constants/common.constants";
import { Details } from "@utils/styles/Details.styled";
import { useQueriesContext } from "@utils/providers/QueriesProvider";
import { HeaderContainer } from "@pages/Resume/components/Header/components/HeaderContainer.styled";
import UserInfoLoader from "@pages/Resume/components/UserInfo/components/UserInfo.loader";


const UserInfo = () => {
    const { userInfo } = useQueriesContext();

    if (userInfo?.isLoading) {
        return <UserInfoLoader />;
    }

    if (!userInfo?.data) {
        return <HeaderContainer>User info: No data available!</HeaderContainer>;
    }

    const { name, email, company, blog, created_at, bio } = userInfo.data;

    return (
        <Details>
            {name && <Typography variant="body1"><strong>Name:</strong> {name}</Typography>}

            {bio && <Typography variant="body1"><strong>Bio:</strong> {bio}</Typography>}

            {email && <Typography variant="body1"><strong>Email:</strong> {email}</Typography>}

            {company && <Typography variant="body1"><strong>Company:</strong> {company}</Typography>}

            {blog && (
                <Typography variant="body1">
                    <strong>Blog:</strong> <Link href={blog} target="_blank" rel="noopener">{blog}</Link>
                </Typography>
            )}

            <Typography variant="body1">
                <strong>Account created:</strong> {format(new Date(created_at), DATE_TIME_FORMAT.shortDate)}
            </Typography>
        </Details>
    );
};

export default UserInfo;
