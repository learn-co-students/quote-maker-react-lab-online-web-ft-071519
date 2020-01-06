
import { ADD_QUOTE, REMOVE_QUOTE, UPVOTE_QUOTE, DOWNVOTE_QUOTE } from '../actions/quotes'



export default (state = [], action) => {
  let changedQuote;
  switch (action.type) {


    case ADD_QUOTE:

      return [...state, action.quote]

    case REMOVE_QUOTE:
      changedQuote = state.find(q => q.id === action.quoteId);
      return [...state.slice(0, state.indexOf(changedQuote)), ...state.slice(state.indexOf(changedQuote) + 1)]


    case UPVOTE_QUOTE:

      changedQuote = state.find(q => q.id === action.quoteId);

      //  const idx = state.indexOf(changedQuote);

      return [...state.slice(0, state.indexOf(changedQuote)), { ...changedQuote, votes: changedQuote.votes + 1 }, ...state.slice(state.indexOf(changedQuote) + 1)]
    case DOWNVOTE_QUOTE:

      changedQuote = state.find(q => q.id === action.quoteId);

      //  const idx = state.indexOf(changedQuote);

      if (changedQuote.votes === 0) {
        return state

      } else {
        return [...state.slice(0, state.indexOf(changedQuote)), { ...changedQuote, votes: changedQuote.votes - 1 }, ...state.slice(state.indexOf(changedQuote) + 1)]
      }

    default:
      return state
  }
  return state;
}
