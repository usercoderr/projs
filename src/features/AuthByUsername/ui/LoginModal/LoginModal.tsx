import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.Async';
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
            <LoginFormAsync onSuccess={onClose} />
        </Modal>
    );
};
