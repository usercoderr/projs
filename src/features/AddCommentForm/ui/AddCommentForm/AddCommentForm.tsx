import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import {
    DynamicModalLoader,
    TReducerList,
} from '@/shared/lib/components/DynamicModalLoader/DynamicModalLoader';
import cls from './AddCommentForm.module.scss';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/AddCommentFormSlice';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelector';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, EButtonTheme } from '@/shared/ui/deprecated/Button';

export interface IAddCommentFormProps {
    className?: string,
    onSendComment: (text: string) => void
}

const reducers:TReducerList = {
    addCommentForm: addCommentFormReducer,

};
const AddCommentForm = memo(({ className, onSendComment }: IAddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value:string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);
    const onSendHandler = useCallback(() => {
        onSendComment(text);
        onCommentTextChange('');
    }, [onSendComment, onCommentTextChange, text]);
    return (
        <DynamicModalLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t('LeaveComment')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    theme={EButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Send')}
                </Button>
            </div>
        </DynamicModalLoader>
    );
});

export default AddCommentForm;
