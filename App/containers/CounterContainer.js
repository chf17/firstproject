import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Counter from '../components/Counter.js';

console.log("enter container");

const mapStateToProps = state => ({
    count: state.counter,
})


const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch({ type: 'INCREMENT' }) },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
 
})
console.log("end container");

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
