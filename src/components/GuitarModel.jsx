/* eslint-disable react/no-unknown-property */
import { useEffect, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three'
import { useLoader } from "@react-three/fiber";
import { useConfigurator } from "../hooks/useConfigurator";
import { MaterialBody, MaterialKnob, MaterialPickguard, MaterialPickup, MaterialPickupPolePieces } from './Materials'

export function GuitarModel(props) {
    const { nodes, materials } = useGLTF("src/assets/models/stratocaster.gltf");

    const bodyWoodRoughness = useLoader(THREE.TextureLoader, 'src/assets/textures/Wood036_4K_Roughness.jpg')
    const bodyWoodNormal = useLoader(THREE.TextureLoader, 'src/assets/textures/Wood036_4K_Normal.jpg')
    const headLogo = useLoader(THREE.TextureLoader, 'src/assets/textures/logo_guitar.png')
    const guitarButton = useLoader(THREE.TextureLoader, 'src/assets/textures/guitar_button.png')

    const { bodyColor } = useConfigurator()

    useLayoutEffect(() => {
        materials.Wood.map = bodyWoodRoughness
        materials.Wood.normalMap = bodyWoodNormal
        materials.Wood.color.set('#ffb681')
        materials.Logo.transparent = true
        materials.Logo.map = headLogo
        materials.Knob.map = guitarButton
    }, [materials])

    useEffect(() => {
        materials.Body.color.set(bodyColor)
    }, [bodyColor])

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane007.geometry}
                // material={materialBody}
                position={[0, -0.263, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <MaterialBody />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.BezierCurve.geometry}
                    material={materials.Strings}
                    position={[-0.029, 0.026, -0.547]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.BezierCurve001.geometry}
                    material={materials.Strings}
                    position={[-0.022, 0.026, -0.567]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.BezierCurve002.geometry}
                    material={materials.Strings}
                    position={[-0.013, 0.025, -0.618]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.BezierCurve003.geometry}
                    material={materials["Strings Treb"]}
                    position={[-0.006, 0.025, -0.64]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.BezierCurve004.geometry}
                    material={materials["Strings Treb"]}
                    position={[0.002, 0.025, -0.687]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.BezierCurve005.geometry}
                    material={materials["Strings Treb"]}
                    position={[0.009, 0.025, -0.718]}
                />
                <group position={[-0.009, 0.028, -0.075]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube017.geometry}
                        material={materials.Plastic}
                    >
                        <MaterialPickup />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube017_1.geometry}
                    // material={materials["Pick Ups"]}
                    >
                        <MaterialPickupPolePieces />
                    </mesh>
                </group>
                <group position={[-0.009, 0.028, -0.012]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube018.geometry}
                        material={materials.Plastic}
                    >
                        <MaterialPickup />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube018_1.geometry}
                    // material={materials["Pick Ups"]}
                    >
                        <MaterialPickupPolePieces />
                    </mesh>
                </group>
                <group position={[-0.009, 0.028, 0.046]} rotation={[0, -0.175, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube001_1.geometry}
                        material={materials.Plastic}
                    >
                        <MaterialPickup />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube001_2.geometry}
                    // material={materials["Pick Ups"]}
                    >
                        <MaterialPickupPolePieces />
                    </mesh>
                </group>
                <group
                    position={[0.084, 0.031, 0.026]}
                    rotation={[-0.943, 0.489, 0.575]}
                    scale={[0.002, 0.016, 0.002]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002_1.geometry}
                        material={materials.Chrome}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube002_2.geometry}
                        material={materials.Plastic}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006.geometry}
                    material={materials.Nut}
                    position={[-0.007, 0.029, -0.581]}
                    scale={[1.028, 1, 1]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube007.geometry}
                    material={materials.Frets}
                    position={[-0.008, 0.029, -0.279]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube008.geometry}
                    material={materials.Chrome}
                    position={[-0.039, 0.031, 0.099]}
                    rotation={[0.052, 0, 0]}
                    scale={0.019}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube009.geometry}
                    material={materials.Chrome}
                    position={[-0.027, 0.031, 0.098]}
                    rotation={[0.052, 0, 0]}
                    scale={0.019}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube010.geometry}
                    material={materials.Chrome}
                    position={[-0.015, 0.031, 0.1]}
                    rotation={[0.052, 0, 0]}
                    scale={0.019}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube011.geometry}
                    material={materials.Chrome}
                    position={[-0.004, 0.031, 0.096]}
                    rotation={[0.052, 0, 0]}
                    scale={0.019}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube012.geometry}
                    material={materials.Chrome}
                    position={[0.008, 0.031, 0.099]}
                    rotation={[0.052, 0, 0]}
                    scale={0.019}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube013.geometry}
                    material={materials.Chrome}
                    position={[0.02, 0.031, 0.095]}
                    rotation={[0.052, 0, 0]}
                    scale={0.019}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube014.geometry}
                    material={materials.Chrome}
                    position={[-0.009, 0.03, 0.117]}
                    rotation={[0.052, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube015.geometry}
                    material={materials.Chrome}
                    position={[-0.009, -0.022, -0.148]}
                    scale={[0.752, 0.813, 0.813]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube016.geometry}
                    material={materials.Plastic}
                    position={[-0.009, -0.02, 0.061]}
                    scale={[1.8, 1.945, 2.247]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder.geometry}
                    material={materials.Chrome}
                    position={[-0.111, 0.001, -0.244]}
                    rotation={[Math.PI / 2, 0, 0.472]}
                    scale={[0.019, 0.005, 0.019]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001.geometry}
                    material={materials.Chrome}
                    position={[-0.008, 0, 0.239]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[0.019, 0.005, 0.019]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002.geometry}
                    // material={materials.Knob}
                    position={[0.12, 0.032, 0.107]}
                >
                    <MaterialKnob />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003.geometry}
                    // material={materials.Knob}
                    position={[0.086, 0.032, 0.078]}
                    rotation={[-Math.PI, 0.665, -Math.PI]}
                >
                    <MaterialKnob />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder004.geometry}
                    // material={materials.Knob}
                    position={[0.047, 0.032, 0.057]}
                    rotation={[-Math.PI, 0.117, -Math.PI]}
                >
                    <MaterialKnob />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder005.geometry}
                    material={materials.Screw}
                    position={[0.028, 0.025, -0.095]}
                    rotation={[0, 0.442, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder006.geometry}
                    material={materials.Screw}
                    position={[-0.056, 0.025, -0.128]}
                    rotation={[0, 0.143, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder007.geometry}
                    material={materials.Screw}
                    position={[-0.06, 0.025, -0.024]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder008.geometry}
                    material={materials.Screw}
                    position={[0.089, 0.025, -0.009]}
                    rotation={[Math.PI, -1.328, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder009.geometry}
                    material={materials.Screw}
                    position={[-0.049, 0.025, -0.074]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder010.geometry}
                    material={materials.Screw}
                    position={[0.03, 0.025, -0.074]}
                    rotation={[0, -0.71, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder011.geometry}
                    material={materials.Screw}
                    position={[-0.049, 0.025, -0.013]}
                    rotation={[0, -1.326, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder012.geometry}
                    material={materials.Screw}
                    position={[0.03, 0.025, -0.013]}
                    rotation={[Math.PI, -1.457, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder013.geometry}
                    material={materials.Screw}
                    position={[0.111, 0.025, -0.145]}
                    rotation={[0, -1.06, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder014.geometry}
                    material={materials.Screw}
                    position={[0.104, 0.025, 0.048]}
                    rotation={[0, 0.546, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder015.geometry}
                    material={materials.Screw}
                    position={[0.075, 0.025, 0.016]}
                    rotation={[0, -0.898, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder016.geometry}
                    material={materials.Screw}
                    position={[-0.051, 0.025, 0.039]}
                    rotation={[0, -0.803, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder017.geometry}
                    material={materials.Screw}
                    position={[-0.06, 0.025, 0.081]}
                    rotation={[0, 0.53, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder018.geometry}
                    material={materials.Screw}
                    position={[0.035, 0.025, 0.084]}
                    rotation={[0, 0.483, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder019.geometry}
                    material={materials.Screw}
                    position={[0.029, 0.025, 0.053]}
                    rotation={[Math.PI, -0.403, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder020.geometry}
                    material={materials.Screw}
                    position={[0.129, 0.025, 0.123]}
                    rotation={[Math.PI, -0.879, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder021.geometry}
                    material={materials.Screw}
                    position={[0.116, 0.026, 0.169]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder022.geometry}
                    material={materials.Screw}
                    position={[0.058, 0.026, 0.126]}
                    rotation={[0, 0.936, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder023.geometry}
                    material={materials.Screw}
                    position={[-0.026, 0.026, 0.08]}
                    rotation={[0, 1.005, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder024.geometry}
                    material={materials.Screw}
                    position={[-0.038, 0.026, 0.08]}
                    rotation={[0, -0.57, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder025.geometry}
                    material={materials.Screw}
                    position={[-0.015, 0.026, 0.08]}
                    rotation={[-Math.PI, 0.889, -Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder026.geometry}
                    material={materials.Screw}
                    position={[-0.003, 0.026, 0.08]}
                    rotation={[0, -0.435, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder027.geometry}
                    material={materials.Screw}
                    position={[0.008, 0.026, 0.08]}
                    rotation={[0, 1.069, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder028.geometry}
                    material={materials.Screw}
                    position={[0.02, 0.026, 0.08]}
                    rotation={[0, 0.344, 0]}
                />
                <group
                    position={[0.074, 0.02, 0.139]}
                    rotation={[1.433, 0.177, -0.912]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder002_1.geometry}
                        material={materials.Chrome}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder002_2.geometry}
                        material={materials.Black}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder030.geometry}
                    material={materials.Chrome}
                    position={[-0.01, 0.021, -0.688]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder031.geometry}
                    material={materials.Chrome}
                    position={[0.007, 0.021, -0.661]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder032.geometry}
                    material={materials.Screw}
                    position={[0.007, 0.021, -0.661]}
                />
                <group
                    position={[0.098, 0.052, 0.097]}
                    rotation={[0, -1.404, 0]}
                    scale={0.01}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder009_1.geometry}
                        material={materials.Chrome}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder009_2.geometry}
                        material={materials.Plastic}
                    />
                </group>
                <group position={[-0.017, -0.003, -0.696]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder010_1.geometry}
                        material={materials.Chrome}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder010_2.geometry}
                        material={materials.Plastic}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder036.geometry}
                    material={materials.Screw}
                    position={[-0.008, 0, 0.242]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder037.geometry}
                    material={materials.Screw}
                    position={[-0.11, 0.001, -0.247]}
                    rotation={[Math.PI / 2, 0, -2.672]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder038.geometry}
                    material={materials["Fret Markers"]}
                    position={[-0.008, 0.03, -0.274]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder039.geometry}
                    material={materials.Screw}
                    position={[0.005, -0.023, -0.169]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={1.621}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder040.geometry}
                    material={materials.Screw}
                    position={[-0.024, -0.023, -0.169]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={1.621}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder041.geometry}
                    material={materials.Screw}
                    position={[0.005, -0.023, -0.126]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={1.621}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder042.geometry}
                    material={materials.Screw}
                    position={[-0.024, -0.023, -0.126]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={1.621}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder043.geometry}
                    material={materials.Screw}
                    position={[-0.048, -0.024, -0.011]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={1.995}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder044.geometry}
                    material={materials.Screw}
                    position={[0.029, -0.024, -0.011]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={1.995}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder045.geometry}
                    material={materials.Screw}
                    position={[-0.048, -0.024, 0.12]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={1.995}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder046.geometry}
                    material={materials.Screw}
                    position={[0.029, -0.024, 0.12]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={1.995}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Logo.geometry}
                    material={materials.Logo}
                    position={[0.025, 0.018, -0.686]}
                    rotation={[Math.PI, -0.05, 0]}
                    scale={0.101}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001.geometry}
                    material={materials.Wood}
                    position={[-0.001, 0.015, -0.487]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002.geometry}
                    material={materials.Plastic}
                    position={[0.052, 0.025, -0.019]}
                >
                    <MaterialPickguard />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane003.geometry}
                    material={materials.Chrome}
                    position={[-0.003, 0.027, 0.105]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004.geometry}
                    material={materials.Chrome}
                    position={[0.085, 0.02, 0.147]}
                    rotation={[0, 0.918, 0]}
                />
            </mesh>
        </group>
    );
}

useGLTF.preload("src/assets/models/stratocaster.gltf");