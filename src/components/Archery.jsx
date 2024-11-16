import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Archery = (props) => {
  const archref=useRef();
  const {scene}=useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
  useGSAP(()=>{
    gsap.to(archref.current.position,{
      y:archref.current.position.y+1.0,
      duration:1.8, 
      repeat:-1,
      yoyo: true,
    })
  })
  return (
    <mesh {...props} rotation={[0, Math.PI/2.5, 0]} scale={1.3}>
      <primitive object={scene} ref={archref} />  
    </mesh >
  )
}

export default Archery