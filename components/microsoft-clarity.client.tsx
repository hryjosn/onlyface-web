// biome-ignore lint/style/useFilenamingConvention: Component name must be PascalCase
"use client";

import clarity from "@microsoft/clarity";
import { useEffect } from "react";

export const MicrosoftClarity = () => {
  useEffect(() => {
    clarity.init("viwv1hvoc6");
  }, []);

  return null;
};
