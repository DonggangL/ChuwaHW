export const reducer = (state = [], {type, payload}) => {
    switch(type) {
      case 'INIT':
          return [...payload];
      case 'ADD':
        return [...state, {...payload}];
      case 'DEL':
        return [...state.slice(0, payload), ...state.slice(payload + 1)];
        // same as up.
        // const newState = [...state];
        // newState.splice(payload, 1);
        // return newState;
      case 'MOD':
        // const newState = [...state];
        // newState[payload].isCompleted = !newState[payload].isCompleted;
        // return newState;
        return state.map((todo, index) => {
            return index === payload ? {
                content: todo.content,
                isCompleted: !todo.isCompleted,
            } : todo;
        });
    default:
        return state;
    }
  };
  