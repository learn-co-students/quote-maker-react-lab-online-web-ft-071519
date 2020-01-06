import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

console.log("QuoteForm.js")

class QuoteForm extends Component {
   //set up a controlled form with local/internal state
   // Created component state with constructor.
   constructor () {
      super();
      this.state = {
         content: "",
         author: ""
      }
   }
   // *** DYNAMIC FORM FOR MULTIPLE INPUTS***
   handleOnChange = event => {
      // Using object destructuring, you can pull out values from an object using a key value of the same name.
      // With the HTML node's value attribute set to equal the key within state, referring to the value attribute will refer to the right key in state.
      const {name, value} = event.target;
      // This dynamically fills in the state info based on the input fields.
      this.setState({
         [name]: value
      })
   }

   handleOnSubmit = event => {
      // Handle Form Submit event default
      event.preventDefault();
      // Create quote object from state
      // Pass quote object to action creator
      // Spread the state and add the uuid key to state.
      this.props.addQuote({ ...this.state, id: uuid() })
      // Update component state to return to default state
      this.setState({ content: "", author: ""})
   }

   render() {
      return (
      <div className="container">
         <div className="row">
         <div className="col-md-8 col-md-offset-2">
               <div className="panel panel-default">
               <div className="panel-body">
                  <form 
                     className="form-horizontal"
                     // Added onSubmit event handler.
                     onSubmit={event => this.handleOnSubmit(event)}>
                  <div className="form-group">
                     <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                     <div className="col-md-5">
                     <textarea
                           name="content"
                           className="form-control"
                           onChange={this.handleOnChange}
                           value={this.state.content}
                     />
                     </div>
                  </div>
                  <div className="form-group">
                     <label htmlFor="author" className="col-md-4 control-label">Author</label>
                     <div className="col-md-5">
                     <input
                           name="author"
                           className="form-control"
                           onChange={this.handleOnChange}
                           type="text"
                           value={this.state.author}
                     />
                     </div>
                  </div>
                  <div className="form-group">
                     <div className="col-md-6 col-md-offset-4">
                     <button type="submit" className="btn btn-default">Add</button>
                     </div>
                  </div>
                  </form>
               </div>
               </div>
         </div>
         </div>
      </div>
      );
   }
}

// addQuote is imported in from the action creator file, ./actions/quotes.js.
// It is then made a prop that calls a dispatch to the reducer. 
const mapDispatchToProps = (dispatch) => {
   return {
      addQuote: (formData) => dispatch(addQuote(formData))
      // LONG-FORM = addQuote: (formData) => dispatch({type: "ADD_QUOTE", formData })
   }
}

export default connect(null, mapDispatchToProps)(QuoteForm);
