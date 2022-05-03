import Image from "next/image";
import GameType from "./GameType";
interface ItemCard {
  name: string;
  version: string;
}
export default function ItemCard({ name, version }: ItemCard) {
  return (
    <>
      <div className="flex flex-col h-[400px] shadow-md rounded-md overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-250">
        <div className="h-[54%] relative">
          <Image
            src="/img/games/sifu.jpg"
            layout="fill"
            alt=""
            objectFit="fill"
            className="hover:cursor-pointer"
          />
        </div>
        <div className="px-3 py-2 text-gray-500 flex flex-col h-[46%] justify-between ">
          <h2 className=" text-lg grow-1 text-ellipsis overflow-hidden whitespace-nowrap h-7 hover:cursor-pointer hover:text-main-red">
            {`${name} - ${version}`}
          </h2>
          <div className="w-full mt-2 h-8 overflow-hidden">
            <GameType name="Nhập vai" />
            <GameType name="Chiến thuật" />
            <GameType name="Theo lượt" />
            <GameType name="Hoạt hình" />
            <GameType name="Hài hước" />
          </div>
          <div className="mt-2 text-sm">
            <span>Phát hành: </span>
            <span className="ml-2 ">22/11/2001</span>
          </div>
          <div className="mt-2 text-sm">
            <span>Cập nhật lần cuối: </span>
            <span className="ml-2">22/11/2001</span>
            <span className="ml-2">{version ? `- ${version}` : ``}</span>
          </div>
          <div className="flex justify-between mt-2 text-center">
            <div>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <span className="ml-2">4.8</span>
            </div>
            <div className="flex space-x-2">
              <div>
                <i className="fa-solid fa-heart text-main-red"></i>
                <span className="ml-2">4000</span>
              </div>
              <div>
                <i className="fa-solid fa-eye text-purple-400"></i>
                <span className="ml-2">1000000</span>
              </div>
              <div>
                <i className="fa-solid fa-comment text-emerald-500"></i>
                <span className="ml-2">48</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
