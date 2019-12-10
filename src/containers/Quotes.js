import React, { Component } from 'react';
// Components:
import QuoteCard from '../components/QuoteCard';
// Function:
import { connect } from 'react-redux';
import { removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

console.log("containers/Quotes.js")

class Quotes extends Component {
    render() {
        console.log("You are in containers/Quotes.js", this.props)
        // Map through the state.quotes and render out a new QuoteCard for each.
        const {quotes} = this.props    
        return (
            <div>
                <hr />
                <div className="row justify-content-center">
                    <h2>Quotes</h2>
                </div>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                        { quotes.map(q =>
                            <QuoteCard 
                                quote={q}
                                key={q.id}
                                removeQuote={this.props.removeQuote}
                                upvoteQuote={this.props.upvoteQuote}
                                downvoteQuote={this.props.downvoteQuote}
                            />)
                        }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return { quotes: state.quotes };
}

// WHY DOES THE ACTIONS IMPORTED IN NEED TO BE IN CURLY BRACKETS???
// It is ES6 shorthand for passing the actions into mapDispatchToProps. It creates props that are dispatches with the same key name. 
export default connect (mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);