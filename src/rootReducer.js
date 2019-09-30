import uuid from "uuid/v4"
const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, memes: [...state.memes, {...action.payload, id: uuid()}] };
      // state.memes.concat({...action.payload, id: uuid()})

    case "DELETE":
      return {
        ...state,
        memes: state.memes.filter(m => m.id !== action.payload)
      };

    default:
      return state;
  }
}

export default rootReducer;
