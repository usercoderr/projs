import { IProfile } from 'entities/Profile';
import { EValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: IProfile) => {
    if (!profile) {
        return [EValidateProfileError.NO_DATA];
    }
    const {
        firstname,
        lastname,
        avatar,
        age,
        country,
    } = profile;
    const errors:EValidateProfileError[] = [];
    if (!firstname || !lastname) {
        errors.push(EValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(EValidateProfileError.INCORRECT_USER_AGE);
    }
    if (!country) {
        errors.push(EValidateProfileError.INCORRECT_USER_COUNTRY);
    }

    return errors;
};
