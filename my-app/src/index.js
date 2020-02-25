import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import UsersList from './componets/UsersList';

// const users = [
//   { name: "Andrea", age: "22", position: "Full Stack" },
//   { name: "Juan", age: "20", position: "UI/UX Designer" },
//   { name: "Pedro", age: "21", position: "Sr. Machine Learning" }
// ];

// const links = [
//   { url: "https://www.facebook.com/", text: "Facebook" },
//   { url: "https://www.google.com.mx/", text: "Google" },
//   { url: "https://career.luxoft.com/", text: "Luxoft" },
//   { url: "https://fsymbols.com/signs/bullet-point/", text: "Symbols" }
// ];

const employees = [
  {
    name: "Andrea Serrato",
    position: "Sr. UI/UX Designer",
    hired: true,
    contactNumber: "6758714868"
  },
  {
    name: "Nallely Noh",
    position: "Sr. Machine Learning",
    hired: true,
    contactNumber: "6751009222"
  },
  {
    name: "Jose Martinez",
    position: "Java trainee",
    hired: false,
    contactNumber: "3331232322"
  },
  {
    name: "Martin tilin",
    position: "Sr. Mobile Dev",
    hired: false,
    contactNumber: "5532314433"
  }
];
// // const elem = (
// //   <div>
// //     {users.map(user => (
// //       <div>
// //       <h1>Hi, {user.name}</h1>
// //       <h2>You're role is {user.position}</h2>
// //       </div>
// //     ))}
// //   </div>
// // );
// // const elem = (
// //   <ul className="estilo">
// //      {links.map(link => (
// //        <li><a href={link.url}>{link.text}</a></li>
// //     ))}
// //   </ul>
// // );

// const elem = (
//   <div className="container-big">
//     {employees.map((user, index) => (
//       <div key={index} className="container">
//         <div className="info">
//           <div className="img-container">
//           <img src="https://image.flaticon.com/icons/png/512/149/149071.png"></img>
//           <h3>{user.name}</h3>
//           </div>
//           <li><strong>Position: </strong>{user.position}</li>
//           <li className={`${user.hired ? "blue" : "red"}`}><strong>Hired: </strong>{""+user.hired}</li>
//           <li><strong>Contact: </strong>{user.contactNumber}</li>
//         </div>
//       </div>
//     ))}
//   </div>
// );

const rootElement = document.getElementById("root");
ReactDOM.render(<UsersList employees={employees} />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
