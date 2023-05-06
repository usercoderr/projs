import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './Navbar.module.scss';
import {Modal} from "shared/ui/Modal/Modal";
import React, {useCallback, useState} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() =>{
        setIsAuthModal((prev) => !prev)
    },[])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    onClick={onToggleModal}
                    theme={ButtonTheme.CLEAR_INVERTED}
                >
                    Enter
                </Button>
            </div>
            <Modal onClose={onToggleModal} isOpen={isAuthModal}>
                loremsjbhvhvvgvgvgvgvgjvndsndjnsjfndfndfbskbf
            </Modal>

        </div>
    );
};
