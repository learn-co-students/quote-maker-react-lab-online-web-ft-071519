// TODO: Create action creators as defined in tests

// "quote" becomes a key in the action object. It is equivalent to the arg passed in at the time addQuote is used. 
// Look back at ./reducers/quotes.js. "quote" refers to { ...this.state, id: uuid() }.
export const addQuote = (quote) => {
    console.log("actions/quotes.js");
    return {type: "ADD_QUOTE", quote }
    // Is the same as | return {type: "ADD_QUOTE", quote: quote}.
    // Object destructuring while assigning a value. Since the key and value have the same name, it can be shorthanded to one word reference.
    // For the key of "quote" assign the value of (quote).
}

export const removeQuote = (quoteId) => {
    return { type: "REMOVE_QUOTE", quoteId }
}

export const upvoteQuote = (quoteId) => {
    return { type: "UPVOTE_QUOTE", quoteId }
}

export const downvoteQuote = (quoteId) => {
    return { type: "DOWNVOTE_QUOTE", quoteId }
}