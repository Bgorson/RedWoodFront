import React,{Component} from 'react';
import  { BrowserRouter as Router, Route, Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Detail_View from './components/detail_View';
import EmployeeList from "./components/employee-list"
import Search from "./components/search-bar"
import "./App.css"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
}

componentDidMount(){

}
  render() { 
    return (  
      <Router>
      <div className= "container">
      <h1 className= 'jumbotron'>Welcome to Shipment Search</h1>
      <Route
          exact path="/"
          render= { () =>
            <React.Fragment>
                    <Search></Search>
      <EmployeeList></EmployeeList>

            </React.Fragment>}
        />
        </div>
        <Route path = "/detail/:id" component = {Detail_View}/>
        </Router>
    )
  }

}
export default App;
