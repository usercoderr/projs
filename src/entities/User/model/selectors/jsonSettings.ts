import { buildSelector } from '@/shared/lib/store';
import { StateSchema } from '@/app/providers/StoreProvider';
import { IJsonSettings } from '../types/jsonSettings';

export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state:StateSchema) => state.user?.authData?.jsonSettings,
);

export const [useJsonSettingsByKey, getJsonSettingsByKey] = buildSelector(
    (state:StateSchema, key:keyof IJsonSettings) => state.user?.authData?.jsonSettings?.[key],
);
