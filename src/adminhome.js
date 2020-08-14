import axios from 'axios'; 

import React,{Component} from 'react'; 

class adminhome extends Component { 

	constructor(){
		super();
		this.state = { 

			// Initially, no file is selected 
			selectedFile: null,
			title: "",
			content: "",
			blog: [],
			};
			this.handlechange= this.handlechange.bind(this); 

	}
	handlechange(event){
		event.preventDefault();
		this.setState({
			[event.target.name] : event.target.value
		})
		
	}
	
	// On file select (from the pop up) 
	onFileChange = event => { 
		event.preventDefault();
	// Update the state 
	this.setState({ selectedFile: event.target.files[0] });
	}; 
	
	// On file upload (click the upload button) 
	onFileUpload = (event) => { 
	
	this.setState({
		title: event.target.value,
		content: event.target.value
	})
	
	// Create an object of formData 
	const formData = new FormData(); 
	
	// Update the formData object 
	formData.append( 
		"file", 
		this.state.selectedFile, 
		this.state.selectedFile.name,
		
	); 
	formData.append(
		"heading", this.state.title
	);
	formData.append(
		"content", this.state.content
	)
	// Details of the uploaded file 
	console.log(formData); 
	console.log(this.state.title, this.state.content)
	// Request made to the backend api 
	// Send formData object 
    axios.post("http://localhost:5000/info/upload", formData)
    .then(res => {
		alert("success")
		console.log(res)
    }); 
	}; 
	delete(personid){
        console.log(personid)
        axios.delete(`http://localhost:5000/info/delete/${personid._id}`).then(res => {
            console.log(res)
            this.componentDidMount();
            

        })
	}
	
	
	// File content to be displayed after 
	// file upload is complete 
	fileData = () => { 
	
	if (this.state.selectedFile) { 
		
		return ( 
		<div> 
			
			<h2>File Details:</h2> 
			<p>File Name: {this.state.selectedFile.name}</p> 
			<p>File Type: {this.state.selectedFile.type}</p> 
			<p> 
			Last Modified:{" "} 
			{this.state.selectedFile.lastModifiedDate.toDateString()} 
			</p> 
		</div> 
		); 
	} else { 
		return ( 
		<div> 
			<br /> 
			<h4>Choose before Pressing the Upload button</h4> 
		</div> 
		); 
	} 
	}; 
	componentDidMount() {
        axios.get('http://localhost:5000/info/upload').then(res =>{
            
            const blog = res.data;
            this.setState({blog});
        })
        
    }
	render() { 
	
	return ( 
		<div> 
			<h3> 
			Admin home 
			</h3> 
			<div class="container">
				<input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handlechange}/> <br/><br/>
				<textarea rows="10" cols="80" name="content" value={this.state.content} onChange={this.handlechange}>
                </textarea> 
			
			<div encType="multipart/form-data" > 
				<input type="file" onChange={this.onFileChange} name="file" /> 
				<button onClick={this.onFileUpload}> 
				Upload! 
				</button> 
			</div> 
		{this.fileData()} 
		</div> <br/>
		{this.state.blog.map(blogs =>
            
			<div className="container backpop">
			<h3>Latest News</h3>
			<div className="row">
				<div className="col-md-6">
						<p>{blogs.heading}</p>
					
				</div>
				
				<div className="col-md-4">
					 
					<img key ={blogs} alt="" src= {require(`./public/${blogs.image}` ) } />
				</div>
				<div className="col-md-2">
				<button className="btn btn-danger" onClick={() => this.delete(blogs)}>delete</button>
				</div>
			</div>
			</div>
			
						)}
						
		</div>
	); 
	} 
} 

export default adminhome; 
