import React, { Component } from 'react';
import axios from 'axios';

class BodyData extends Component {
constructor(props){
super(props)
    this.state = {
    query: '',
    data: false,
}
this.handleSubmit = this.handleSubmit.bind(this);
}

handleInputChange = (event) => {
    this.setState({
        query: event.target.value
    })
}

handleSubmit(event){
    let query= this.state.query
    event.preventDefault()
    axios.get("/api/search/"+query).then(res=>{
        console.log(res)
        console.log(res.data)
        this.setState({
            data:res.data
        })
    })
}
    
render() {
    let results;
    if (this.state.data) {
        results= <div>
            {
            this.state.data.map((employee) =>
           <ul>
             <a href= {"detail/" + employee._id}> Click for details</a>
             <li id = {employee._id}>Name: {employee.First_Name} {employee.Last_Name}</li>
            </ul> 
                )
                }
        </div>
    }
    else {
        results= <div>
            <p>Search for someone by last name</p>
            </div>
    }
    return (
        <div className="searchForm">
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="filter" placeholder="Search for..."  onChange={this.handleInputChange}/>
            </form>
            <div>
                {results}
            </div>
        </div>
    )
  }
}

export default BodyData;