import React from "react";

class UsersList extends React.Component {
    render(){
        return (
        <div className="container-big">
        {employees.map((user, index) => (
        <div key={index} className="container">
            <div className="info">
            <div className="img-container">
            <img src="https://image.flaticon.com/icons/png/512/149/149071.png"></img>
            <h3>{user.name}</h3>
            </div>
            <li><strong>Position: </strong>{user.position}</li>
            <li className={`${user.hired ? "blue" : "red"}`}><strong>Hired: </strong>{""+user.hired}</li>
            <li><strong>Contact: </strong>{user.contactNumber}</li>
            </div>
        </div>
        ))}
    </div>
        )
    }
}

export default UsersList;
