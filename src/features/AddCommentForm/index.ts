export {
    addCommentFormActions,
    addCommentFormReducer,
} from './model/slices/AddCommentFormSlice';

export { AddCommentFormAsync as AddCommentForm } from './ui/AddCommentForm/AddCommentForm.async';

export {
    getAddCommentFormText,
    getAddCommentFormError,
} from './model/selectors/addCommentFormSelector';

export type { IAddCommentFormSchema } from './model/types/addCommentForm';
