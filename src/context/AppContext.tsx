"use client";

import { IApp } from "@/type/Apps.type";
import { createContext, ReactNode, useState } from "react";

interface IAppContext {
  installation: IApp[];
  setInstallation: React.Dispatch<React.SetStateAction<IApp[]>>;
}

export const AppContext = createContext<IAppContext>({
  installation: [],
  setInstallation: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [installation, setInstallation] = useState<IApp[]>([]);

  const shareData = {
    installation,
    setInstallation,
  };

  return (
    <AppContext.Provider value={shareData}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;