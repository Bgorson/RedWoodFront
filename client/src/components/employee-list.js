import React, {Component} from 'react';
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'

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
        const clipboard= <FontAwesomeIcon icon= {faClipboardList}/>
        let allEmployees;
        if (this.state.viewAll){
            allEmployees=< div id= "full_list">
                { this.state.Employees.map(resident=> 
                <ul class= "individual_item">
                {/* <a href= {"detail/" + resident._id}> Click for details</a> */}
                <a href= {"detail/" + resident._id} id = {resident._id}>Name: {resident.First_Name} {resident.Last_Name}</a>
                </ul>
                )}
            </div>
        }
        return (
            <div>
                <button className="view_shippers btn btn-primary" onClick= {this.handleViewAll}>{clipboard}Click here to view all shippers.</button>
                {allEmployees}
               
            </div>
        )
    }
}