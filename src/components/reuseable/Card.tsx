/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { User2Icon } from "lucide-react";
import { useUserStore } from "../../store/userStore";

export function CardComp({ item }: any) {
  const { setTeamMembers } = useUserStore();

  // set team members to store for back button to work on team member profile page.
  return (
    <div className=" w-full ">
      <Card className=" w-full ">
        <CardHeader>
          {/* <CardTitle>{member.position}</CardTitle> */}
          {/* <CardDescription>{member.name}</CardDescription> */}
        </CardHeader>
        <CardContent>
          <Link
            to={item.designation_id === "7" ? "" : `/about/${item?.name}`}
            onClick={() => setTeamMembers(item)}
          >
            <div className="flex flex-col justify-center items-center">
              <div className=" flex border-b border-slate-300  p-4 overflow-hidden  w-full justify-center items-center h-[200px]">
                <div className="flex justify-center items-center w-[180px] h-[180px] overflow-hidden rounded-full border-2 border-slate-300">
                  {item?.photo !== "" ? (
                    <img
                      src={item?.photo}
                      alt={item?.name}
                      className="object-cover mx-auto"
                    />
                  ) : (
                    <User2Icon size={250} className="object-cover" />
                  )}
                </div>
              </div>
              {/* <div className="border-b border-slate-300  p-4 overflow-hidden shadow-xl">
                <User2Icon size={250} className="object-cover" />
              </div> */}
              <div className="h-[150px] flex flex-col items-center justify-center pb-6 px-4">
                <p className="mt-1   text-[18px] text-[#f49d3f] text-center capitalize">
                  {item?.name}
                </p>
                <p className=" text-[18px] text-center mt-3 capitalize">
                  {item?.meta_title}
                </p>
              </div>
            </div>
          </Link>
        </CardContent>
        {/* <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter> */}
      </Card>
    </div>
  );
}
