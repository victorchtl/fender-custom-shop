import ColorPicker from './shared/ColorPicker'
import { useConfigurator } from '../hooks/useConfigurator'
import { DashboardItem } from './shared/DashboardItem'
import FinishSelect from './shared/FinishSelect'
import DashboardItemOption from './shared/DashboardItemOption'

function Dashboard() {

  const {
    bodyColor,
    setBodyColor,
    setBodyRoughness,
    setBodyMetalness,
    pickguardColor,
    setPickguardColor,
    setPickguardRoughness,
    setPickguardMetalness,
    pickupColor,
    setPickupColor,
    setPickupRoughness,
    setPickupMetalness,
    pickupPolePiecesColor,
    setPickupPolePiecesColor,
    knobColor,
    setKnobColor,
    setKnobRoughness,
    setKnobMetalness,
  } = useConfigurator()

  return (
    <>
      <DashboardItem title={'body'}>
        <DashboardItemOption title={'color'}>
          <ColorPicker color={bodyColor} target={setBodyColor} />
        </DashboardItemOption>
        <DashboardItemOption title={'finish'}>
          <FinishSelect setRoughness={setBodyRoughness} setMetalness={setBodyMetalness} />
        </DashboardItemOption>
      </DashboardItem>

      <DashboardItem title={'pickguard'}>
        <DashboardItemOption title={'color'}>
          <ColorPicker color={pickguardColor} target={setPickguardColor} />
        </DashboardItemOption>
        <DashboardItemOption title={'finish'}>
          <FinishSelect setRoughness={setPickguardRoughness} setMetalness={setPickguardMetalness} />
        </DashboardItemOption>
      </DashboardItem>

      <DashboardItem title={'pickups'}>
        <DashboardItemOption title={'color'}>
          <ColorPicker color={pickupColor} target={setPickupColor} />
        </DashboardItemOption>
        <DashboardItemOption title={'finish'}>
          <FinishSelect setRoughness={setPickupRoughness} setMetalness={setPickupMetalness} />
        </DashboardItemOption>
        <DashboardItemOption title={'pole pieces color'}>
          <ColorPicker color={pickupPolePiecesColor} target={setPickupPolePiecesColor} />
        </DashboardItemOption>
      </DashboardItem>

      <DashboardItem title={'knobs'}>
        <DashboardItemOption title={'color'}>
          <ColorPicker color={knobColor} target={setKnobColor} />
        </DashboardItemOption>
        <DashboardItemOption title={'finish'}>
          <FinishSelect setRoughness={setKnobRoughness} setMetalness={setKnobMetalness} />
        </DashboardItemOption>
      </DashboardItem>
    </>
  )
}

export default Dashboard