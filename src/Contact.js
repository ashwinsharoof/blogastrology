import React, {Component} from 'react';
import axios from 'axios';

class Contact extends Component{
  constructor(){
    super();
    this.state = {
        email: "",
        contact: "",
        details: "",
        store:[]
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
  
  submit(event){
    event.preventDefault();
    this.setState({
      email: event.target.value,
      contact: event.target.value,
      details: event.target.value
    });
    this.state.store.push(this.state.email, this.state.contact, this.state.details);
    
    console.log(this.state.store);
  axios.post('http://localhost:5000/info', {email: this.state.email,
  contact: this.state.contact,
  details: this.state.details}).then(res =>{
    console.log(res)
  })
            

        this.setState({email: '',contact: '', details:'' })
          } 
render(){
    return(
        <div>
            <div className="container">
  <div className="row">
    <div className="col-md-4"></div>
    <div className="col-md-4">
    <h2>Contact Us </h2> 

  <form onSubmit={this.submit}>
    <div className="form-group">
      <label for="email">Email:</label>
      <input type="email" className="form-control" onChange={this.handelchange} placeholder="Enter email" name="email" value={this.state.email}/>
    </div>
    <div className="form-group">
      <label for="Contact">Contact No</label>
      <input type="text" className="form-control" onChange={this.handelchange} placeholder="Enter contact no" name="contact" value={this.state.contact}/>
    </div>
    <div className="form-group">
      <label for="Content">Subject</label>
      <input type="text" className="form-control" onChange={this.handelchange} placeholder="Enter details" name="details" value={this.state.details}/>
    </div>
    <button type="submit" className="btn btn-default">Submit</button>
  </form>
</div>
    </div>
  </div>
  
        </div>
    )
}
}

export default Contact;