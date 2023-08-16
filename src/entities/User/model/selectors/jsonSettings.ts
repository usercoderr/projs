import { buildSelector } from '@/shared/lib/store';
import { StateSchema } from '@/app/providers/StoreProvider';
import { IJsonSettings } from '../types/jsonSettings';

const defaultJsonSettings: IJsonSettings = {};
export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state:StateSchema) => state.user?.authData?.jsonSettings ?? defaultJsonSettings,
);
