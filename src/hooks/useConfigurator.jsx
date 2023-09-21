/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {

  const [bodyColor, setBodyColor] = useState('#EE1C2D');
  const [bodyRoughness, setBodyRoughness] = useState(0.1);
  const [bodyMetalness, setBodyMetalness] = useState(0);

  const [pickguardColor, setPickguardColor] = useState('#fff');
  const [pickguardRoughness, setPickguardRoughness] = useState(0.1);
  const [pickguardMetalness, setPickguardMetalness] = useState(0);

  const [pickupColor, setPickupColor] = useState('#fff');
  const [pickupRoughness, setPickupRoughness] = useState(0.1);
  const [pickupMetalness, setPickupMetalness] = useState(0);

  const [pickupPolePiecesColor, setPickupPolePiecesColor] = useState('#fff');

  const [knobColor, setKnobColor] = useState('#fff');
  const [knobRoughness, setKnobRoughness] = useState(0.1);
  const [knobMetalness, setKnobMetalness] = useState(0);

  const values = {

    bodyColor,
    setBodyColor,
    bodyRoughness,
    setBodyRoughness,
    bodyMetalness,
    setBodyMetalness,

    pickguardColor,
    setPickguardColor,
    pickguardRoughness,
    setPickguardRoughness,
    pickguardMetalness,
    setPickguardMetalness,

    pickupColor,
    setPickupColor,
    pickupRoughness,
    setPickupRoughness,
    pickupMetalness,
    setPickupMetalness,

    pickupPolePiecesColor,
    setPickupPolePiecesColor,

    knobColor,
    setKnobColor,
    knobRoughness,
    setKnobRoughness,
    knobMetalness,
    setKnobMetalness,
  }

  return (
    <ConfiguratorContext.Provider value={values}>
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  const context = useContext(ConfiguratorContext);
  if (context === undefined) {
    throw new Error(
      "useConfigurator must be used within a ConfiguratorProvider"
    );
  }
  return context;
};