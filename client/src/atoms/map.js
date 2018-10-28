import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Circle } from 'react-google-maps';

const AirbnbMap = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={props.defaultCenter}
    center={props.center}
    defaultZoom={props.defaultZoom}
    zoom={props.zoom}
  >
    <Circle
      defaultCenter={props.defaultCenter}
      center={props.center}
      defaultRadius={965}
      radius={965}
      options={
        {strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,}
        } />
  </GoogleMap>
));

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      default: {
        lat: 44,
        lng: 33
      },

      lat: 0,
      lng: 0,

      zoo: 7
    };
  }

  componentDidMount() {
    // console.log(navigator.geolocation.getCurrentPosition);
    navigator.geolocation.getCurrentPosition(result => {
      console.log(result.coords.latitude);
      console.log(result.coords.longitude);
      console.log('found your location');
      this.setState({
        lat: result.coords.latitude,
        lng: result.coords.longitude,
        zoo: 14
      });
    });
  }

  render() {
    const { lat, lng, zoo } = this.state;

    return (
      <div style={{ width: `750px`, height: `750px` }}>
        <AirbnbMap
          defaultCenter={{
            lat: this.state.default.lat,
            lng: this.state.default.lng
          }}
          center={{
            lat: lat,
            lng: lng
          }}

          defaultZoom = {7}
          zoom = {zoo}

          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        >
          <Circle
            defaultCircleCenter={{
              lat: this.state.default.lat,
              lng: this.state.default.lng
            }}
            circleCenter={{
              lat: lat,
              lng: lng
            }}

            defaultCircleRadius={{
              rad: 600
            }}
            circleRadius={{
              rad: 600
            }}
           />
        </AirbnbMap>
      </div>
    );
  }
}

export default Map;
