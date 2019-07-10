import React, { Component } from 'react';
import axios from 'axios';

class BodyData extends Component {
constructor(props){
super(props)
    this.state = {
    query: '',
    data: 'empty',
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
    query= query.toLowerCase()
    query= query.charAt(0).toUpperCase()+query.slice(1)
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
    if(this.state.data==='empty'){
        results= <div>
            <p>Search for shipment by last name of sender</p>
            </div>
    }
    else {
        try {
            console.log("trying")
            if (this.state.query && this.state.data.length<=0){
                console.log("error")
                results= <div>
                    <p>We were unable to locate that shipper. Please try again or select a shipper through view-all </p>
                </div>
            }
            else {
                
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
        } catch (error) {
            console.log("error catching")
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

    }

    return (
        <div className="searchForm">
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="filter" placeholder="Search for..."  onChange={this.handleInputChange}/>
            </form>
            <button onClick={this.handleSubmit}>Search</button>
            <div>
                {results}
            </div>
        </div>
    )
  }
}

export default BodyData;