import { EUserRole } from '../consts/consts';
import { IFeaturesFlags } from '@/shared/types/featuresFlags';

export interface IUser {
    id: string
    username: string,
    avatar?: string
    roles?: EUserRole[],
    features?: IFeaturesFlags
}

export interface IUserSchema {
    authData?: IUser,
    _mounted?:boolean
}
