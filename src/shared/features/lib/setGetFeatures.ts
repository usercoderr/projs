import { IFeaturesFlags } from '../../types/featuresFlags';

let featureFlags: IFeaturesFlags = {};
export function setFeatureFlags(newFeatureFlags?: IFeaturesFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}
export function getFeatureFlags(flag:keyof IFeaturesFlags) {
    return featureFlags?.[flag];
}
export function getAllFeatureFlags() {
    return featureFlags;
}
