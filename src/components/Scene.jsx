import { Canvas } from '@react-three/fiber'
import { GuitarModel } from './guitarModel'
import { Environment, Html, OrbitControls, useProgress } from '@react-three/drei'
import { Suspense } from 'react'
import Loader from './shared/Loader'

function Scene() {

    const { progress } = useProgress()

    return (
        <Canvas>
            <Suspense fallback={<Loader />}>
                <GuitarModel />
            </Suspense>
            <OrbitControls
                minDistance={.5}
                maxDistance={1}
                enablePan={false}
            />
            <Environment preset="studio" />
        </Canvas>
    )
}

export default Scene