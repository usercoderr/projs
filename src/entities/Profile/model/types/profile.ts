import { ECurrency } from 'entities/Currency/model/types/currency';
import { ECountry } from 'entities/Country/model/types/country';

export enum EValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface IProfile {
    firstname?: string,
    lastname?: string,
    age?: number,
    currency?: ECurrency,
    country?: ECountry,
    city?: string,
    username?: string,
    avatar?: string
}

export interface IProfileSchema {
    data?: IProfile,
    form?: IProfile,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validateError?: EValidateProfileError[]
}
