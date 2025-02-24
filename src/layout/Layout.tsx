// components/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/reuseable/Navbar";
import SmoothStockTicker from "../components/StockAnalizer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className=" lg:pt-[75px] pt-[65px] fixed z-40">
        <SmoothStockTicker />
      </div>
      <main className="lg:pt-[200px] md:pt-[170px] pt-[140px] xl:px-[10%] lg:px-{5%} md:px-[3%] px-[10px] bg-white w-full">
        <Outlet /> {/* This will render the current route's component */}
      </main>
    </>
  );
};

export default Layout;
