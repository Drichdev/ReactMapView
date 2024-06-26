import { GoogleMap } from "@react-google-maps/api";

export const Map = (props: { isLoaded: any; }) => {
    const { isLoaded } = props;

    const containerStyle = {
        width: '700px',
        height: '500px'
      };
      
      const center = {
        lat: 6.136629,
        lng: 1.222186
      };

    return isLoaded &&  (
        <>
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            >
            </GoogleMap>
        </>
    );
};