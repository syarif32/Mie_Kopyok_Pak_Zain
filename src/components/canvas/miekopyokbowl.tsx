// "use client";

// import { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Environment, Float, PresentationControls, ContactShadows } from "@react-three/drei";
// import * as THREE from "three";

// // Komponen Mangkok 3D Sementara
// function BowlMesh() {
//   const bowlRef = useRef<THREE.Group>(null);

//   // Membuat mangkok sedikit berputar otomatis
//   useFrame((state) => {
//     if (bowlRef.current) {
//       bowlRef.current.rotation.y = state.clock.elapsedTime * 0.1;
//     }
//   });

//   return (
//     <group ref={bowlRef} position={[0, -1, 0]}>
//       {/* MANGKOK (Bentuk setengah bola) */}
//       <mesh castShadow receiveShadow position={[0, 0, 0]}>
//         <sphereGeometry args={[2, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
//         <meshStandardMaterial color="#f8f9fa" side={THREE.DoubleSide} roughness={0.1} metalness={0.2} />
//       </mesh>

//       {/* KUAH (Lingkaran di dalam mangkok) */}
//       <mesh position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//         <circleGeometry args={[1.9, 64]} />
//         <meshStandardMaterial color="#d4a373" transparent opacity={0.9} roughness={0.4} />
//       </mesh>

//       {/* PLACEHOLDER TAHU / MIE (Bentuk kotak & silinder melayang di atas kuah) */}
//       <mesh position={[-0.5, 0.5, 0.5]} rotation={[0.4, 0.2, 0]}>
//         <boxGeometry args={[0.6, 0.6, 0.6]} />
//         <meshStandardMaterial color="#faedcd" roughness={0.6} />
//       </mesh>
      
//       <mesh position={[0.7, 0.4, -0.3]} rotation={[1, 0, 0.5]}>
//         <cylinderGeometry args={[0.1, 0.1, 1.5, 16]} />
//         <meshStandardMaterial color="#fefae0" roughness={0.3} />
//       </mesh>
//     </group>
//   );
// }

// // Kanvas Utama yang akan di-export
// export function MieKopyokCanvas() {
//   return (
//     <Canvas shadows camera={{ position: [0, 2, 8], fov: 45 }}>
//       {/* Pencahayaan Sinematik (Spotlight) */}
//       <ambientLight intensity={0.5} />
//       <spotLight position={[5, 10, 5]} angle={0.2} penumbra={1} intensity={2} castShadow />
//       <spotLight position={[-5, 5, -5]} angle={0.3} penumbra={1} intensity={1} color="#ffedd5" />
      
//       {/* Kontrol Interaktif: Memungkinkan pengguna memutar mangkok dengan mouse */}
//       <PresentationControls 
//         global 
//         config={{ mass: 2, tension: 500 }} 
//         snap={{ mass: 4, tension: 1500 }} 
//         rotation={[0, 0.3, 0]} 
//         polar={[-Math.PI / 3, Math.PI / 3]} 
//         azimuth={[-Math.PI / 1.4, Math.PI / 2]}
//       >
//         {/* Efek Mengambang (Float) */}
//         <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
//           <BowlMesh />
//         </Float>
//       </PresentationControls>

//       {/* Bayangan di lantai */}
//       <ContactShadows position={[0, -1.5, 0]} opacity={0.7} scale={10} blur={2} far={4} color="#000000" />
      
//       {/* Lingkungan Refleksi (Studio pencahayaan HDRI) */}
//       <Environment preset="city" />
//     </Canvas>
//   );
// }