import { IFeaturesFlags } from '@/shared/types/featuresFlags';
import { getFeatureFlag } from '@/shared/features/setGetFeatures';

interface ToogleFeaturesOptions<T>{
  name: keyof IFeaturesFlags,
  on: () => T,
  off: () => T
}
export function toggleFeatures<T>(props: ToogleFeaturesOptions<T>): T {
    const { on, off, name } = props;
    if (getFeatureFlag(name)) {
        return on();
    }
    return off();
}
