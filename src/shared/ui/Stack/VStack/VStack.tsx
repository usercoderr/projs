import { Flex, IFlexProps } from 'shared/ui/Stack/Flex/Flex';

type VStackProps = Omit<IFlexProps, 'direction'>
export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return (
        <Flex
            {...props}
            direction="column"
            align={align}
        />
    );
};