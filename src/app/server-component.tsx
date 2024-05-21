import { cookies } from "next/headers";
import React from "react";

export default function ServerComponent({ children }: { children: React.ReactNode }) {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <div>
      {React.cloneElement(children as React.ReactElement, { defaultLayout })}
    </div>
  );
}