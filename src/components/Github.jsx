// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// const Github=(props)=>{
//   const { nodes, materials } = useGLTF('/models/3d_github_logo.glb')
//   return (
//     <group {...props} dispose={null}>
//       <group position={[2,15,Math.PI]} rotation={[Math.PI/3,Math.PI,Math.PI]} scale={90}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_4.geometry}
//           material={materials.glossy_putih}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_5.geometry}
//           material={materials.github}
//         />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/models/3d_github_logo.glb')
// export default Github