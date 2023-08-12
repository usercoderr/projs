import { EValidateProfileError } from '../../consts/consts';
export var validateProfileData = function (profile) {
    if (!profile) {
        return [EValidateProfileError.NO_DATA];
    }
    var firstname = profile.firstname, lastname = profile.lastname, avatar = profile.avatar, age = profile.age, country = profile.country;
    var errors = [];
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
