import { IFeaturesFlags } from '../types/featuresFlags';

let featureFlags: IFeaturesFlags = {};
export function setFeatureFlags(newFeatureFlags?: IFeaturesFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}
export function getFeatureFlag(flag:keyof IFeaturesFlags) {
    return featureFlags?.[flag];
}
