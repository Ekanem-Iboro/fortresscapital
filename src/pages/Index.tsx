import Slider from "../components/reuseable/HeroSlider";
import OurService from "../components/OurService";
import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import TestimonialPage from "../components/Testimonal";

const Home = () => {
  return (
    <div className="w-full">
      <Slider />
      <section className="md:mt-[8rem] mt-[2rem]">
        {/* <div className="bg-custom-pattern   rounded-lg py-10 flex justify-center items-center">
          <div className=" md:w-[50%] w-full p-4 m-auto min:h-[250px]   rounded-xl overflow-hidden ">
            <h1 className="md:text-[50px] text-[30px] font-semibold text-white mb-[2%] lg:px-[6%] md:px-[5%] px-0 text-center">
              Our Mission
            </h1>
            <p className="md:text-[24px] text-[22px] text-white leading-[40px] lg:px-[6%] md:px-[5%] px-0 font-[500]  text-center">
              <span className="text-[20px] text-white ">&rdquo;</span>To be the
              choice investment management firm with the most satisfied clients
              by rendering qualitative services and always adding value in all
              our undertakings in an ethical and professional manner.
              <span className="text-[20px] text-white">&rdquo;</span>
            </p>
          </div>
        </div> */}
        <OurService />

        <Banner />

        <Blog />
        <TestimonialPage />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
