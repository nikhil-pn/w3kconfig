"use client";
import dynamic from "next/dynamic";
import React from "react";
import "./styles.css";

const LeafletMap = dynamic(() => import("../../components/Map/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="loader">
      <div className="glitch-container">
        <div data-glitch="Loading..." className="glitch">
          Loading...
        </div>
      </div>
    </div>
  ),
});

function Map() {
  return (
    <div>
      <LeafletMap />
    </div>
  );
}

export default Map;
