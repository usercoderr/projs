import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    memo, MutableRefObject, ReactNode, UIEvent, useEffect, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getScrollByPath, scrollSaverActions } from 'features/ScrollSaver';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface IPageProps {
    className?: string,
    children: ReactNode,
    onScrollEnd?: () => void
}

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
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
