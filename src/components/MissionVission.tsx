import {
  Target,
  Rocket,
  // Globe
} from "lucide-react";

const VisionMission = () => {
  return (
    <section className="bg-white py-16 ">
      <div className=" mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 ">Our Journey</h2>

        <div className="grid md:grid-cols-2 gap-8 md:px-[7rem] px-2">
          {/* Vision */}
          <div className="bg-[#F49D3F] p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4">
              <Target className="text-white w-16 h-16" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Vision Statement
            </h3>
            <p className="">
              To be Africa’s leading financial partner, empowering individuals
              and businesses with innovative investment solutions that build
              enduring wealth and drive economic prosperity.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#F49D3F]/10 p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4">
              <Rocket className="text-[#692371] w-16 h-16" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 ">Mission Statement</h3>
            <p className="">
              At Fortress Capital Limited, we are committed to providing
              top-tier investment banking and brokerage services tailored to the
              unique needs of Africa through expert financial advisory and
              cutting-edge technology, helping our clients achieve long-term
              financial success and legacy
            </p>
          </div>

          {/* Values */}
          {/* <div className="bg-[#692371] p-6 rounded-xl text-center hover:shadow-lg transition-all text-white">
            <div className="flex justify-center mb-4">
              <Globe className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center gap-2">
                <span className="text-[#F49D3F]">◆</span> Integrity in all we do
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-[#F49D3F]">◆</span> Continuous innovation
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-[#F49D3F]">◆</span> Customer-first
                approach
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-[#F49D3F]">◆</span> Sustainable growth
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
