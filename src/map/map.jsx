import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom Leaflet Marker Icon (fixing default icon issue with React-Leaflet)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Define coordinates for cities across South Africa's provinces
const cities = [
  // Gauteng
  { name: "Johannesburg", position: [-26.2041, 28.0473] },
  { name: "Pretoria", position: [-25.7461, 28.1881] },
  { name: "Soweto", position: [-26.2485, 27.854] },
  
  // KwaZulu-Natal
  { name: "Durban", position: [-29.8587, 31.0218] },
  { name: "Pietermaritzburg", position: [-29.6006, 30.3794] },
  { name: "Richards Bay", position: [-28.7762, 32.0823] },
  
  // Western Cape
  { name: "Cape Town", position: [-33.9249, 18.4241] },
  { name: "Stellenbosch", position: [-33.9346, 18.8602] },
  { name: "George", position: [-33.9644, 22.4597] },
  
  // Eastern Cape
  { name: "Port Elizabeth", position: [-33.9608, 25.6022] },
  { name: "East London", position: [-33.0153, 27.9116] },
  { name: "Mthatha", position: [-31.5889, 28.7844] },
  
  // Northern Cape
  { name: "Kimberley", position: [-28.7286, 24.7499] },
  { name: "Upington", position: [-28.4478, 21.2561] },
  { name: "Springbok", position: [-29.6644, 17.8858] },
  
  // Limpopo
  { name: "Polokwane", position: [-23.9045, 29.4689] },
  { name: "Tzaneen", position: [-23.8333, 30.1666] },
  { name: "Thohoyandou", position: [-22.9456, 30.4844] },
  
  // Mpumalanga
  { name: "Nelspruit", position: [-25.4677, 30.9853] },
  { name: "Witbank", position: [-25.8896, 29.2332] },
  { name: "Secunda", position: [-26.5154, 29.2012] },
  
  // Free State
  { name: "Bloemfontein", position: [-29.0852, 26.1596] },
  { name: "Welkom", position: [-27.9797, 26.7353] },
  { name: "Bethlehem", position: [-28.2297, 28.3066] },
  
  // North West
  { name: "Mahikeng", position: [-25.8656, 25.6445] },
  { name: "Rustenburg", position: [-25.6676, 27.2421] },
  { name: "Klerksdorp", position: [-26.8521, 26.6667] },
];

// Main Leaflet map component
const LeafletMapComponent = () => {
  return (
    <section className="flex justify-center">
      <div>
        <div className="mb-5">
          <p className="text-2xl">User <span className="text-[#0496ff]">Distribution </span>Across Locations.</p>
          <p className="text-gray-400 text-small">Visualizing Engagement and Interactions in Real-Time</p>
        </div>
        <MapContainer
          center={[-30.5595, 22.9375]} // Center of South Africa
          zoom={6} // Set zoom level
          className="h-[100dvh] w-[75dvw] shadow-lg rounded-md" // Adjust the map dimensions
        >
          {/* OpenStreetMap tiles */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />

          {/* Add markers for each city */}
          {cities.map((city, index) => (
            <Marker key={index} position={city.position}>
              <Popup>{city.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default LeafletMapComponent;
