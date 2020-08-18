import { useCreator } from '../utils/createContext';
import { CounterContexts } from '../context/CounterContext';

export const useCounter = () => {
  const [counter, dispatch] = useCreator(CounterContexts);

  const plus = () => dispatch({ type: 'ADD' });
  const minus = () => dispatch({ type: 'MINUS' });

  return { counter, plus, minus };

  // or make custom action creator
  // const doSomething = () => dispatch({type : 'DO_SOMETHING'})

  // return { counter, doSomething };
};
