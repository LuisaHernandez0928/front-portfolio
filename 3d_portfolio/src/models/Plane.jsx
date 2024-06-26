import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import planeScene from "../assets/assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();

  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(planeScene);

  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  // Render the 3D model and its animations
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
