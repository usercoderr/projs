import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Rating.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, EButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface IRatingProps {
    className?: string
    title?:string
    feedbackTitle?: string
    hasFeedback?: boolean,
    rate?: number
    max?: boolean
    onCancel?:(starsCount: number) =>void,
    onAccept?: (starsCount: number, feedback?:string) => void
}

export const Rating = memo((props: IRatingProps) => {
    const { t } = useTranslation();
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onAccept,
        max,
        rate = 0,
        onCancel,
    } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        setIsModalOpen(true);
        onAccept?.(selectedStarsCount);
    }, [onAccept]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);
    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);
    const onClose = () => {
        setIsModalOpen(false);
    };

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                onChange={setFeedback}
                value={feedback}
                fullWidth
                placeholder={t('feedback')}
            />
        </>
    );

    return (
        <Card className={classNames(cls.Rating, { [cls.max]: max }, [className])}>
            <VStack align="center" gap="8">
                <Text title={starsCount ? t('thankYou') : title} />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>

                <Modal isOpen={isModalOpen} onClose={onClose} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max justify="between">
                            <Button
                                onClick={cancelHandler}
                                theme={EButtonTheme.OUTLINE_RED}
                            >
                                {t('cancel')}
                            </Button>
                            <Button
                                onClick={acceptHandler}
                                theme={EButtonTheme.OUTLINE_GREEN}
                            >
                                {
                                    t('send')
                                }
                            </Button>
                        </HStack>
                    </VStack>

                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={onClose}>
                    <VStack gap="8">
                        {modalContent}
                        <Button
                            fullWidth
                            onClick={acceptHandler}
                            theme={EButtonTheme.OUTLINE_GREEN}
                        >
                            {
                                t('send')
                            }
                        </Button>
                        <Button
                            fullWidth
                            onClick={cancelHandler}
                            theme={EButtonTheme.OUTLINE_RED}
                        >
                            {t('cancel')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
