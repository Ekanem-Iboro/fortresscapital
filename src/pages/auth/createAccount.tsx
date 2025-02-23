"use client";
import React from "react";
import { motion } from "framer-motion";

import form1 from "../../assets/images/form1.jpg";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";
import CorporateAccountForm from "../../components/RegisterComp/CorporateAccount";
import IndividualAccountForm from "../../components/RegisterComp/IndividualAccount";

const CreateAccount = () => {
  const [activeTab, setActiveTab] = React.useState("individual");

  const tabVariants = {
    inactive: {
      backgroundColor: "transparent",
      color: "#6b7280",
    },
    active: {
      backgroundColor: "#8b5cf6",
      color: "white",
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full mt-14 bg-white">
      <div className="m-auto w-full -mt-[3rem]">
        <header>
          <img
            src={form1}
            alt="Header image"
            width={1200}
            height={300}
            className="w-full h-[300px] object-cover"
          />
        </header>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex justify-center p-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white w-full rounded-2xl shadow-2xl overflow-hidden h-fit md:min-w-[50%] md:max-w-[70%] md:mt-28 mt-10"
        >
          <Tabs
            defaultValue="individual"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <div className="md:p-4 bg-gray-50">
              <TabsList className="w-full grid grid-cols-2 gap-4 mb-3  rounded-xl">
                {["individual", "corporate"].map((tab) => (
                  <motion.div
                    key={tab}
                    initial="inactive"
                    animate={activeTab === tab ? "active" : "inactive"}
                    variants={tabVariants}
                  >
                    <TabsTrigger
                      value={tab}
                      className="w-full md:text-lg text-[13px] font-semibold py-4 px-6  transition-all duration-300 hover:bg-purple-50 hover:text-purple-600 relative group"
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)} Account
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeTab === tab ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-purple-100 opacity-0 group-hover:opacity-10  transition-opacity duration-300" />
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </div>

            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="p-6"
            >
              <TabsContent value="individual" className="mt-4">
                <IndividualAccountForm />
              </TabsContent>

              <TabsContent value="corporate" className="mt-4">
                <CorporateAccountForm />
              </TabsContent>
            </motion.div>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateAccount;
