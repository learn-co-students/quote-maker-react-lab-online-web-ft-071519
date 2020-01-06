import React from 'react';


// Destructured this variable's props...see lecture video.
// Make sure to add "{}" around the "objects" that are passed in as args in a functional component.
// Make sure to receive all props as args for the function.
const QuoteCard = ({quote, removeQuote, upvoteQuote, downvoteQuote}) =>
    <div>
    { console.log(quote)}
        <div className="card card-inverse card-success card-primary mb-3 text-center">
            <div className="card-block">
                <blockquote className="card-blockquote">
                    <p>{quote.content}</p>
                <footer>- {quote.author} <cite title="Source Title">{quote.author}</cite></footer>
                </blockquote>
            </div>
            <div className="float-right">
                <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                <button
                    // EVENT LISTENERS SHOULD BE FUNCTIONS. 
                    onClick={() => upvoteQuote(quote.id)} 
                    type="button"
                    className="btn btn-primary"
                >Upvote
                </button>
                <button
                    onClick={() => downvoteQuote(quote.id)}
                    type="button"
                    className="btn btn-secondary"
                >Downvote
                </button>
                <button
                    onClick={() => removeQuote(quote.id)}
                    type="button"
                    className="btn btn-danger"
                >
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                {console.log({quote})}
                {<div>Votes: {quote.votes}</div>}
            </div>
        </div>
    </div>;

export default QuoteCard;
