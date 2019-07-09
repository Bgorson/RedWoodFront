import React,{Component} from 'react';
import axios from 'axios'
import "../index.css"
import SimpleMap from "./SimpleMap"

class Detail_View extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:''
        }
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
                Current_Salary:res.data[0].Current_Salary
                
            })
        })
    }
    
    render() { 
        return ( 
            <div>
        <h1>You're looking at a detailed view of {this.state.First_Name} {this.state.Last_Name}</h1> 
        <SimpleMap
        coordinates= {this.Latitude_Longitude}
        />


</div>
        );
    }
}
 
export default Detail_View;