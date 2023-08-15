import { EUserRole } from '../consts/consts';
import { IFeaturesFlags } from '@/shared/types/featuresFlags';
import { IJsonSettings } from './jsonSettings';

export interface IUser {
  id: string
  username: string,
  avatar?: string
  roles?: EUserRole[],
  features?: IFeaturesFlags,
  jsonSettings?: IJsonSettings
}

export interface IUserSchema {
  authData?: IUser,
  _mounted?: boolean
}
