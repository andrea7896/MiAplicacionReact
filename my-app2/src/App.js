import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import axios from 'axios';
import PostsList from './components/PostsList';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      user: {
      userName:"andrea",
      password:"password123",
      isLogged:true
    },
    error:'',
    posts:[],
  }
  this.logout = this.logout.bind(this);
  this.login = this.login.bind(this);
  }

  componentDidMount(){
    // console.log("Mounting: constructor");
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      this.setState({
        posts: result.data
      })
    });
  }

  componentWillUnmount(){
    console.log("Unmounting phase: constructor");
  }

  static getDerivedStateFromError(error){
    return {error:error};
  }

  componentDidCatch(error,info){
    console.log("Error phase: "+error);
  }

  logout(event){
    event.preventDefault();
    this.setState({user: {
      userName:"",
      password:"",
      isLogged:false
    }});
  }

  componentDidUpdate(){
    console.log("updating phase: component ");
  }
  
  login(event){
    event.preventDefault();
    this.setState({user:{
      userName:"WemanConnect",
      password:"anything",
      isLogged:true
    }})
  }

  render(){
    console.log(this.state.posts);
    console.log("render");
    if(this.state.error){
    return <div>{this.state.error}</div>
    }
    return (
      <div className="container">
  
        <Header user={this.state.user.userName} logout={this.logout} login={this.login}></Header>
        
        {
          this.state.user.isLogged == true ?  <PostsList posts={this.state.posts}></PostsList> : <Formulario username={this.state.user.userName}  password={this.state.user.password}/>
        }

        <footer className="footer-container">By WemanConnect </footer>
      </div>
    );
  }
  
}