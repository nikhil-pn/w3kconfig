import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

function LeafletMap() {
  const [position, setPosition] = useState([
    10.056403690212132, 76.35339319377448,
  ]);
  const [zoom, setZoom] = useState(11);
  const [searchQuery, setSearchQuery] = useState("");
  const markerRef = useRef(null);
  const mapRef = useRef(null);

  const hqCoord = [10.056403690212132, 76.35339319377448];
  const boCoord = [40.260334, -76.882865];

  const travel = (locationTo) => {
    setPosition(locationTo === "bo" ? boCoord : hqCoord);
    setZoom(locationTo === "bo" ? 7 : 11);
  };

  useEffect(() => {
    if (markerRef.current) {
      setTimeout(() => {
        markerRef.current.openPopup();
      }, 2800);
    }
  }, []);
  console.log(
    " Okay, there's not much on the console tab here, just a bunch of errors we didn't get time to fix!"
  );

  const defaultIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setPosition([parseFloat(lat), parseFloat(lon)]);
        setZoom(13);
        if (mapRef.current) {
          mapRef.current.flyTo([parseFloat(lat), parseFloat(lon)], 13);
        }
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  const SearchControl = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "45px",
          zIndex: 1000,
          backgroundColor: "#333",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          width: "300px",
        }}
      >
        <h3 style={{ color: "white", marginTop: 0, marginBottom: "15px" }}>
          Find Route
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter Your Address"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#444",
              color: "white",
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "white",
              color: "black",
              cursor: "pointer",
            }}
          >
            Apply
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Map
        center={position}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        />
        <Marker
          position={hqCoord}
          icon={defaultIcon}
          eventHandlers={{ click: () => travel("bo") }}
          ref={markerRef}
        >
          <Popup>
            <div>
              <svg x="0px" y="0px" viewBox="0 0 60 60" fill="#000">
                <polygon points="3,50 11,50 11,14.3 3,18.5" />
                <polygon points="39,24.8 39,18.6 56,33.1 56,31.6 35.6,10.4 19,18.2 19,23.3 14,25.5 14,50 21,50 21,22 25,22 25,50 56,50 56,47.9 39,47 39,42.7 56,45.2 56,43.5 39,39.8 39,35.6 56,40.5 56,38.8 39,33.4 39,27.7 56,36.4 56,34.6" />
              </svg>
              <div>
                <span>
                  <br />
                  Kerala Startup Mission
                  <br />
                  Kalamassery, Kochi.
                  <br />
                </span>
                <hr />
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    travel("bo");
                  }}
                >
                  To Conference
                </a>
              </div>
            </div>
          </Popup>
        </Marker>
        <Marker
          position={boCoord}
          icon={defaultIcon}
          eventHandlers={{ click: () => travel("hq") }}
        />
        {position !== hqCoord && position !== boCoord && (
          <Marker
            position={hqCoord}
            icon={defaultIcon}
            eventHandlers={{ click: () => travel("bo") }}
          >
            <Popup>
              <div>
                <svg x="0px" y="0px" viewBox="0 0 60 60" fill="#000">
                  <polygon points="3,50 11,50 11,14.3 3,18.5" />
                  <polygon points="39,24.8 39,18.6 56,33.1 56,31.6 35.6,10.4 19,18.2 19,23.3 14,25.5 14,50 21,50 21,22 25,22 25,50 56,50 56,47.9 39,47 39,42.7 56,45.2 56,43.5 39,39.8 39,35.6 56,40.5 56,38.8 39,33.4 39,27.7 56,36.4 56,34.6" />
                </svg>
                <div>
                  <span>
                    <br />
                    Kerala Startup Mission
                    <br />
                    Kalamassery, Kochi.
                    <br />
                  </span>
                  <hr />
                  <a
                    href="https://www.google.com/maps/place/Kerala+Startup+Mission/@10.0561449,76.3508183,17z/data=!3m1!4b1!4m6!3m5!1s0x3b080c04e2534d9f:0x57a3a39e6b6b4514!8m2!3d10.0561396!4d76.3533932!16s%2Fg%2F1hc1wx315?entry=ttu"
                    onClick={(e) => {
                      e.preventDefault();
                      travel("bo");
                    }}
                  >
                    To Conference
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        )}
      </Map>
      <SearchControl />
    </div>
  );
}

export default LeafletMap;
