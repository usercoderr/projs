import { IFeaturesFlags } from '@/shared/types/featuresFlags';
import { getFeatureFlags } from '@/shared/features/lib/setGetFeatures';

interface ToggleFeaturesOptions<T>{
  name: keyof IFeaturesFlags,
  on: () => T,
  off: () => T
}
export function toggleFeatures<T>(props: ToggleFeaturesOptions<T>): T {
    const { on, off, name } = props;
    if (getFeatureFlags(name)) {
        return on();
    }
    return off();
}
