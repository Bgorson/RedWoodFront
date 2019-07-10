import React,{Component} from 'react';
import axios from 'axios'
import "../index.css"
import SimpleMap from "./SimpleMap"
import { Redirect } from 'react-router-dom'

class Detail_View extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            redirectTo: false
        }
    this.handleReturn= this.handleReturn.bind(this);
    }
    handleReturn=()=> {
        console.log("returning")
        this.setState({
            redirectTo: '/',
        })
    }
    componentDidMount(){
        console.log("Detail page")
        const id  = this.props.match.params
         console.log(id)
        axios.get("/api/detail/"+id.id).then(res => {
            console.log(res)
            this.setState({
                First_Name:res.data[0].First_Name,
                Last_Name:res.data[0].Last_Name,
                Current_City:res.data[0].Current_City,
                Zip_Code:res.data[0].Zip_Code,
                Current_Country:res.data[0].Current_Country,
                Latitude_Longitude:res.data[0].Latitude_Longitude,
                Organization:res.data[0].Organization,
                Current_Age:res.data[0].Current_Age,
                Current_Salary:res.data[0].Current_Salary,
                Latitude:parseInt(res.data[0].Latitude_Longitude.slice(0,8)),
                Longitude:parseInt(res.data[0].Latitude_Longitude.slice(10))
                
            })
        })
    }
    
    render() { 
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        return ( 
            <div>
        <h1>You're looking at a detailed view of {this.state.First_Name} {this.state.Last_Name} of {this.state.Organization}'s shipment</h1> 
        <div>
            <p>{this.state.First_Name}'s shipment is currently leaving {this.state.Current_City} and will be arriving in {this.state.Current_Country}.</p>
        </div>
        <SimpleMap
        lat= {this.state.Latitude}
        lng= {this.state.Longitude}
        currentCenter= {{
            lat:(this.state.Latitude),
            lng:(this.state.Longitude)
         }}
        />
    <button onClick={this.handleReturn}>Return to Employee List</button>
</div>
        );
    }
}
}
 
export default Detail_View;