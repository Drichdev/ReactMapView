import React from 'react';
import './styles/App.css';
import { Map } from './components/Map';
import { useJsApiLoader } from '@react-google-maps/api';
import { mapOptions } from './components/MapConfiguration';

function App() {

  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey : "" + mapOptions.googleMapApiKey + "",


  });

  return (
    <div className="App">
      <h1>Google Map API</h1>
      <div className="map">
        <Map isLoaded = {isLoaded} />
      </div>
    </div>
  );
}

export default App;
