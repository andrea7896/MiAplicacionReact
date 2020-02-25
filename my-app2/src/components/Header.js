import React from "react"
import HeaderLinks from "./HeaderLinks"

export default function Header(props){
    //throw new Error('user not found');
    return <header className="app-header">
        <h1>My Header</h1>
        <h2>Welcome to my React project!</h2>
      <HeaderLinks user={props.user} logout={props.logout} login={props.login}></HeaderLinks>
    </header>

}