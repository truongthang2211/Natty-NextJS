import Navbar from "./Navbar";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen mt-16">
        <div className="container mx-auto overflow-auto">{children}</div>
      </div>
    </>
  );
}
