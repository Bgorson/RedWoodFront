import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 2
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '25vh', width: '25%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBYa9eILK0qsMB5zGJyo_7v2AmsFa3yv88" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center= {this.props.currentCenter}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text="Current Location"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;