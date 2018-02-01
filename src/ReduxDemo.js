import React, { Component } from 'react';
import {createStore} from "redux";


class ReduxDemo extends Component{


    render(){

          //STEP 2: ReducerL State and action
          const reducer = function(state , action){
            if(action.type ==="ATTACK"){
                return action.payload
            }
            if(action.type ==="GREENATTACK"){
                return action.payload
            }
            return state;
        }

        //STEP 1 Store : reducer and state
        const store= createStore(reducer, "Peace");



        //STEP 3:Sunscribe
        store.subscribe(()=>{
            console.log("Store is now", store.getState());

        })

        //STEP 4: DISPACTCH Action"
        store.dispatch({type:"ATTACK", payload: "IRON MAN" });
        store.dispatch({type:"GREENATTACK", payload: "HULK" })



        return (
            <div>
                test
            </div>

        )
    }
}


export default ReduxDemo;

