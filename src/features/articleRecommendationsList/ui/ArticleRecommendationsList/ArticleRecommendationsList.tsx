import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { ArticleList } from '@/entities/Article';
import { ETextSize, Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data: articles, error } = useArticleRecommendationsList(3);
    if (isLoading || error || !articles) {
        return null;
    }
    return (
        <VStack
            data-testid="ArticleRecommendationsList"
            gap="8"
            className={classNames('', {}, [className])}
        >
            <Text
                size={ETextSize.L}
                title={t('recommendations')}
            />

            <ArticleList
                articles={articles}
            />

        </VStack>
    );
});
