import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote, removeQuote} from "../actions/quotes";


class Quotes extends Component {


    render() {
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
                {this.props.quotes.map(q => (
                    <QuoteCard
                        key={q.id}
                        {...q}
                        quote={q}
                        handleUpvote={this.props.upvoteQuote}
                        handleDownvote={this.props.downvoteQuote}
                        handleRemoveQuote={this.props.removeQuote}
                    />))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return { quotes: state.quotes }
}
//add arguments to connect as needed
export default connect(mapStateToProps, {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
