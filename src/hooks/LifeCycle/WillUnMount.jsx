import { useEffect } from "react";
import { Component } from "react";

export class WillUnMount extends Component{
  
  componentWillUnmount(){
    console.log('Comportamineto antes de que el componente desaparezca')
  }
  
  render(){
    return <div>
      <h1>WillUnMount</h1>
    </div>

  }
}

export const WillUnMountHook=()=>{
  
  useEffect(()=>{
    return(()=>{
      console.log('Comportamineto antes de que el componente desaparezca')
    })
  }, [])
  
  return <div>
    <h1>WillUnMount</h1>
  </div>
}