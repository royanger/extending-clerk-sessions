import * as React from "react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/remix";

interface IHeaderProps {
   label: string;
   children?: React.ReactNode;
}

export const Header = ({ label, children }: IHeaderProps) => {
   return (
      <header className="w-full flex flex-row justify-center">
         <div className="container flex flex-row py-4">
            <h1 className="text-3xl grow">Extending Sessions -sasfd {label}</h1>
            <div>
               {children}
            </div>
         </div>
      </header>
   );
};
