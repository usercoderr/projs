import { useCallback, useEffect, useRef, useState, } from 'react';
export function useModal(props) {
    var onClose = props.onClose, isOpen = props.isOpen, animationDelay = props.animationDelay;
    var _a = useState(false), isClosing = _a[0], setIsClosing = _a[1];
    var _b = useState(false), isMounted = _b[0], setIsMounted = _b[1];
    var timerRef = useRef(null);
    useEffect(function () {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);
    var close = useCallback(function () {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(function () {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);
    var onKeyDown = useCallback(function (e) {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);
    useEffect(function () {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return function () {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    return {
        isClosing: isClosing,
        isMounted: isMounted,
        close: close,
    };
}
