import { Flex, IFlexProps } from '@/shared/ui/Stack';

type HStackProps = Omit<IFlexProps, 'direction'>
export const HStack = (props: HStackProps) => {
    const hello = 'hello';
    return (
        <Flex direction="row" {...props} />
    );
};
