import { rtkApi } from '@/shared/api/rtkApi';
import { IFeaturesFlags } from '@/shared/types/featuresFlags';

interface FeatureFlagsOptions{
  userId: string,
  features: Partial<IFeaturesFlags>
}

const featureFlagsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({

        updateFeatureFlags: build.mutation<void, FeatureFlagsOptions>({
            query: ({ userId, features }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    features,
                },
            }),
        }),

    }),
});

export const updateFeatureFlagsMutation = featureFlagsApi.endpoints.updateFeatureFlags.initiate;
