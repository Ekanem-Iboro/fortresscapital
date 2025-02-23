/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { User2Icon } from "lucide-react";

export function CardComp({ item }: any) {
  return (
    <div className=" w-full ">
      <Card className=" w-full ">
        <CardHeader>
          {/* <CardTitle>{member.position}</CardTitle> */}
          {/* <CardDescription>{member.name}</CardDescription> */}
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-center items-center">
            <div className="border-b border-slate-300  p-4 overflow-hidden  w-full items-center h-[300px]">
              <User2Icon className="object-cover w-full h-full" />
            </div>
            {/* <div className="border-b border-slate-300  p-4 overflow-hidden shadow-xl">
              <User2Icon size={250} className="object-cover" />
            </div> */}
            <div className="h-[200px] flex flex-col items-center justify-center">
              <p className=" text-[18px] text-center mt-10">{item?.position}</p>
              <p className="mt-1   text-[18px] text-[#f49d3f] text-center">
                {item?.name}
              </p>
            </div>
          </div>
        </CardContent>
        {/* <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter> */}
      </Card>
    </div>
  );
}
