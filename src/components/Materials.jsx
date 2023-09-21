import { LayerMaterial, Texture } from 'lamina'
import { useConfigurator } from '../hooks/useConfigurator'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'

export const MaterialBody = () => {
  const { bodyColor, bodyRoughness, bodyMetalness } = useConfigurator()
  return (
    <LayerMaterial
      color={bodyColor}
      lighting="physical"
      roughness={bodyRoughness}
      metalness={bodyMetalness}
    />
  )
}

export const MaterialPickguard = () => {
  const { pickguardColor, pickguardRoughness, pickguardMetalness } = useConfigurator()
  return (
    <LayerMaterial
      color={pickguardColor}
      lighting="physical"
      roughness={pickguardRoughness}
      metalness={pickguardMetalness}
    />
  )
}

export const MaterialPickup = () => {
  const { pickupColor, pickupRoughness, pickupMetalness } = useConfigurator()
  return (
    <LayerMaterial
      color={pickupColor}
      lighting="physical"
      roughness={pickupRoughness}
      metalness={pickupMetalness}
    />
  )
}

export const MaterialPickupPolePieces = () => {
  const { pickupPolePiecesColor } = useConfigurator()
  return (
    <LayerMaterial
      color={pickupPolePiecesColor}
      lighting="physical"
      roughness={0}
      metalness={1}
    />
  )
}

export const MaterialKnob = () => {
  const { knobColor, knobRoughness, knobMetalness } = useConfigurator()
  const buttonTex = useLoader(THREE.TextureLoader, 'src/assets/textures/guitar_button.png')
  return (
    <LayerMaterial
      color={knobColor}
      lighting="physical"
      roughness={knobRoughness}
      metalness={knobMetalness}
    >
      <Texture
        map={buttonTex}
        mode='multiply'
      />
    </LayerMaterial>
  )
}





