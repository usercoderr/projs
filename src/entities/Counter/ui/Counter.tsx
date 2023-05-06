import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/modal/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../modal/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <hr />
            <Button onClick={increment} data-testid="increment-btn">Increment</Button>
            <Button onClick={decrement} data-testid="decrement-btn">Decrement</Button>

        </div>
    );
};
