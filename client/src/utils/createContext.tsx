import React, {
  createContext,
  Dispatch,
  useReducer,
  useContext,
  ReactElement,
} from 'react';

type Reducer<S, A> = (state: S, action: A) => S;

type ContextCollection<S, A> = {
  StateContext: React.Context<S | undefined>;
  DispatchContext: React.Context<React.Dispatch<A> | undefined>;
};

export const contextCreator = <S, A>(
  reducer: Reducer<S, A>,
  initialState: S
) => {
  const StateContext = createContext<S | undefined>(undefined);
  const DispatchContext = createContext<Dispatch<A> | undefined>(undefined);

  const ContextProvider: React.FC = ({ children }) => {
    const [todos, dispatch] = useReducer(reducer, initialState);

    return (
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={todos}>{children}</StateContext.Provider>
      </DispatchContext.Provider>
    );
  };

  const Contexts: ContextCollection<S, A> = {
    StateContext,
    DispatchContext,
  };

  return { ContextProvider, Contexts };
};

export const useCreator = <S, A>(
  Context: ContextCollection<S, A>
): [S, Dispatch<A>] => {
  const state = useContext(Context.StateContext);
  if (state === undefined) {
    throw new Error('StateContext not found');
  }

  const dispatch = useContext(Context.DispatchContext);
  if (dispatch === undefined) {
    throw new Error('DispatchContext not found');
  }

  return [state, dispatch];
};

// export const CombineProvider = (...Providers: React.FC[]) => (
//   App: React.FC<any> | ReactElement
// ) => {
//   const entry = App instanceof React.Component ? <App /> : App;

//   const combinedProvider = Providers.reduce(
//     (acc, Provider) => <Provider>{acc}</Provider>,
//     entry
//   );
//   return combinedProvider;
// };

export const CombineProviderApp = (...Providers: React.FC[]) => (
  App: ReactElement
) => Providers.reduce((acc, Provider) => <Provider>{acc}</Provider>, App);
