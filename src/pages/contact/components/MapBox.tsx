import { GOOGLE_MAP_API_KEY } from "utilities/config";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyles = {
  height: "498px",
  width: "100%",
};
function MapBox() {
  const defaultCenter = {
    lat: 41.367506517698764,
    lng: 2.098090705825177,
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker
          position={{
            lat: 41.3622887155235,
            lng: 2.089250145035542,
          }}
          icon={"/assets/images/marker.png"}
        />
      </GoogleMap>
    </LoadScript>
  );
}
export default MapBox;
