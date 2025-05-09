import Footer from "../components/Footer";
import abouthero from "../assets/images/whoweare.jpg";
import { CardComp } from "../components/reuseable/Card";
import TestimonialPage from "../components/Testimonal";
import VisionMission from "../components/MissionVission";
import { useGetBoardDirectors, useGetTeamMembers } from "../api/get/getData";

const About = () => {
  const { data: teamMembers } = useGetTeamMembers("team_members.php");
  const { data: boardDirectors } = useGetBoardDirectors("team_members.php");

  return (
    <>
      <header className=" w-full">
        <div className="w-full flex flex-col px-1 md:text-center">
          <h1 className="text-[42px] font-semibold text-[#f49d3f] mb-[2%]  ">
            Who We Are
          </h1>
          <p className="md:text-[19px] text-[]  break-words leading-relaxed ">
            Fortress Capital Limited is one of Nigeria's leading investment
            banking firms committed to providing top-tier financial services
            tailored to clients' unique needs. The company started business
            operations as Heritage Investments and Securities in 1997, and over
            the years provided investment-related services in the areas of
            Securities Trading, Asset Management, and Financial Advisory. A
            trading licensed holder on the Nigerian Exchange (NGX), National
            Association of Securities Dealers (NASD), as well as a dealing
            member specialist on the Financial Market Dealer Quotation (FMDQ).
            Fortress Capital Limited has in the last three decades leveraged
            deep market expertise and innovative strategies to support clients
            like you to build, grow, and protect wealth.
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
        <div className="w-full   mt-[5%] " id="whoweare">
          <VisionMission />
          <div className="w-full   ">
            <div className="border-b border-slate-500 w-full my-14"></div>

            <div className=" w-full">
              <h1 className="md:text-[35px] text-[18px] font-semibold text-[#f49d3f] mb-[1%] ">
                Our Core Values:
              </h1>
              <p className="md:text-[18px] text-[14px]  leading-[30px] ">
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
        <section className="my-[10%]" id="meettheteam">
          <h1 className="md:text-[35px] text-[18px] font-semibold text-[#f49d3f] my-6">
            Board of Directors
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
            {boardDirectors?.data?.map((item: string, idx: number) => (
              <CardComp key={idx} item={item} />
            ))}
          </div>
        </section>

        <section className="1 " id="meettheteam">
          <h1 className="md:text-[35px] text-[18px] font-semibold text-[#f49d3f] my-6">
            Management Team
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers?.data?.map((item: string, idx: number) => (
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

// const teamMembers = [
//   { name: "Emma Collins", position: "Chief Executive Officer" },
//   { name: "Michael Thompson", position: "Chief Technology Officer" },
//   { name: "Sophia Ramirez", position: "Head of Investment Strategy" },
//   { name: "David Lee", position: "Chief Marketing Officer" },
//   { name: "Olivia Chen", position: "Client Relations Manager" },
// ];
