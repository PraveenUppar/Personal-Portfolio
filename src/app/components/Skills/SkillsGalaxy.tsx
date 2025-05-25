
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Billboard } from "@react-three/drei";
import { Skill } from "../../types";

interface SkillsGalaxyProps {
  skills: Skill[];
}

const SkillsGalaxy: React.FC<SkillsGalaxyProps> = ({ skills }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Galaxy skills={skills} />
      </Canvas>
    </div>
  );
};

interface GalaxyProps {
  skills: Skill[];
}

const Galaxy: React.FC<GalaxyProps> = ({ skills }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        // Calculate position on a sphere
        const phi = Math.acos(-1 + (2 * i) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;

        // Convert to Cartesian coordinates
        const x = 7 * Math.cos(theta) * Math.sin(phi);
        const y = 7 * Math.sin(theta) * Math.sin(phi);
        const z = 7 * Math.cos(phi);

        return (
          <Billboard key={skill.name} position={[x, y, z]} follow={true}>
            <Text
              color="white"
              fontSize={0.5}
              maxWidth={2}
              lineHeight={1}
              letterSpacing={0.02}
              textAlign="center"
              anchorX="center"
              anchorY="middle"
            >
              {skill.name}
            </Text>
          </Billboard>
        );
      })}
    </group>
  );
};

export default SkillsGalaxy;
