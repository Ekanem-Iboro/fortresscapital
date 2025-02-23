"use client";
// import PassPaportUplod from "@/components/passportUploader";
import { motion, AnimatePresence } from "framer-motion";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Trash2, Camera } from "lucide-react";
import usePostRequest from "../../api/post/postFormData";
import FormField from "../../components/reuseable/FormField";
import SelectField from "../../components/reuseable/SelectField";
import usePageTransition from "./FormFunctions";
import FileInput from "../reuseable/FormInputs/FileInput";
import { createCorporateAccountSchema } from "../../api/type";
import useWebcam from "../reuseable/FormInputs/WebCam";
import LoadingOverlay from "../OverlayLoader";

type CreateAccountSchemaType = z.infer<typeof createCorporateAccountSchema>;

const CorporateAccountForm = () => {
  const [inputValue] = useState("corporate"); // Default value is "corporate"
  // const [checkedItems, setCheckedItems] = useState({
  //   equitytrading: false,
  //   portfoliomanagement: false,
  //   investmentadvisory: false,
  //   fixedincome: false,
  // });
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, checked } = event.target;
  //   setCheckedItems((prev) => ({
  //     ...prev,
  //     [name.split(".")[1]]: checked, // Important: use the key after the dot
  //   }));
  // };
  const {
    onPageChange,
    ifYes,
    setIfYes,
    ifCoperate,
    setIfCoperate,
    totalPages,
    pageVariants,
    pageTransition,
    progressVariants,
    nextPage,
    prevPage,
  } = usePageTransition(8, 7);

  const {
    capturedImage,

    videoRef,
    startCamera,
    stopCamera,
    captureImage,
    handleFileChange,
    isStreamActive,
    setCapturedImage,
    setFileList,
    fileList,
  } = useWebcam(); // Use the custom hook
  //
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createCorporateAccountSchema),
    mode: "onSubmit",
    defaultValues: {
      personalDetails: {
        passportimg: fileList && fileList[0],
        firstname: "",
        surname: "",
        maiden: "",
        othernames: "",
        title: "",
        date: "",
        gender: "",
        accounttype: "corporate",
        maritalstatus: "",
        nationality: "",
        dateofbirth: "",
      },
      contactDetails: {
        contactaddress: "",
        permanentaddress: "",
        mailingaddress: "",
        localgovtarea: "",
        occupation: "",
        employernameaddress: "",
        business: "",
        email: "",
        phone: "",
      },
      bankAccountDetails: {
        accountname: "",
        accountnumber: "",
        bankaccounttype: "",
        banknameaddress: "",
        sortcode: "",
        bvn: "",
        dateopened: "",
      },
      otherInformation: {
        kinname: "",
        relationshipwithnextofkin: "",
        kinaddress: "",
        tel: "",
        signature: null, // Default for file upload
        documents: null,
        mandate: "",
      },
      investmentDetails: {
        investmentamount: "",
      },
      serviceRequired: {
        equitytrading: "",
        portfoliomanagement: "",
        investmentadvisory: "",
        fixedincome: "",
      },
      politicallyExposed: {
        ifExposed: "",
        ifyesdetails: "",
        // uploadpepsignature: null, // Default for file upload
        // pepdate: "",
      },
      corporateAccount: [
        {
          names: "",
          signature: null, // Default for file upload
          designation: "",
          category: "",
        },
      ],
    },
  });
  const { mutate, isPending } = usePostRequest();

  const onSubmit = (data: CreateAccountSchemaType) => {
    // Send the FormData:

    const formData = new FormData();

    if ((data.corporateAccount ?? []).length > 0) {
      (data.corporateAccount ?? []).forEach((signatory) => {
        if (signatory.signature) {
          formData.append(`signatory[]`, signatory.signature[0]); // Add `[]` to key
        }
      });
    }

    if (data.personalDetails.passportimg) {
      formData.append("passportimg", data.personalDetails.passportimg[0]);
    }

    // Add signature if exists
    if (data.otherInformation.signature) {
      formData.append("signature", data.otherInformation.signature[0]);
    }

    // Add documents if exists
    if (data.otherInformation.documents) {
      formData.append("documents", data.otherInformation.documents[0]);
    }

    // Convert JSON data into a form field
    formData.append(
      "personalDetails",
      JSON.stringify({ ...data.personalDetails, passportimg: undefined })
    );
    formData.append("contactDetails", JSON.stringify(data.contactDetails));
    formData.append(
      "bankAccountDetails",
      JSON.stringify(data.bankAccountDetails)
    );
    formData.append(
      "otherInformation",
      JSON.stringify({
        ...data.otherInformation,
        documents: undefined,
        signature: undefined,
      })
    );
    formData.append(
      "investmentDetails",
      JSON.stringify(data.investmentDetails)
    );
    formData.append("serviceRequired", JSON.stringify(data.serviceRequired));
    formData.append(
      "politicallyExposed",
      JSON.stringify(data.politicallyExposed)
    );

    const updatedCorporateAccounts = data.corporateAccount
      ? data.corporateAccount.map((account) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { signature, ...rest } = account;
          return { ...rest };
        })
      : [];

    formData.append(
      "corporateAccount",
      JSON.stringify(updatedCorporateAccounts)
    );

    mutate({
      url: "create_new_account.php",
      payload: formData,
    });
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "corporateAccount",
  });

  const addSignatory = () => {
    append({ names: "", signature: null, designation: "", category: "" });
  };
  //
  useEffect(() => {
    if (inputValue === "corporate") {
      setIfCoperate(true);
    }
  }, [inputValue, setIfCoperate]);
  //
  return (
    <div className="w-full mt-14 bg-white">
      {isPending && <LoadingOverlay />}

      {/* Progress Bar */}
      <div className="bg-gray-200 h-2 w-full relative ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={progressVariants}
          className="bg-purple-600 h-full absolute top-0 left-0 rounded-lg"
        />
      </div>

      <form
        className="m-auto  w-full my-7 md:backdrop:px-8  md:mt-16 mt-9"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="md:text-[32px] text-[22px] text-[#692371] font-[700]">
          Account Opening / KYC Form
        </p>
        <div className=" relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={onPageChange}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="space-y-6"
            >
              {Object.keys(errors).length > 0 && (
                <div className="text-red-600 mb-4 bg-red-200 p-3 rounded-md my-3">
                  Please fix the form errors before proceeding.
                </div>
              )}

              {onPageChange === 1 && (
                <div>
                  {/* personnal details */}
                  <p className="md:text-[24px] text-[18px] text-[#692371] font-[600] mt-4 uppercase mb-[2rem]">
                    <span>1. </span> Personal Details
                  </p>
                  {/*  */}
                  {/* File Input */}
                  <div className="relative w-fit">
                    <label className="md:w-[350px] md:h-[400] w-full cursor-pointer ">
                      <div className="flex items-center justify-center md:w-[350px] w-full h-12 px-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                        <Camera className="w-5 h-5 mr-2 text-gray-500" />
                        <span className="text-sm text-gray-500">
                          Choose image or capture from webcam
                        </span>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        {...register("personalDetails.passportimg", {
                          onChange: handleFileChange,
                        })}
                      />
                    </label>

                    {/* Webcam Preview */}
                    {!capturedImage && (
                      <div className="relative md:w-[350px]  md:h-[400] aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <video
                          ref={videoRef}
                          autoPlay
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Captured Image Preview */}
                    {capturedImage && (
                      <div className="md:w-[350px] md:h-[400] w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={capturedImage}
                          alt="Captured"
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Controls */}
                    <div className="flex gap-4 absolute bottom-0 right-2">
                      {!isStreamActive && !capturedImage && (
                        <button
                          onClick={startCamera}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                          title="Start Camera"
                        >
                          <Camera />
                        </button>
                      )}
                      {isStreamActive && (
                        <button
                          onClick={captureImage}
                          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                          title="Capture"
                        >
                          <Camera />
                        </button>
                      )}
                      {(isStreamActive || capturedImage) && (
                        <button
                          onClick={() => {
                            stopCamera();
                            setCapturedImage(null);
                            setFileList([]);
                          }}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                          title="Reset"
                        >
                          Reset
                        </button>
                      )}
                    </div>
                  </div>
                  {/*  */}
                  <div className="lg:grid block items-center grid-cols-3 mt-2 gap-4">
                    <FormField
                      label="Account Type:  Corporate"
                      name="personalDetails.accounttype"
                      value={inputValue}
                      register={register}
                      type="hidden"
                    />

                    <div className=" gap-4 ">
                      <FormField
                        label="Title:"
                        name="personalDetails.title"
                        error={errors.personalDetails?.title}
                        placeholder="Mr. , Mrs, Miss e.t.c..."
                        register={register}
                      />
                    </div>
                    <div>
                      <div className=" items-center gap-4">
                        <FormField
                          label="Date:"
                          name="personalDetails.date"
                          placeholder={"YYYY-MM-DD"}
                          error={errors.personalDetails?.date}
                          register={register}
                          type="date"
                        />
                      </div>{" "}
                    </div>
                  </div>

                  <div className=" mb-2">
                    {/* Surname Field */}
                    <FormField
                      label="Surname:"
                      name="personalDetails.surname"
                      register={register}
                      error={errors.personalDetails?.surname}
                      placeholder="Enter your surname"
                    />
                  </div>

                  <div className="lg:grid block items-center grid-cols-2 gap-5 mb-2">
                    {/* Surname Field */}
                    <FormField
                      label="First Name:"
                      name="personalDetails.firstname"
                      register={register}
                      error={errors.personalDetails?.firstname}
                      placeholder="Enter your firstname"
                    />

                    {/* Maiden Name Field */}
                    <FormField
                      label="Maiden Name:"
                      name="personalDetails.maiden"
                      register={register}
                      error={errors.personalDetails?.maiden}
                      placeholder="Esther ..."
                    />
                  </div>
                  {/*  */}
                  <div className="my-3 lg:my-0  gap-3">
                    <FormField
                      label="Other Names:"
                      name="personalDetails.othernames"
                      register={register}
                      error={errors.personalDetails?.othernames}
                      placeholder="Enter other names"
                    />
                  </div>
                  {/*  */}
                  <div className="lg:flex block items-center gap-10  my-2">
                    {/* Gender Field */}
                    <SelectField
                      label="Gender"
                      name="personalDetails.gender"
                      options={[
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                      ]}
                      register={register}
                      error={errors.personalDetails?.gender}
                    />

                    <FormField
                      label="Date Of Birth"
                      name="personalDetails.dateofbirth"
                      error={errors.personalDetails?.dateofbirth}
                      placeholder={"YYYY-MM-DD"}
                      register={register}
                      type="date"
                    />
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="lg:grid block items-center grid-cols-2 gap-5 my-3 lg:my-0 ">
                    {/* Marital Status Field */}
                    <FormField
                      label="Marital Status:"
                      name="personalDetails.maritalstatus"
                      register={register}
                      error={errors.personalDetails?.maritalstatus}
                      placeholder="Enter your marital status"
                    />

                    {/* Nationality Field */}
                    <FormField
                      label="Nationality:"
                      name="personalDetails.nationality"
                      register={register}
                      error={errors.personalDetails?.nationality}
                      placeholder="Enter your nationality"
                    />
                  </div>
                </div>
              )}
              {/* Contact Details */}
              {onPageChange === 2 && (
                <div className="mt-10">
                  <p className="md:text-[24px] text-[18px] text-[#692371] font-[600] mb-4 uppercase">
                    <span>2. </span> Contact Details
                  </p>
                  <div>
                    {/* Contact Address Field */}
                    <FormField
                      label="Contact Address:"
                      name="contactDetails.contactaddress"
                      register={register}
                      error={errors.contactDetails?.contactaddress}
                      placeholder="Enter your contact address"
                    />

                    {/* Permanent Address Field */}
                    <FormField
                      label="Permanent Address:"
                      name="contactDetails.permanentaddress"
                      register={register}
                      error={errors.contactDetails?.permanentaddress}
                      placeholder="Enter your permanent address"
                    />

                    {/* Mailing Address Field */}
                    <FormField
                      label="Mailing Address:"
                      name="contactDetails.mailingaddress"
                      register={register}
                      error={errors.contactDetails?.mailingaddress}
                      placeholder="Enter your mailing address"
                    />

                    {/* Local Govt. Area Field */}
                    <FormField
                      label="Local Govt. Area:"
                      name="contactDetails.localgovtarea"
                      register={register}
                      error={errors.contactDetails?.localgovtarea}
                      placeholder="Enter your local government area"
                    />

                    {/* Occupation Field */}
                    <FormField
                      label="Occupation:"
                      name="contactDetails.occupation"
                      register={register}
                      error={errors.contactDetails?.occupation}
                      placeholder="Enter your occupation"
                    />

                    {/* Employer Name / Address Field */}
                    <FormField
                      label="Employer Name / Address:"
                      name="contactDetails.employernameaddress"
                      register={register}
                      error={errors.contactDetails?.employernameaddress}
                      placeholder="Enter your employer name/address"
                    />

                    {/* Business Type Field */}
                    <FormField
                      label="If Business, Type of Business:"
                      name="contactDetails.business"
                      register={register}
                      error={errors.contactDetails?.business}
                      placeholder="Enter type of business"
                    />

                    {/* Telephone/Fax Field */}
                    <FormField
                      label="Telephone number/ Fax:"
                      name="contactDetails.phone"
                      register={register}
                      error={errors.contactDetails?.phone}
                      placeholder="Enter your telephone or fax number"
                      type="tel"
                      max={15}
                      min={7}
                    />

                    {/* Email Field */}
                    <FormField
                      label="Email:"
                      name="contactDetails.email"
                      register={register}
                      error={errors.contactDetails?.email}
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                </div>
              )}
              {/*  */}
              {/*Account Details */}
              {onPageChange == 3 && (
                <div className="mt-10">
                  <p className="md:text-[24px] text-[18px] text-[#692371] font-[600] mb-4 uppercase">
                    <span>3. </span> Account Details
                  </p>
                  <div>
                    {/* Account Name Field */}
                    <FormField
                      label="Account Name:"
                      name="bankAccountDetails.accountname"
                      register={register}
                      error={errors.bankAccountDetails?.accountname}
                      placeholder="Enter your account name"
                      type="text"
                    />
                    <div className="md:grid grid-cols-2 block gap-x-4 ">
                      {/* Account Number Field */}
                      <FormField
                        label="Account Number:"
                        name="bankAccountDetails.accountnumber"
                        register={register}
                        error={errors.bankAccountDetails?.accountnumber}
                        placeholder="Enter your account number"
                        type="number"
                        max={10}
                      />

                      {/* Account Type Field */}
                      <FormField
                        label="Account Type:"
                        name="bankAccountDetails.bankaccounttype"
                        register={register}
                        error={errors.bankAccountDetails?.bankaccounttype}
                        placeholder="Enter your account type"
                      />
                    </div>
                    <div>
                      {/* Bank Name / Address Field */}
                      <FormField
                        label="Bank Name / Address:"
                        name="bankAccountDetails.banknameaddress"
                        register={register}
                        error={errors.bankAccountDetails?.banknameaddress}
                        placeholder="Enter your bank name and address"
                      />
                    </div>
                    <div className="md:grid grid-cols-2 block gap-x-4 ">
                      {/* Sort Code Field */}
                      <FormField
                        label="Sort Code:"
                        name="bankAccountDetails.sortcode"
                        register={register}
                        error={errors.bankAccountDetails?.sortcode}
                        placeholder="Enter your sort code"
                        type="text"
                      />

                      <FormField
                        label="B.V.N. No:"
                        name="bankAccountDetails.bvn"
                        register={register}
                        error={errors.bankAccountDetails?.bvn}
                        placeholder="Enter your B.V.N. number"
                        max={11}
                        type="number"
                      />
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="">
                      <FormField
                        label="  Date Opened:"
                        name="bankAccountDetails.dateopened"
                        register={register}
                        error={errors.bankAccountDetails?.dateopened}
                        placeholder={"YYYY-MM-DD"}
                        type="date"
                      />
                    </div>
                    {/*  */}
                  </div>
                </div>
              )}
              {/*  */}
              {/*other information */}
              {onPageChange === 4 && (
                <div className="mt-10">
                  <p className="md:text-[24px] text-[18px] text-[#692371] font-[600] mb-4 uppercase">
                    <span>4. </span> Other Information
                  </p>
                  <p className="md:text-[18px] text-[18px] text-[#692371] font-[600] mb-4 uppercase">
                    Next of Kin
                  </p>
                  <div>
                    {/*  */}
                    <FormField
                      label="Name:"
                      name="otherInformation.kinname"
                      register={register}
                      error={errors.otherInformation?.kinname}
                      placeholder="Enter name"
                    />
                    {/*  */}
                    <div className="md:grid grid-cols-2 block gap-x-4 ">
                      <FormField
                        label="Relationship with Next of Kin:"
                        name="otherInformation.relationshipwithnextofkin"
                        error={
                          errors.otherInformation?.relationshipwithnextofkin
                        }
                        register={register}
                      />

                      <FormField
                        label="Address:"
                        name="otherInformation.kinaddress"
                        register={register}
                        error={errors.otherInformation?.kinaddress}
                        placeholder="Enter address"
                      />
                    </div>
                    {/*  */}
                    <FormField
                      label="Tel:"
                      name="otherInformation.tel"
                      register={register}
                      error={errors.otherInformation?.tel}
                      placeholder="Enter phone number"
                      type="tel"
                      min={7}
                      max={15}
                    />

                    {/*  */}
                    <div className=" ">
                      <FileInput
                        label="Signature:"
                        name="otherInformation.signature"
                        error={errors.otherInformation?.signature}
                        register={register}
                      />
                    </div>
                    {/*  */}
                    <div className=" ">
                      <FileInput
                        label="Documents: ( Please scan all documents in a pdf file )"
                        name="otherInformation.documents"
                        error={errors.otherInformation?.documents}
                        register={register}
                      />
                    </div>
                    {/*  */}
                    <FormField
                      label="Mandate:"
                      name="otherInformation.mandate"
                      register={register}
                      type="text"
                      error={errors.otherInformation?.mandate}
                      placeholder="A and B , A and C to sign"
                    />
                  </div>
                </div>
              )}
              {/*  */}
              {/*Investment */}
              {onPageChange === 5 && (
                <div className="mt-10">
                  <p className="md:text-[24px] text-[18px] text-[#692371] font-[600] mb-4 uppercase">
                    <span>5. </span>Investment Details
                  </p>
                  <FormField
                    label="Initial Investment Amount:"
                    name="investmentDetails.investmentamount"
                    type="number"
                    register={register}
                    error={errors.investmentDetails?.investmentamount}
                  />
                </div>
              )}
              {/*  */}
              {/*Service Required */}
              {onPageChange === 6 && (
                <div className="mt-10">
                  <p className="md:text-[24px] text-[18px] text-[#692371] font-[600] mb-4 uppercase">
                    <span>6. </span>Service Required
                  </p>
                  <div className="my-4">
                    <SelectField
                      label="Equity Trading / Dealing Service"
                      name="serviceRequired.equitytrading"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                      ]}
                      register={register}
                    />
                  </div>
                  <div className="my-4">
                    <SelectField
                      label="Portfolio Management Service"
                      name="serviceRequired.portfoliomanagement"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                      ]}
                      register={register}
                    />
                  </div>
                  <div className="my-4">
                    <SelectField
                      label="Investment Advisory Service"
                      name="serviceRequired.investmentadvisory"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                      ]}
                      register={register}
                    />
                  </div>
                  <div className="my-4">
                    <SelectField
                      label="Fixed Income"
                      name="serviceRequired.fixedincome"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                      ]}
                      register={register}
                    />
                  </div>
                  {/* <CustomCheckbox
                    id="equity_trading"
                    label="Equity Trading / Dealing Service"
                    name="serviceRequired.equitytrading"
                    checked={checkedItems.equitytrading}
                    onChange={handleChange}
                  /> */}
                  {/* <CustomCheckbox
                    id="portfolio_management"
                    label="Portfolio Management Service"
                    name="serviceRequired.portfoliomanagement"
                    checked={checkedItems.portfoliomanagement}
                    onChange={handleChange}
                  /> */}
                  {/* <CustomCheckbox
                    id="investment_advisory"
                    label="Investment Advisory Service"
                    name="serviceRequired.investmentadvisory"
                    checked={checkedItems.investmentadvisory}
                    onChange={handleChange}
                  /> */}
                  {/* <CustomCheckbox
                    id="fixed_income"
                    label="Fixed Income"
                    name="serviceRequired.fixedincome"
                    checked={checkedItems.fixedincome}
                    onChange={handleChange}
                  /> */}
                </div>
              )}
              {/*  */}
              {/* Indicate If You Are A Politically Exposed
            Person (PEP) Or Affiliate To A PEP? */}
              {onPageChange === 7 && (
                <div className="mt-10">
                  <p className="md:text-[24px] text-[18px] text-[#692371] font-[600] mb-4 uppercase">
                    <span>7. </span>Please Indicate If You Are A Politically
                    Exposed Person (PEP) Or Affiliate To A PEP?
                  </p>
                  <SelectField
                    label="Politically Exposed:"
                    name="politicallyExposed.ifExposed"
                    options={[
                      { value: "Yes", label: "Yes" },
                      { value: "No", label: "No" },
                    ]}
                    register={register}
                    error={errors.politicallyExposed?.ifExposed}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setIfYes(e.target.value === "Yes")
                    }
                  />

                  <div>
                    {/*  */}
                    {ifYes && (
                      <div className=" mt-3 gap-3">
                        <label className=" text-[18px] font-[400]">
                          If yes, Please give details:
                        </label>

                        <input
                          type="text"
                          className="mt-1 block w-full  px-3 py-2 border-b-2  border-dashed border-b-gray-500 rounded-md accent-[#692371]  shadow-sm focus:ring-[#692371] focus:border-[#692371] focus:outline-none"
                          {...register("politicallyExposed.ifyesdetails")}
                          required
                        />
                      </div>
                    )}

                    {/*  */}
                    <p className="text-neutral-600 font-[600] text-[18px] leading-[28.9px] mt-[2rem]">
                      Politically Exposed persons are persons who are or have
                      (in the past) entrusted with a prominent public function
                      (e.g Head of state or Government , Governers, Local
                      Government Chairman, Senior Politicalians Senior
                      Government Officials, Judicial or Military Officials,
                      Senior Executive of State Owned Corporations, Important
                      Political Party Officials, Members of Royal Families) both
                      in foreign counties and in Nigeria, including the family
                      members or close associates
                    </p>
                    <p className="text-neutral-600 font-[600] text-[18px] leading-[28.9px] mt-[2rem]">
                      I (We) confirm that the information provided for opening
                      an account with Fortress Capital is truem We agree to
                      terms and conditions for the operation of the account
                    </p>
                    {/*  */}
                    {/* <div className=" mt-5 ">
                      <label className=" text-[18px] font-[400] mb-1">
                        Client Signature & date:
                      </label>
                      <div className=" w-full mt-4">
                        <FileInput
                          label="Signature:"
                          name="politicallyExposed.uploadpepsignature"
                          error={errors.politicallyExposed?.uploadpepsignature}
                          register={register}
                        />

                        <FormField
                          label="Date:"
                          name="politicallyExposed.pepdate"
                          placeholder={"YYYY-MM-DD"}
                          error={errors.politicallyExposed?.pepdate}
                          register={register}
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              )}

              {/*  */}
              {onPageChange === 8 && ifCoperate && (
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <p className="md:text-[24px] text-[18px] text-[#692371] font-[600] mb-4 uppercase">
                      <span>8 </span> For Corporate Account
                    </p>
                  </div>

                  <AnimatePresence mode="popLayout">
                    {fields.map((field, index) => (
                      <motion.div
                        key={field.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="mb-8 p-6 border border-gray-200 rounded-lg"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <p className="text-[18px] font-[600] uppercase">
                            Signatory {index + 1}
                          </p>
                          {fields.length > 1 && (
                            <motion.button
                              type="button"
                              onClick={() => remove(index)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                              title="Remove Signatory"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 size={20} />
                            </motion.button>
                          )}
                        </div>

                        <div className="space-y-4">
                          <FormField
                            label="Name:"
                            placeholder="John Doe, Willy Jonathan, Andrew James etc.."
                            name={`corporateAccount.${index}.names`}
                            error={errors.corporateAccount?.[index]?.names}
                            register={register}
                          />

                          <FileInput
                            label="Signature:"
                            name={`corporateAccount.${index}.signature`}
                            error={errors.corporateAccount?.[index]?.signature}
                            register={register}
                          />

                          <FormField
                            label="Designation:"
                            name={`corporateAccount.${index}.designation`}
                            placeholder="Account Officer, Manager, Secretary etc.."
                            error={
                              errors.corporateAccount?.[index]?.designation
                            }
                            register={register}
                          />
                          <FormField
                            label="Category:"
                            name={`corporateAccount.${index}.category`}
                            placeholder="A, B, C etc..."
                            error={errors.corporateAccount?.[index]?.category}
                            register={register}
                          />
                        </div>
                      </motion.div>
                    ))}
                    <div className="w-full flex justify-end -mt-6">
                      <motion.button
                        type="button"
                        onClick={addSignatory}
                        className="flex items-center gap-2 px-4 py-2 text-white bg-[#692371] rounded-md hover:bg-[#561d5e] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Plus size={20} />
                        Add Signatory
                      </motion.button>
                    </div>
                  </AnimatePresence>
                </div>
              )}
              {/*  */}
            </motion.div>
          </AnimatePresence>
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevPage}
              disabled={onPageChange === 1}
              className="bg-purple-100 text-purple-800 px-6 py-2 rounded-lg hover:bg-purple-200 transition-colors flex items-center disabled:opacity-50"
              type="button"
            >
              <ChevronLeft className="mr-2" /> Previous
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                nextPage();
              }}
              // disabled={onPageChange === totalPages}
              className={`bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center disabled:opacity-50 ${
                onPageChange === totalPages ? "hidden" : "visible"
              }`}
              type={"button"}
              // type="button"
            >
              Next
              <ChevronRight className="ml-2" />
            </motion.button>
            {/*  */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // disabled={onPageChange === totalPages}
              className={`bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center disabled:opacity-50 ${
                onPageChange === totalPages ? "visible" : "hidden"
              }`}
              type={"submit"}
              // type="button"
            >
              Submit
              <ChevronRight className="ml-2" />
            </motion.button>
          </div>
        </div>
      </form>
      {/* </motion.div>
      </div> */}
    </div>
  );
};

export default CorporateAccountForm;
