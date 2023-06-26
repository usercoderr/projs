import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from 'features/AuthByUsername';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './LoginModal.module.scss';

interface ILoginModalProps{
    className?: string,
    isOpen:boolean,
    onClose : () => void,
}
export const LoginModal = ({ className, isOpen, onClose }: ILoginModalProps) => {
    const { t } = useTranslation();
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            className={classNames(cls.LoginModal, {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
