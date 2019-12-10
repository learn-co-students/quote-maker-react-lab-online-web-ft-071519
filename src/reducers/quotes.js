export default (state = [], action) => {

  switch (action.type) {
    case "ADD_QUOTE":
      debugger
      return [...state, action.quote]

    default:
      return state
  }
  return state;
}
