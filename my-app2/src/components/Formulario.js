import React from "react";

export default function Formulario(props) {
  return (
    <form>
      <div className="input-container">  
      <input type="text" value={props.username || "WemanConnect"}></input>
      </div>
      <div className="input-container">  
      <input type="password" value={props.password || "anything"} />
      </div>
      
      <button type="submit">login</button>
      <br></br>
    </form>
  );
}