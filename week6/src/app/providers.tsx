"use client";

import ReduceContextProvider from "@auth/context/modalContextProvier";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return <ReduceContextProvider>{children}</ReduceContextProvider>;
}
