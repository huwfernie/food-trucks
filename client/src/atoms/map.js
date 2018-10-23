import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps'

const AirbnbMap = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={props.center}
    defaultZoom={props.zoom} />
));

class Map extends Component {
  constructor(props) {
    super(props)

    this.zoom = 7

    this.state = {
      lat: 50.0515918,
      lng: 19.9357531
    };
  }

  componentDidMount() {
    console.log(navigator.geolocation.getCurrentPosition);

    navigator.geolocation.getCurrentPosition((result) => {
      console.log(result.coords.latitude);
      this.setState({
        lat: result.coords.latitude,
        lng: result.coords.longitude
      });
    })
  }

  render() {
    const {lat, lng} = this.state;

    return(
      <div style={{width: `750px`, height: `750px`}}>
        <AirbnbMap
          center={{
            lat: lat,
            lng: lng
          }}
          zoom={this.zoom}
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
        />
      </div>
    );
  }
}


export default Map;
//
//
// const AirbnbMap = withGoogleMap(props => (
//   <GoogleMap
//     defaultCenter={props.center}
//     defaultZoom={props.zoom} />
// ));
//
// class Map extends Component {
//   constructor() {
//     super();
//     let personProfile = this.state = {
//       name: "Bob",
//       skill: "Art Designer",
//       location: "LA"
//     }
//   }
//
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({name: "Frank"});
//     }, 1000)
//
//     console.log(navigator.geolocation.getCurrentPosition);
//
//     navigator.geolocation.getCurrentPosition((result) => {
//       console.log(result.coords.latitude);
//       this.setState({name: result.coords.latitude});
//     })
//   }
//
//   render() {
//     return (
//       <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//         <ul>
//           <li> {this.state.name} </li>
//           <li> {this.state.skill} </li>
//           <li> {this.state.location} </li>
//         </ul>
//       </div>
//     );
//   }
// }
//
//
// export default Map;
