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
    <div className="min-h-screen bg-gray-50">
      <div className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-purple-900 text-white rounded-t-lg p-4 sm:p-6 lg:p-8 shadow-lg">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              {teamMember?.name} Profile
            </h1>
            <p className="mt-2 text-sm sm:text-base text-purple-200">
              Get to know our amazing team member
            </p>
          </div>

          {/* Profile Content */}
          <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Image Column */}
              <div className="w-full lg:w-1/3 p-4 sm:p-6 flex flex-col items-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-purple-900 flex items-center justify-center">
                  {teamMember?.photo !== "" ? (
                    <img
                      src={teamMember?.photo}
                      alt={teamMember?.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User2Icon className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32" />
                  )}
                </div>

                <div className="mt-4 sm:mt-6 w-full">
                  <h3 className="text-base sm:text-lg font-medium text-purple-900 text-center mb-4">
                    Connect with {teamMember.name.split(",")[0]}
                  </h3>
                  <div className="flex justify-center flex-wrap gap-3">
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
              <div className="w-full lg:w-2/3 p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-900">
                  {teamMember.name}
                </h2>
                <div className="inline-block bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium mt-2">
                  {teamMember.meta_title}
                </div>

                <div className="mt-4 sm:mt-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-purple-900 border-b-2 border-purple-200 pb-2">
                    Biography
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                    {teamMember.detail}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-purple-900 border-b-2 border-purple-200 pb-2">
                    Certification
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {teamMember.degree
                      .split(",")
                      .map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="bg-purple-50 text-purple-900 border border-purple-300 px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                  <button
                    className="w-full sm:w-auto border border-purple-900 text-purple-900 hover:bg-purple-50 px-4 sm:px-6 py-2 rounded shadow transition duration-200"
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
