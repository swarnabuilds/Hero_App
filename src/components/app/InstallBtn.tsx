"use client";

import { AppContext } from "@/context/AppContext";
import { IApp } from "@/type/Apps.type";
import { useContext } from "react";
import { toast , Bounce} from 'react-toastify'; 

interface InstallBtnProps {
  app: IApp;
}

const InstallBtn = ({ app }: InstallBtnProps) => {
    const {installation, setInstallation} = useContext(AppContext)
    const handelInstall = () =>{
        setInstallation([...installation, app]);

        toast('Successfully install your app', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  return (
    <div className="pt-2">
      <button onClick={() => handelInstall()} className="btn btn-primary text-white font-semibold rounded-xl border-none shadow-md shadow-primary/20 hover:shadow-lg transition-all w-full sm:w-auto h-11 px-6 text-sm">
        Install App ({app.size} MB)
      </button>
    </div>
  );
};

export default InstallBtn;