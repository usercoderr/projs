import {classNames} from 'shared/lib/classNames/classNames';
import {createPortal} from 'react-dom';
import {ReactNode} from 'react';

interface IPortalProps {
    children: ReactNode
    element?: HTMLElement
}

export const Portal = (props: IPortalProps) => {
    const {children, element = document.body} = props;
    return createPortal(children, element);
};
