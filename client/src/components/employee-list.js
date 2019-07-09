import React, {Component} from 'react';
import axios from 'axios'

export default class TodosList extends Component {
    constructor(){
        super()
        this.state= {
            Employees:["An employee"],
            viewAll:false
        }

    }
    handleViewAll= () => {
        this.setState(prevState=> ({
            viewAll:!prevState.viewAll
        })
        )}

    componentDidMount(){
    axios.get('/api/').then(res =>{
        const Employees =res.data;
        console.log(Employees)
        this.setState({Employees})
    })
    }
    render(){
        let allEmployees;
        if (this.state.viewAll){
            allEmployees=<div>
                { this.state.Employees.map(resident=> 
                <ul>
                <a href= {"detail/" + resident._id}> Click for details</a>
                <li id = {resident._id}>Name: {resident.First_Name} {resident.Last_Name}</li>
                <li>Country: </li>
                </ul>
                )}
            </div>
        }
        return (
            <div>
                <p>Welcome to your Employees</p>
                <button onClick= {this.handleViewAll}>Click here to view everyone</button>
                {allEmployees}
               
            </div>
        )
    }
}