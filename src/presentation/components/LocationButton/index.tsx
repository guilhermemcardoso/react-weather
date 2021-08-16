import React from "react";

import { Button } from "./styles";

type Props = {
  onClick: Function;
  isSelected: boolean;
  locationId: number;
  locationName: string;
};

const LocationButton: React.FC<Props> = ({ onClick, isSelected, locationId, locationName }) => {

  function handleClick() {
    onClick(locationId);
  }

  return (
        <Button isSelected={isSelected} onClick={handleClick}>{locationName}</Button>
  );
};

export default LocationButton;
