import research from "../assets/images/report.jpg";
import Footer from "../components/Footer";
import { TabsComp } from "../components/reuseable/Tap";

const Research = () => {
  return (
    <section>
      <div className="">
        <header className=" w-full ">
          <div>
            <img
              src={research}
              alt=""
              className="md:h-[500px] h-full object-cover aspect-square w-full "
            />
          </div>
        </header>
        <section className="my-[3%]">
          <div className="w-full  md:px-[18%] px-1 flex flex-col items-center justify-center">
            <h1 className="md:text-[52px] text-[35px] font-semibold text-[#f49d3f] mb-[4%] ">
              <span className="text-[#692371]">Research</span>{" "}
              <span className="text-slate-600">|</span> Reports
            </h1>
            <p className="text-slate-600">
              Gain actionable insights on economy, markets, and industry trends
              – delivered through our insightful reports.
            </p>
          </div>
        </section>
      </div>
      <section className="md:flex justify-center items-center w-full mt-[4%]">
        <TabsComp />
      </section>
      <Footer />
    </section>
  );
};

export default Research;
