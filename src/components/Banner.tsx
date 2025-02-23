import coverImg from "../assets/images/createAccount.webp";
import upload from "../assets/images/upload.png";
import invest from "../assets/images/invest.webp";

const Banner = () => {
  return (
    <section className=" w-full md:flex justify-center  mt-[1rem] ">
      <div className="mt-[8%]  md:shadow-2xl  rounded-2xl overflow-hidden  md:flex block lg:w-[900px] md:min-w-[500px] ">
        <div className=" relative bg4  flex  items-center justify-center md:w-[50%] w-full md:h-[600px] h-[400px]  ">
          <div className="p-[3%] bg-gradient-image  overflow-hidden px-[20%]">
            <div className="relative z-10 ">
              <p className="text-[35px]  text-[#fff] font-[600] leading-10 ">
                Get
                <br />
                Started
              </p>

              <p className="text-[18px]  text-[#fefefe] font-medium leading-6 mt-7">
                Create an account in five minutes.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full flex items-center justify-evenly flex-col px-[5%] md:h-[600px] h-[400px] capitalize ">
          <div className="flex gap-4">
            <img
              src={coverImg}
              alt=""
              className="object-cover w-[55px] h-[55px]"
            />

            <div className="md:w-[250px] w-[350px]">
              <h1 className="text-[20px] font-bold mb-1">Create an Account</h1>
              <p className="lg:pr-[13%] md:pr-[8%] pr-0 text-[16px] font-light ">
                click on the form and fill your details.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src={upload}
              alt=""
              className="object-cover w-[55px] h-[55px]"
            />
            <div className="md:w-[250px] w-[350px]">
              <h1 className="text-[20px] font-bold mb-1">Upload</h1>
              <p className="lg:pr-[13%] md:pr-[8%] pr-0 text-[16px] font-light">
                upload your materials
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src={invest}
              alt=""
              className="object-cover w-[55px] h-[55px]"
            />

            <div className="md:w-[250px] w-[350px]">
              <h1 className="text-[20px] font-bold mb-1">Make Profit</h1>
              <p className="lg:pr-[13%] md:pr-[8%] pr-0 text-[16px] font-light">
                fill in the mandate form to invest
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <p className="lg:pr-[13%] md:pr-[8%] pr-0 text-[16px] font-light">
              Voila! You are done. Login to your portal to see your portfolio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

// <section className=" w-full md:flex justify-center ">
//   <div className="mt-[8%]  md:shadow-2xl  rounded-2xl overflow-hidden  md:flex block lg:w-[900px] md:min-w-[500px] ">
//     <div className=" relative bg4  flex  items-center justify-center md:w-[50%] w-full md:h-[600px] h-[400px]  ">
//       <div className="p-[3%] bg-gradient-image  overflow-hidden px-[20%]">
//         <div className="relative z-10 ">
//           <p className="text-[35px]  text-[#fff] font-[600] leading-10 ">
//             Get
//             <br />
//             Started
//           </p>
//           <p className="text-[15px] uppercase text-[#fff] font-[600] mb-9">
//             in three easy steps
//           </p>
//           <p className="text-[16px]  text-[#fefefe] font-medium leading-6">
//             Begin your journey to financial freedom. Make your money work
//             for you.
//           </p>
//         </div>
//       </div>
//     </div>
//     <div className="md:w-[50%] w-full flex items-center justify-evenly flex-col px-[5%] md:h-[600px] h-[400px]  ">
//       <div className="flex gap-4">
//         <Image
//           src={coverImg}
//           alt=""
//           className="object-cover w-[55px] h-[55px]"
//         />

//         <div className="md:w-[250px] w-[350px]">
//           <h1 className="text-[20px] font-bold mb-1">Create an Account</h1>
//           <p className="lg:pr-[13%] md:pr-[8%] pr-0 text-[16px] font-light">
//             Sign up for your account with your personal details
//           </p>
//         </div>
//       </div>
//       <div className="flex gap-4">
//         <Image
//           src={invest}
//           alt=""
//           className="object-cover w-[55px] h-[55px]"
//         />
//         <div className="md:w-[250px] w-[350px]">
//           <h1 className="text-[20px] font-bold mb-1">Invest</h1>
//           <p className="lg:pr-[13%] md:pr-[8%] pr-0 text-[16px] font-light">
//             Set up your first investment plan via bank transfer (USSD and
//             Internet Banking)
//           </p>
//         </div>
//       </div>
//       <div className="flex gap-4">
//         <Image
//           src={profit}
//           alt=""
//           className="object-cover w-[55px] h-[55px]"
//         />

//         <div className="md:w-[250px] w-[350px]">
//           <h1 className="text-[20px] font-bold mb-1">Make Profit</h1>
//           <p className="lg:pr-[13%] md:pr-[8%] pr-0 text-[16px] font-light">
//             Get your money working for you and earn great returns
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
