import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

function App() {

  const camera = {
    camera: {
      fov: 60,
      zoom: 1,
      near: 0.1,
      far: 200,
      position: [ 4, 4, 4 ]
    }
  } 

  return (
    <>
     <Canvas {...camera}>
        <Scene/>
      </Canvas>
    </>

  )
}

export default App
