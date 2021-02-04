export const initialState = {
  user: null,
 
};
export const actionTypes = {
    SET_USER : "SET_USER",
    LOG_OUT: 'LOG_OUT'
}

const reducer = (state, action) => {
    console.log(action)
  switch ('11',action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "LOG_OUT":
        return {
          ...state,
          user:null
        }

    
    default:
      return state;
  }
};

export default reducer;
