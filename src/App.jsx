import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const[a,setA] =React.useState("JAI SREE RAM")
  // useEffect(()=>{
  //     console.log("wow");
  // });
//  useEffect(()=>{
//       console.log("wow2");
//   },[]);
 useEffect(()=>{
      console.log("wow3");
  },[a]);
 
 
 return<>
  <button onClick={()=>setA('hello mero vai')}>Click me</button>
  {a}
  </>
  }

export default App;

