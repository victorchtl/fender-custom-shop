/* eslint-disable react/prop-types */
import { MenuItem, Select } from "@mui/material"
import { useState } from "react"


function FinishSelect({ setRoughness, setMetalness }) {

  const [finish, setFinish] = useState('gloss')

  const handleChange = (e) => {
    const val = e.target.value
    setFinish(val)
    if (val === 'metal') {
      setRoughness(0)
      setMetalness(1)
    } else if (val === 'mat') {
      setRoughness(1)
      setMetalness(0)
    } else {
      setRoughness(0.1)
      setMetalness(0)
    }
  }

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={finish}
      label="finish"
      onChange={handleChange}
      sx={{
        border: 'none',
        fontSize:'.7rem',
      }}
    >
      <MenuItem value={'gloss'} sx={{fontSize:'.7rem'}}>Gloss</MenuItem>
      <MenuItem value={'metal'} sx={{fontSize:'.7rem'}}>Metal</MenuItem>
      <MenuItem value={'mat'} sx={{fontSize:'.7rem'}}>Mat</MenuItem>
    </Select>
  )
}

export default FinishSelect