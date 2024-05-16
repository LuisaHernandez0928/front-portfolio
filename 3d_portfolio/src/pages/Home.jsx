import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";

import Loader from '../components/Loader';
import Island  from '../models/Island';
import Sky from '../models/Sky';
import Birds from '../models/Birds';
import Plane from '../models/Plane';
{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        Pop up
      </div>*/
}
const Home = () => {

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0 , -6.5, -43];
        let rotation = [0.1 , 4.7 , 0];

        if(window.innerWidth < 768) {
            screenScale = [0.9 , 0.9, 0.9];
        } else {
            screenScale = [1 , 1, 1];
        }

        return [screenScale, screenPosition, rotation];
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas className="w-full h-screen bg-transparent"
        shadows
        camera={{ near: 0.1 , far: 1000}}
      >
    
        <Suspense fallback={<Loader />}>
            <directionalLight position={[10,1,8]} intensity={3}/>
            <ambientLight intensity={0}/>
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
            <Birds />
            <Sky />
            <Island position={islandPosition}  scale={islandScale} rotation ={islandRotation}/>
            <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
