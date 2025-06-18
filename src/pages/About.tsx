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
    <div className="min-h-screen">
      <header className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="w-full flex flex-col sm:text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#f49d3f] mb-6">
              Who We Are
            </h1>
            <p className="text-base sm:text-lg lg:text-xl  text-black font-[500] leading-relaxed  max-w-4xl mx-auto">
              Fortress Capital Limited is one of Nigeria's leading investment
              banking firms committed to providing top-tier financial services
              tailored to clients' unique needs. The company started business
              operations as Heritage Investments and Securities in 1997, and
              over the years provided investment-related services in the areas
              of Securities Trading, Asset Management, and Financial Advisory. A
              trading licensed holder on the Nigerian Exchange (NGX), National
              Association of Securities Dealers (NASD), as well as a dealing
              member specialist on the Financial Market Dealer Quotation (FMDQ).
              Fortress Capital Limited has in the last three decades leveraged
              deep market expertise and innovative strategies to support clients
              like you to build, grow, and protect wealth.
            </p>
          </div>
          <div className="mt-8 sm:mt-12">
            <img
              src={abouthero}
              alt="About Hero"
              className="w-full h-48 sm:h-64 md:h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto space-y-16">
          <section id="whoweare">
            <VisionMission />
            <div className="space-y-8 sm:space-y-12">
              <hr className="border-t border-slate-300" />
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#f49d3f] mb-4">
                  Our Core Values:
                </h2>
                <p className="text-base sm:text-lg leading-relaxed">
                  Client-focused | Professionalism | Transparency |
                  Result-driven | Growth
                </p>
              </div>
              <hr className="border-t border-slate-300" />
            </div>
          </section>

          <TestimonialPage />

          <section id="meettheteam" className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#f49d3f] mb-8">
                Board of Directors
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {boardDirectors?.data?.map((item: string, idx: number) => (
                  <CardComp key={idx} item={item} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#f49d3f] mb-8">
                Management Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {teamMembers?.data?.map((item: string, idx: number) => (
                  <CardComp key={idx} item={item} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
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
