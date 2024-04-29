/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/
"use client";

import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Page = () => {
  const [state, setState] = useState(false);
  return (
    <main>
      <Switch checked={state} onCheckedChange={setState} />
      <button onClick={() => console.log(state)}>Submit</button>
    </main>
  );
};
export default Page;
