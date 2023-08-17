import { useCounterValue } from '../modal/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../modal/slices/counterSlice';
import { Button } from '@/shared/ui/deprecated/Button';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { increment, decrement } = useCounterActions();
    const handleIncrement = () => {
        increment();
    };
    const handleDecrement = () => {
        decrement();
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <hr />
            <Button onClick={handleIncrement} data-testid="increment-btn">+</Button>
            <Button onClick={handleDecrement} data-testid="decrement-btn">-</Button>
        </div>
    );
};
