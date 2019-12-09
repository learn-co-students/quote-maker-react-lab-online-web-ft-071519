// addQuote(quote: {})
//     should return an Object with a type of "ADD_QUOTE" and a quote object
export function addQuote(quote) {
    return {
        type: 'ADD_QUOTE',
        quote // same as - quote: quote
    }
}
// removeQuote(quoteId: Integer)
//     should return an Object with a type of "REMOVE_QUOTE" and a quoteId
export function removeQuote(quoteId) {
    return {
        type: 'REMOVE_QUOTE',
        quoteId // quoteId: quoteId
    }
}

// upvoteQuote(quoteId: Integer)
//     should return an Object with a type of "UPVOTE_QUOTE" and a quoteId
export function upvoteQuote(quoteId) {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId // quoteId: quoteId
    }
}
// downvoteQuote(quoteId: INteger)
//     should return an Object with a type of "DOWNVOTE_QUOTE" and a quoteId
export function downvoteQuote(quoteId) {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId // quoteId: quoteId
    }

}