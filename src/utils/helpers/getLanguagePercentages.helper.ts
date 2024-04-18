import { LanguageStats } from "@utils/typings/common.types";

export const getLanguagePercentages = (languages: LanguageStats, limit: number = 9) => {
    const totalBytes = Object.values(languages).reduce((total, current) => total + current, 0);

    const sortedLanguages = Object.entries(languages)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit);

    const languagePercentages: LanguageStats = {};

    sortedLanguages.forEach(([language, bytes]) => {
        languagePercentages[language] = Number(((bytes / totalBytes) * 100).toFixed(2));
    });

    return languagePercentages;

};