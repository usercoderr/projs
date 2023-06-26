import { ECurrency } from 'entities/Currency/model/types/currency';
import { ECountry } from 'entities/Country/model/types/country';

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
    readonly :boolean
}
