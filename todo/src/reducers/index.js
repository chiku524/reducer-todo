export const initialList = {
    todo: [
      {
        what: 'Learn about reducers',
        id: 123,
        completed: false
      }
    ]
  }

  export const reducer = (state, action) => {

    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          todo: [...state.todo,
          {
            what: action.payload,
            id: Date.now(),
            completed: false
          }
          ]
        }
      case 'CLEAR_ALL':
        return {
          ...state,
          todo: state.todo.filter(item => !item.completed)
        }
      case 'TOGGLE_IT':
        return {
          ...state,
          todo: state.todo.map(item => {
            if (action.payload === item.id) {
              return {
                ...item,
                completed: !item.completed
              }
            }
            return {
              ...item
            }
          })
        }
      default:
        return state;
    }

  };  