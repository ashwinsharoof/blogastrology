import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css";
import axios from 'axios';
class Home extends Component{
    constructor(){
        super();
        this.state= {
            blog: [],
            blogid: [],
            showresult: false,
        }
        this.read= this.read.bind(this);
        this.close = this.close.bind(this);
        }
    componentDidMount() {
        axios.get('http://localhost:5000/info/upload').then(res =>{
            
            const blog = res.data;
            this.setState({blog});
        })
        
    }
    
    read(blogsid){
        console.log(blogsid)
        console.log(blogsid._id)
        axios.get(`http://localhost:5000/info/upload/${blogsid._id}`).then(res =>{
           const blogid = res.data
           this.setState({blogid});
        })
        console.log(this.state.blogid)
       this.setState({
           showresult: true
       })
       window.scrollTo(0, 0)
    }
    close(event){
        event.preventDefault();
        
        this.setState({
            showresult: false
        });
    }
    
    
render(){
    return(
        <div>
            <div className="container">
            
                <center>
                <div>
                    <img src={require("./carousel2.jpg")} />
                    
                </div>
                </center>
                
                
           
            </div>
            {this.state.blog.map(blogs =>
            
<div className="container backpop">
<h3>Latest News</h3>
<div className="row">
    <div className="col-md-8">
            <p>{blogs.heading}</p>
        <button className="btn btn-primary" onClick={() => this.read(blogs)}>Read More</button>
    </div>
    
    <div className="col-md-4">
         
        <img key ={blogs} alt="" src= {require(`./public/${blogs.image}` ) } />
    </div>
</div>
</div>

            )}
            
            {this.state.showresult ?<div><div class="container pop">
        
        <i class="fa fa-close close"  onClick= {this.close}></i>
        <h3>{this.state.blogid.heading}</h3>
        <br/>
        <p>{this.state.blogid.content}</p>
       </div>
      
        </div>: null }
        
        
        </div>
        
    )
}
}
export default Home;