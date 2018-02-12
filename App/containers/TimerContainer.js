import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Timer from '../components/Timer.js';

console.log("enter container timer");

const mapStateToProps = state => ({  
  countertimer : state.timer.countertimer
})

let timer = null;


const mapDispatchToProps = (dispatch) => ({
   starttimer: () => {
      clearInterval(timer);
      timer = setInterval(() => dispatch({ type: 'TIMER_TICK' }), 1000);
      console.log("start TIMER");
      dispatch({ type: 'START_TIMER' });   
     
    },
    stoptimer: () => { 
      clearInterval(timer);
      dispatch({ type: 'STOP_TIMER' }) 
  },
  
  resettimer: () => { dispatch({ type: 'RESET_TIMER' }) },  
  
  })
  console.log("end container timer");
  
  export default connect(mapStateToProps, mapDispatchToProps)(Timer)
  