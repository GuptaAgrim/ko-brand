import React from 'react'
import MyContext from './myContext';

function MyState(props) {
    const state = {
        name: "Agrim Gupta",
        rollno: " 2000270130013"
    }
  return (
    <MyContext.Provider value={state}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState