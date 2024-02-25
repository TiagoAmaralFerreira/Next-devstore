import { Header } from "@/components/header";
import { ReactNode } from "react";

interface IStoreLayout {
  children: ReactNode;
}

export default function StoreLayout({ children }: IStoreLayout) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
      <Header />
      {children}
    </div>
  );
}
