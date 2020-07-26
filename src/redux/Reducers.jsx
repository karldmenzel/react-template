export const initialState = {
  data: '0'
}

export const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
      case "SERVICE_CALL_SUCCESS":
        return {
          ...state,
          data: action.data
        };
        case "SERVICE_CALL_FAILURE":
          return {
            ...state,
            data: null
          };
      default: 
        return state;
    }
}