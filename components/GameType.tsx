interface Gametype {
  name: string;
}
export default function GameType({ name }: Gametype) {
  return (
    <>
      <span className="bg-gray-200 text-gray-500 px-2 mb-1 mr-1 text-sm py-1 rounded-full inline-block hover:cursor-pointer hover:text-main-red">
        {name}
      </span>
    </>
  );
}
