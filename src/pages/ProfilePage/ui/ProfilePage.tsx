import { useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { VStack } from '@/shared/ui/Stack';
import {
    EditableProfileCard,
} from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { Page } from '@/widgets/Page';
import { Skeleton } from '@/shared/ui/Skeleton';

const ProfilePage = () => {
    const { id } = useParams<{id: string}>();
    if (!id) {
        return null;
    }
    return (
        <Page data-testid="ProfilePage">
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                <Suspense fallback={<Skeleton width="100%" height={120} />}>
                    <ProfileRating profileId={id} />
                </Suspense>
            </VStack>
        </Page>
    );
};

export default ProfilePage;
