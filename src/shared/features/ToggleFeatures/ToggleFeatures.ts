import { ReactElement } from 'react';
import { IFeaturesFlags } from '@/shared/types/featuresFlags';
import { getFeatureFlag } from '@/shared/features/setGetFeatures';

interface ToggleFeaturesProps{
  feature: keyof IFeaturesFlags,
  on: ReactElement,
  off: ReactElement
}
export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { on, off, feature } = props;
    if (getFeatureFlag(feature)) {
        return on;
    }
    return off;
};
