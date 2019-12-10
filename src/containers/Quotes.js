import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    const quotes = [
      {
        id: '23423424242-42342423424242-fafdb',
        content: 'One Awesome Quote',
        author: 'Luke Ghenco'
      },
      {
        id: '23423424242-42342423424242-fafdb1',
        content: 'One Awesome Quote1',
        author: 'Luke Ghenco1'
      }
    ]
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


              {quotes.map(q => (<QuoteCard {...q} />))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect()(Quotes);
