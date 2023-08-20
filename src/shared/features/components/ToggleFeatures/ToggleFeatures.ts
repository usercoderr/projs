import { ReactElement } from 'react';
import { IFeaturesFlags } from '@/shared/types/featuresFlags';
import { getFeatureFlags } from '@/shared/features/lib/setGetFeatures';

interface ToggleFeaturesProps{
  feature: keyof IFeaturesFlags,
  on: ReactElement,
  off: ReactElement
}
export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { on, off, feature } = props;
    if (getFeatureFlags(feature)) {
        return on;
    }
    return off;
};
