import React from "react"
import * as styles from "./3d.module.scss"
import Layout from "../components/layout"

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

function Viewer() {
  return (
    <model-viewer
      src="/models/sentinel_beam.glb"
      shadow-intensity="5.4"
      shadow-softness="0.52"
      style={{width: "100vw", height: "100vh"}}
      camera-controls
    />
  )
}

export default function SentinelBeam() {
  if (typeof window === 'undefined') return <span>loading...</span>
  const Component = React.lazy(async () => {
    // load this module at runtime to workaround gatsby aggressively
    // trying to pre-render it
    await import("@google/model-viewer");
    return {default: Viewer};
  })
  return (
    <React.Suspense fallback={<span>loading...</span>}>
      <Component />
    </React.Suspense>
  )
}
