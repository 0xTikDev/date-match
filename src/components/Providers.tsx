import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

export default function Providers({children}: {children: ReactNode}) {
  return (
    <div>
        <NextUIProvider >
            {children}
        </NextUIProvider>
    </div>
  )
}