import React, { Component } from 'react';

// Import Functions:

// Import Components:
import QuoteForm from "./components/QuoteForm"
import Quotes from './containers/Quotes'


class App extends Component {
   render() {
      console.log("You are in App.js")
      return (
         <div className="container-fluid">
         <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
            <h1>Quote Maker</h1>
         </div>
         <hr />
         {/*
         TODO: Render QuoteForm and Quotes Components
         */}
            <QuoteForm />
            <Quotes />
         </div>
      );
   }
}

export default (App);
