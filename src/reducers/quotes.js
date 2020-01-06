export default (state = [], action) => {
  let quote;
  let index;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'UPVOTE_QUOTE':
      quote = state.find(q => q.id === action.quoteId);
      index = state.indexOf(quote);
      return [...state.slice(0, index), {...quote, votes: quote.votes + 1}, ...state.slice(index + 1)]

    case 'DOWNVOTE_QUOTE':
      quote = state.find(q => q.id === action.quoteId);
      index = state.indexOf(quote);
      if (quote.votes === 0) {
        return [...state]
      }
      return [...state.slice(0, index), {...quote, votes: quote.votes - 1}, ...state.slice(index + 1)]

    case 'REMOVE_QUOTE':
      quote = quote = state.find(q => q.id === action.quoteId);
      index = state.indexOf(quote);
      return [...state.slice(0, index), ...state.slice(index + 1)]

    default:
      return state
  }
}
