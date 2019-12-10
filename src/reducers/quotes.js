export default ( state = [], action ) => {
    console.log("reducers/quotes.js")

    let index;
    let quote;

    switch (action.type) {
        case "ADD_QUOTE":
            console.log(state, action)
            // THIS WAS WRONG: return {...state, quotes: [action.quote]} .
            // It should not have "quotes:", It is here that it embedded the quotes from action.quotes.
            return [...state, action.quote]

        case "REMOVE_QUOTE":
            console.log("remove_quote", state, action)
            return state.filter(quote => quote.id !== action.quoteId)

        case "UPVOTE_QUOTE":
            index = state.findIndex(quote => quote.id === action.quoteId);
            quote = state[index];

            return [
                ...state.slice(0, index),
                Object.assign({}, quote, { votes: quote.votes += 1 }),
                ...state.slice(index + 1)
            ];

        case "DOWNVOTE_QUOTE":
            index = state.findIndex(quote => quote.id === action.quoteId);
            quote = state[index];
            if (quote.votes > 0) {
                return [
                    ...state.slice(0, index),
                    Object.assign({}, quote, { votes: quote.votes -= 1 }),
                    ...state.slice(index + 1)
                ];
            }
            return state;
        
        default:
            return state;
    }
}