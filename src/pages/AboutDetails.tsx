// import { useParams } from "react-router-dom";
import { Linkedin, Facebook, Twitter, Mail, User2Icon } from "lucide-react";
import Footer from "../components/Footer";
import { useUserStore } from "../store/userStore";

export default function TeamMemberProfile() {
  //   const { id } = useParams<{ id: string }>();
  const { teamMember } = useUserStore();

  if (!teamMember) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 rounded-md">
        <h1 className="text-3xl font-bold text-purple-900">
          Team Member Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          The team member you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-md">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="bg-purple-900 text-white rounded-t-lg p-6 shadow-lg">
            <h1 className="text-3xl font-bold"> {teamMember?.name} Profile</h1>
            <p className="mt-2 text-purple-200">
              Get to know our amazing team member
            </p>
          </div>
          {/* Profile Content */}
          <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Image Column */}
              <div className="md:w-1/3 p-6 flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-900 flex items-center justify-center">
                  {teamMember?.photo !== "" ? (
                    <img
                      src={teamMember?.photo}
                      alt={teamMember?.name}
                      className="object-cover"
                    />
                  ) : (
                    <User2Icon size={250} className="object-cover" />
                  )}
                </div>
                <div className="mt-6 w-full">
                  <h3 className="font-medium text-purple-900 text-center mb-4">
                    Connect with {teamMember.name.split(",")[0]}
                  </h3>
                  {/* Social Media Links with Lucide Icons */}
                  <div className="flex justify-center space-x-4 mt-4">
                    <a
                      href={`mailto:${teamMember.email}`}
                      className="p-3 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-full transition-all duration-200"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                    <a
                      href={`https://${teamMember.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-full transition-all duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={`https://${teamMember.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-full transition-all duration-200"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href={`https://${teamMember.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-full transition-all duration-200"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
              {/* Content Column */}
              <div className="md:w-2/3 p-6">
                <h2 className="text-2xl font-bold text-purple-900">
                  {teamMember.name}
                </h2>
                <div className="inline-block bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium mt-2">
                  {teamMember.meta_title}
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-purple-900 border-b-2 border-purple-200 pb-2">
                    Biography
                  </h3>
                  <p className="mt-3 text-gray-700 leading-[34px] ">
                    {teamMember.detail}
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-purple-900 border-b-2 border-purple-200 pb-2">
                    {/* Key Skills */} Certification
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {teamMember.degree
                      .split(",")
                      .map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="bg-purple-50 text-purple-900 border border-purple-300 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  {/* <button className="bg-purple-900 hover:bg-purple-800 text-white px-6 py-2 rounded shadow transition duration-200">
                    Contact {teamMember.name.split(" ")[0]}
                  </button> */}
                  <button
                    className="ml-4 border border-purple-900 text-purple-900 hover:bg-purple-50 px-6 py-2 rounded shadow transition duration-200"
                    onClick={() => window.history.back()}
                  >
                    Back to Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
