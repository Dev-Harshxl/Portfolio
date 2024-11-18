import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Github=(props)=>{
  const { nodes, materials } = useGLTF('/models/3d_github_logo.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.055, 2.945, 6.336]} rotation={[Math.PI / 2, 0, 0]} scale={28.364}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.glossy_putih}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.github}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/3d_github_logo.glb')
export default Github