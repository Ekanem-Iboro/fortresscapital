import Footer from "../components/Footer";
import abouthero from "../assets/images/whoweare.jpg";
import { CardComp } from "../components/reuseable/Card";
import TestimonialPage from "../components/Testimonal";
import VisionMission from "../components/MissionVission";

const About = () => {
  return (
    <>
      <header className=" w-full">
        <div className="w-full flex flex-col items-center md:px-[22%] px-1 md:text-center">
          <h1 className="text-[42px] font-semibold text-[#f49d3f] mb-[2%] ">
            Who we are
          </h1>
          <p className="md:text-[20px] text-[]  leading-[30px] ">
            Fortress Capital Limited is one of Nigeria’s leading providers of
            securities trading, financial advisory and assets management
            services. We guide and support institutions, high network and retail
            clients to maximize returns on overall investments.
          </p>
        </div>
        <div>
          <img
            src={abouthero}
            alt=""
            className="md:h-[500px] h-full object-cover mt-[3%] w-full"
          />
        </div>
      </header>

      <section>
        <div
          className="w-full  xl:px-[7%] lg:[2%] px-1  mt-[5%] "
          id="whoweare"
        >
          {/* <div className="md:flex justify-between w-full block">
            <div className="md:w-[50%] w-full">
              <h1 className="text-[42px] font-semibold text-[#f49d3f] mb-[2%] ">
                What We Do
              </h1>
              <p className="text-[14px]  leading-[30px] lg:pr-[17%] md:pr-[5%] pr-0 ">
                <span className="text-[30px] text-slate-500"> &quot; </span>{" "}
                Foretress is dedicated to providing a seamless and intuitive
                investment platform for individuals and businesses alike. We
                simplify the complexities of the financial markets, offering a
                diverse range of investment options that cater to all levels of
                experience. From stocks and bonds to innovative assets, our
                platform enables users to build a tailored portfolio that aligns
                with their financial goals. We also provide real-time data,
                expert analysis, and personalized recommendations, ensuring that
                our users have the tools they need to make informed decisions
                and achieve sustainable growth{" "}
                <span className="text-[30px] text-slate-500"> &quot; </span>
              </p>
            </div>
            <div className="md:w-[50%] w-full flex justify-end">
              <Image src={whatwedo} alt="" className="md:w-[500px] w-full" />
            </div>
          </div>
          <div className="md:flex justify-between w-full block my-[7%]">
            <div className="md:w-[50%] w-full md:flex hidden justify-start">
              <Image src={mission} alt="" className="md:w-[500px] w-full" />
            </div>
            <div className="md:w-[50%] w-full  justify-end ">
              <h1 className="text-[42px] font-semibold text-[#f49d3f] mb-[2%] lg:pl-[17%] md:p1-[5%] pl-0">
                Our Mission
              </h1>
              <p className="text-[14px]  leading-[30px] lg:pl-[17%] md:p1-[5%] pl-0 ">
                <span className="text-[30px] text-slate-500"> &quot; </span> To
                be the choice investment management firm with the most satisfied
                clients by rendering qualitative services and always adding
                value in all our undertakings in an ethical and professional
                manner.
                <span className="text-[30px] text-slate-500"> &quot; </span>
              </p>
            </div>
           
          </div>*/}
          {/* <div className="md:flex justify-between items-center w-full block">
            <div className="md:w-[50%] w-full">
              <h1 className="md:text-[42px] text-[30px] font-semibold text-[#f49d3f] mb-[2%] ">
                Our Vision | Mission
              </h1>
              <p className="md:text-[18px] text-[14px]  leading-[30px] lg:pr-[20%] md:pr-[5%] pr-0 ">
                <span className="text-[30px] text-slate-500"> &quot; </span>To
                be Nigeria’s most trusted provider of excellent assets
                management services. Mission: To safeguard and maximize client’s
                wealth with utmost regard for transparency and professionalism.
                <span className="text-[30px] text-slate-500"> &quot; </span>
              </p>
            </div>
            <div className="md:w-[50%] md:mt-0 mt-8 w-full flex justify-end">
              <Image src={vision} alt="" className="md:w-[500px] w-full" />
            </div>
          </div> */}
          <VisionMission />
          <div className="w-full   ">
            <div className="border-b border-slate-500 w-full my-14"></div>

            <div className=" w-full">
              <h1 className="md:text-[42px] text-[30px] font-semibold text-[#f49d3f] mb-[1%] ">
                Our Core Values:
              </h1>
              <p className="md:text-[18px] text-[14px]  leading-[30px] lg:pr-[20%] md:pr-[5%] pr-0 ">
                Client-focused | Professionalism | Transparency | Result-driven
                | Growth
              </p>
            </div>
            <div className="border-b border-slate-600 w-full my-14"></div>
          </div>
        </div>
        <section>
          <TestimonialPage />
        </section>
        <section className="my-[10%] md:px-[7%] px-1 " id="meettheteam">
          <h1 className="md:text-[42px] text-[30px] font-semibold text-[#f49d3f] my-6">
            Board of Directors
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((item, idx) => (
              <CardComp key={idx} item={item} />
            ))}
          </div>
        </section>

        <section className="my-[10%] md:px-[7%] px-1 " id="meettheteam">
          <h1 className="md:text-[42px] text-[30px] font-semibold text-[#f49d3f] my-6">
            Management Team
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((item, idx) => (
              <CardComp key={idx} item={item} />
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default About;

const teamMembers = [
  { name: "Emma Collins", position: "Chief Executive Officer" },
  { name: "Michael Thompson", position: "Chief Technology Officer" },
  { name: "Sophia Ramirez", position: "Head of Investment Strategy" },
  { name: "David Lee", position: "Chief Marketing Officer" },
  { name: "Olivia Chen", position: "Client Relations Manager" },
];
