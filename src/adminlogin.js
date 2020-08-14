import React, { Component } from 'react';
import axios from 'axios';

class adminlogin extends Component {
  constructor() {
    super();
     
    this.state = {
      email: "",
      password: "",
      store: []
     
    };
    
    
   this.handelchange= this.handelchange.bind(this);
    this.submit= this.submit.bind(this);
  }
  
  handelchange(event){
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    });
  }
 submit(e){
   e.preventDefault();
    this.setState({
     email: e.target.value,
     password: e.target.value
   });
   axios.post("http://localhost:5000/info/login", {Email: this.state.email, Password: this.state.password})
   .then(res =>{
    alert(localStorage.setItem('auth', JSON.stringify(res)))
    window.location.href = '/admincontact';
  
   })
   .catch(err => {
    alert("Wrong email or passowrd")
  })
   this.setState({ email: "", password: ""})
  
 }
 


  render() {
    return (
      <div className="container">
          <h3>Admin login page</h3>
        <form onSubmit={this.submit}>
        <div className="form-group">
        <input type="text" placeholder="Enter email" name="email" value={this.state.email}  onChange={this.handelchange}/>
        </div>
        <div className="form-group">
       
        <input type="Password" placeholder="Enter password" name="password" value={this.state.password}  onChange= {this.handelchange}/><br/><br/>
        <button className="danger"  >Login</button>
        </div>
        </form>
        
        
      </div>
    );
  }
}

export default adminlogin;