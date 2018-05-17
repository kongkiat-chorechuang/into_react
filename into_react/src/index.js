import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {Router,Route,Link,browserHistory} from 'react-router'
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from 'react-redux'

const initialState = {
    result : 15000,
    value : []
}

const userReducer = (state={name:"toon",age:15},action) => {
    switch(action.type){
        case "setName":
            state = {
                ...state,
                name: action.payload,
            }
        break;
        
        case "setAge":
        state = {
            ...state,
            age: action.payload,
        }
        break;
        default:
    }
    return state; 
}


const employeeeReducer = (state=initialState,action) => {
    switch(action.type){
        case "ADD":
            state = {
                ...state,
                result: state.result += action.payload,
                value: [...state.value,action.payload]
            }
        break;
        
        case "SUBTRACT":
        state = {
            ...state,
            result: state.result -= action.payload,
            value: [...state.value,action.payload]
        }
        break;
        default:
    }
    return state; 
}

const mylogger = (store) => (next) => (action) => {
    console.log("Log Action", action);
        next(action);
}
const store = createStore (combineReducers({user: userReducer,employee: employeeeReducer}),{},applyMiddleware(mylogger));
store.subscribe(() =>{
     console.log("Update Store",store.getState());
     
});


ReactDOM.render(
    // <Router history={browserHistory}>
    //     <Router path="/" component={App}/>
    //     <Router path="/header" component={Header}/>
    //     <Router path="/content" component={Content}/>
    //     <Router path="/footer" component={Footer}/>
    <Provider store={store}>
    <App/>
     
    
    </Provider>,document.getElementById('root')
);
 
