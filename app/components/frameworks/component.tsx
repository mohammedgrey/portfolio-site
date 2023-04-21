"use client";
import { technologies } from "@/app/configs/data/frameworks";
import { Html, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { FC, useEffect, useRef } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

export default function Frameworks() {
  return (
    <Canvas>
      <Stars
        radius={100} // radius of the outer sphere where stars are scattered
        depth={50} // depth of area where stars should fit
        count={5000} // number of stars
        factor={4} // size factor of stars
        saturation={1} // saturation of stars
        fade // fade stars if true
      />
      <Scene />
      <CameraControls />
    </Canvas>
  );
}

const CameraControls = () => {
  const ref = useRef<any>();
  const { camera, gl } = useThree();
  useFrame(() => ref.current?.update());
  useEffect(() => {
    ref.current.minPolarAngle = Math.PI / 2;
    ref.current.maxPolarAngle = Math.PI / 2;
  }, []);
  return (
    <OrbitControls
      ref={ref}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={0.1}
      rotateSpeed={0.5}
      rotation={new THREE.Euler(0, 1, 0)}
    />
  );
};

const Scene = () => {
  return (
    <group>
      {technologies.map((technology, index) => (
        <group key={index} position={new THREE.Vector3(...technology.position)}>
          <Logo3D svg={technology.icon} />
          <Html>
            <p>{technology.name}</p>
          </Html>
        </group>
      ))}
    </group>
  );
};

const Logo3D: FC<{ svg: string }> = ({ svg }) => {
  const ref = useRef<any>();
  const { paths } = useLoader(SVGLoader, svg);
  console.log("paths ", paths);

  return (
    <group ref={ref}>
      {paths.map((path, index) => (
        <mesh key={index} castShadow receiveShadow>
          <shapeBufferGeometry args={[path]} />
          <meshStandardMaterial color="#61dafb" />
        </mesh>
      ))}
    </group>
  );
};
