import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User/model/slices/userSlice';
import { getUserAuthData } from 'entities/User';
import { useNavigate } from 'react-router';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authData = useSelector(getUserAuthData);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logOut());
        navigate('/');
    }, [dispatch]);

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                {authData ? (
                    <Button
                        onClick={onLogOut}
                        theme={EButtonTheme.CLEAR_INVERTED}
                    >
                        LogOut
                    </Button>
                ) : (
                    <Button
                        onClick={onShowModal}
                        theme={EButtonTheme.CLEAR_INVERTED}
                    >
                        LogIn
                    </Button>
                )}
            </div>
            {
                isAuthModal
            && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            }

        </header>
    );
};
