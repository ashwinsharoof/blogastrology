import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class admincontact extends Component{
    constructor(){
        super();
        this.state = {
            person: []
        };
        this.logout = this.logout.bind(this);
        this.delete = this.delete.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:5000/info').then(res =>{
            console.log(res.data)
            const person = res.data;
            this.setState({person});
        })
    }
    
    logout(){
        
        localStorage.clear();
        window.location.href = '/adminlogin';
    }
    delete(personid){
        console.log(personid)
        axios.delete(`http://localhost:5000/info/${personid._id}`).then(res => {
            console.log(res)
            this.componentDidMount();
            

        })
    }
    

render(){
    return(

        <div className="container">
            <h3>Contact List</h3>
            <button onClick= {this.logout}>Logout</button>
            <table className="table">
                <tr><th>Email</th>
                <th>Contact</th>
                <th>Subject</th>
                <th>Delete</th></tr>
                {this.state.person.map(persons => 
                <tbody><td>{persons.email}</td> <td>{persons.contact}</td> <td>{persons.details}</td>
                <td><button className="btn btn-danger" onClick={() => this.delete(persons)}>Delete</button></td></tbody>)}
                

            </table>
        </div>
    )
}
}
export default  admincontact;