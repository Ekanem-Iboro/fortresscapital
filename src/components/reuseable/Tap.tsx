"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import report from "../../assets/images/research.jpg";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { useState } from "react";

const reportData = {
  dailyreport: {
    description:
      "Clients count on the market insight of our experienced stockbrokers to help them access liquidity, maintain anonymity and minimize market impact. Our Securities Trading desk offers experienced stockbrokers Insight on a daily basis through our reports.",
    downloads: [],
  },
  weeklyreport: {
    description:
      "We implement a systematic, proactive process providing credibility with our clients, increased productivity, and peace of mind",
    downloads: [
      {
        title: "STOCK MARKET REPORT FOR MARCH 3RD, 2017",
        link: "/",
        filename: "Weekly Market Report for the Week Ended 03-03-2017.pdf",
      },
      {
        title: "STOCK MARKET REPORT FOR MARCH 3RD, 2017",
        link: "/",
        filename: "Weekly Market Report for the Week Ended 03-03-2017.pdf",
      },
    ],
  },
  monthlyreport: {
    description:
      "Our team has varied skills and experience which span across Finance, Tax, Investments, Law and Real Estate. This effectively positions our expertise.",
    downloads: [
      {
        title: "Dividends Announced So Far In 2017",
        link: "/",
        filename: "Dividends Announced So Far In March 2017.docx",
      },
      {
        title: "Dividends Announced So Far In 2017 April",
        link: "/",
        filename: "Dividends Announced So Far In April 2017.docx",
      },
      {
        title: "Dividends Announced So Far In August 2017",
        link: "/",
        filename: "Dividends Announced So Far In August 2017.docx",
      },
    ],
  },
};

export function TabsComp() {
  const [activeTab, setActiveTab] = useState<string>("dailyreport");

  const renderReportContent = (
    type: "dailyreport" | "weeklyreport" | "monthlyreport"
  ) => {
    const { description, downloads } = reportData[type];

    return (
      <Card className="shadow-lg border-2 border-slate-200 p-8">
        <CardHeader>
          <CardTitle className="text-slate-700 border-b-2 border-[#f49d3f] pb-4 capitalize p-2 mb-3">
            {type.replace("report", " Reports")}
          </CardTitle>
        </CardHeader>
        <CardContent className="lg:flex items-center gap-8">
          <div className="relative w-full lg:w-1/3 aspect-square overflow-hidden rounded-lg mb-4 lg:mb-0">
            <img
              src={report}
              alt="Report"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex-1">
            <p className="text-slate-700 text-[17px] mb-6">{description}</p>
            {downloads.length > 0 && (
              <>
                <p className="text-slate-700 text-[15px] font-bold border-b-2 border-[#f49d3f] pb-3 mb-5">
                  Download Reports
                </p>
                <ul className="space-y-3 pl-5 list-disc">
                  {downloads.map((download, index) => (
                    <li key={index} className="text-slate-700 capitalize">
                      {download.title}
                      <a
                        href={download.link}
                        className="text-blue-600 underline ml-2 hover:text-blue-800 transition-colors"
                      >
                        {download.filename}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Tabs
      defaultValue="dailyreport"
      className="md:w-[60%] w-full"
      onValueChange={setActiveTab}
    >
      <TabsList className="grid w-full grid-cols-3 gap-2 bg-gray-100 p-1 rounded-lg">
        {["dailyreport", "weeklyreport", "monthlyreport"].map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className={`
              rounded-md p-3 transition-all duration-300 capitalize
              ${
                activeTab === tab
                  ? "bg-[#f49d3f] text-white"
                  : "bg-white text-slate-700 hover:bg-gray-200"
              }
            `}
          >
            {tab.replace("report", " Reports")}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="dailyreport">
        {renderReportContent("dailyreport")}
      </TabsContent>
      <TabsContent value="weeklyreport">
        {renderReportContent("weeklyreport")}
      </TabsContent>
      <TabsContent value="monthlyreport">
        {renderReportContent("monthlyreport")}
      </TabsContent>
    </Tabs>
  );
}
