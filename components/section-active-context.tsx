"use client";

import React, { useState, createContext, useContext } from "react";
import { SectionName } from "@/utils/type";

type ActiveSectionContextProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeLastClick: number;
  setTimeLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeLastClick, setTimeLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeLastClick,
        setTimeLastClick,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useACtiveContextSection must be usedwithin an ActiveSectionContextProvider"
    );
  }

  return context;
}
