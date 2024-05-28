import { OrbitControls } from '@react-three/drei'

function Scene () {
  return  <>
    <OrbitControls />
    <directionalLight intensity={4.5} position={[3,10,7]} />
    <ambientLight intensity={1.5} />
    <axesHelper args={[3]} />
    <mesh position-y={0.5}>
      <boxGeometry></boxGeometry>
      <meshStandardMaterial color={'coral'} ></meshStandardMaterial>
    </mesh>
    <mesh  rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[10,10,10,10]} />
      <meshStandardMaterial color={'lightGray'} ></meshStandardMaterial>
    </mesh>
  </>
}

export default Scene