import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page/Page';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import {
    EditableProfileCard,
} from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';

const ProfilePage = () => {
    const { id } = useParams<{id: string}>();
    if (!id) {
        return null;
    }
    return (
        <Page>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
