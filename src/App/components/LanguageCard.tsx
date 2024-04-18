import React, { FC } from "react";
import { Box, Link, Typography } from "@mui/material";

type LanguageCardProps = {
    language: string;
    percentage: number;
    userName: string
}

const LanguageCard: FC<LanguageCardProps> = ({ language, percentage, userName }) => {
    const href = `https://github.com/search?q=user:${userName}+language:${encodeURIComponent(language)}&type=Repositories`;

    return (
        <Box>
            <Typography variant="body2">
                <Link href={href} target="_blank" rel="noopener">{language}</Link>: {percentage}%
            </Typography>
        </Box>
    );
};

export default LanguageCard;