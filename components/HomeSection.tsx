import { ReactNode } from "react";
import ItemCard from "./ItemCard";
interface HomeSection {
  name: string;
  children: ReactNode;
}
export default function HomeSection({ children, name }: HomeSection) {
  return (
    <div className="flex flex-col px-5 bg-white py-6 mt-4 border-2 border-gray-200 mb-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium">{name}</h2>
        <div className="hover:cursor-pointer hover:text-main-red">
          <span>Xem tất cả</span>
          <i className="fa-solid fa-angles-right ml-3"></i>
        </div>
      </div>
      <div className="mt-2 grid grid-flow-row gap-y-6 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {children}
      </div>
    </div>
  );
}
