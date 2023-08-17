import { useTranslation } from 'react-i18next';
import {
    memo, MutableRefObject, ReactNode, UIEvent, useEffect, useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getScrollByPath, scrollSaverActions } from '@/features/ScrollSaver';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';
import { ITestProps } from '@/shared/types/tests';
import { toggleFeatures } from '@/shared/features';

interface IPageProps extends ITestProps{
    className?: string,
    children: ReactNode,
    onScrollEnd?: () => void
}
export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: IPageProps) => {
    const { t } = useTranslation();
    const {
        className,
        children,
        onScrollEnd,
    } = props;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollByPath(state, pathname),
    );
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaverActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);
    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });
    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    }, [scrollPosition]);
    return (
        <main
            data-testid={props['data-testid'] ?? 'Page'}
            ref={wrapperRef}
            className={classNames(toggleFeatures({
                name: 'isAppRedesigned',
                on: () => cls.PageRedesigned,
                off: () => cls.Page,
            }), {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {onScrollEnd
                ? (
                    <div className={cls.trigger} ref={triggerRef} />
                ) : null}
        </main>
    );
});
