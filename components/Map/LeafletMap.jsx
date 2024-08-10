import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PopupCard from "./PopupCard.jsx";

const Map = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

function LeafletMap() {
  const [position, setPosition] = useState([10.056403690212132, 76.35339319377448]);
  const [zoom, setZoom] = useState(11);
  const markerRef = useRef(null);
  const mapRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.toLowerCase() === 'to the moon') {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };


  const hqCoord = [10.056403690212132, 76.35339319377448];
  const boCoord = [37.773972, -122.431297];
  

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

  console.log("NOTHING MUCH HERE SOME NEXT.JS ERRORS, INTERNS DIDN'T GET TIME TO FIX IT");
  

  const defaultIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Map center={position} zoom={zoom} style={{ height: '100%', width: '100%' }} ref={mapRef}>
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
        />
  
        <Marker position={boCoord} icon={defaultIcon} eventHandlers={{ click: () => travel("hq") }}>
        <Popup>
            <div>
              <div>
                <span>
                  <br />
                  Congratzz you Unlocked SF BOUNTY!<br />
                  Tweet it ASAP<br />
                </span>
                <hr />
                {/* <a href="https://www.google.com/maps/place/Kerala+Startup+Mission/@10.0561449,76.3508183,17z/data=!3m1!4b1!4m6!3m5!1s0x3b080c04e2534d9f:0x57a3a39e6b6b4514!8m2!3d10.0561396!4d76.3533932!16s%2Fg%2F1hc1wx315?entry=ttu" target="_blank" >Big Bounties!</a> */}
              </div>
            </div>
          </Popup>
        </Marker>
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
                  Kerala Startup Mission<br />
                  Kalamassery, Kochi.<br />
                </span>
                <hr />
                <a href="https://www.google.com/maps/place/Kerala+Startup+Mission/@10.0561449,76.3508183,17z/data=!3m1!4b1!4m6!3m5!1s0x3b080c04e2534d9f:0x57a3a39e6b6b4514!8m2!3d10.0561396!4d76.3533932!16s%2Fg%2F1hc1wx315?entry=ttu" target="_blank" >To Conference</a>
              </div>
            </div>
          </Popup>
        </Marker>
      </Map>
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '45px',
        zIndex: 1000,
        backgroundColor: '#333',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        width: '300px',
      }}>
        <h3 style={{ color: 'white', marginTop: 0, marginBottom: '15px' }}>Find Course</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Enter Your Address"
            style={{
              padding: '12px',
              borderRadius: '5px',
              border: '1px solid #555',
              backgroundColor: '#444',
              color: 'white',
              fontSize: '16px',
              outline: 'none',
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: '12px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#eee',
              color: '#333',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
            Apply
          </button>
          {showPopup && (
            <PopupCard />
          )}
        </div>
      </div>
    </div>
  );
}

export default LeafletMap;