import React from "react"
import styles from "./3d.module.scss"
import Layout from "../components/layout"
import "@google/model-viewer";

/*
declare module JSX {
  interface InstricElements {
    "model-viewer": {
        // NOTE: not a complete typing and it doesn't seem to work anyway
        src: string;
        "environment-image"?: string;
        "skybox-image"?: string;
        "shadow-intensity"?: number;
        "shadow-softness"?: number;
        "auto-rotate"?: boolean
        "camera-controls"?: boolean
    }
  }
}
*/


const SentinelBeam = () => {
  return <model-viewer
    src="/models/sentinel_beam.glb"
    shadow-intensity="5.4"
    shadow-softness="0.52"
    style={{width: "100vw", height: "100vh"}}
    camera-controls
  />
    //environment-image="aircraft_workshop_01_1k.hdr"
    //skybox-image="aircraft_workshop_01_1k.hdr"
}

export default SentinelBeam
