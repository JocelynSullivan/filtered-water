import React, { useState } from "react";

const contaminated: string[] = ["chlorine", "dirt", "oil", "debris"];

function FilterWater(contaminated: string[], contaminates: string[]): string[] {
  let filteredWater: string[] = contaminated.filter(
    (contaminate) => !contaminates.includes(contaminate),
  );
  return filteredWater;
}

export default FilterWater;
