import { z } from "zod";

// Define validation messages
const REQUIRED_ERROR = "This field is required";
const EMAIL_ERROR = "Please enter a valid email address";
const PHONE_ERROR = "Phone number must be between 7 and 15 digits";
const BVN_ERROR = "BVN must be exactly 11 digits";
const NUMBER_ERROR = "Must contain only numbers";
const DATE_ERROR = "Please enter a valid date format (YYYY-MM-DD)";

// Date string validation regex (YYYY-MM-DD format)
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

//
//
export const createIndividualAccountSchema = z.object({
  personalDetails: z.object({
    passportimg: z.any().optional(),
    firstname: z
      .string()
      .min(1, REQUIRED_ERROR)
      .regex(/^[a-zA-Z\s]*$/, "First should only contain letters"),
    surname: z
      .string()
      .min(1, REQUIRED_ERROR)
      .regex(/^[a-zA-Z\s]*$/, "Surname should only contain letters"),
    maiden: z.string().optional(),
    othernames: z.string().optional(),
    title: z.string().min(1, REQUIRED_ERROR),
    date: z.string().min(1, REQUIRED_ERROR).regex(dateRegex, DATE_ERROR),
    gender: z.string().min(1, REQUIRED_ERROR),
    accounttype: z.string().min(1, REQUIRED_ERROR),
    maritalstatus: z.string().min(1, REQUIRED_ERROR),
    nationality: z.string().min(1, REQUIRED_ERROR),
    dateofbirth: z.string().min(1, REQUIRED_ERROR).regex(dateRegex, DATE_ERROR),
  }),

  contactDetails: z.object({
    contactaddress: z
      .string()
      .min(1, REQUIRED_ERROR)
      .min(10, "Address should be at least 10 characters long"),
    permanentaddress: z
      .string()
      .min(1, REQUIRED_ERROR)
      .min(10, "Address should be at least 10 characters long"),
    mailingaddress: z.string().min(1, REQUIRED_ERROR),
    localgovtarea: z.string().min(1, REQUIRED_ERROR),
    occupation: z.string().min(1, REQUIRED_ERROR),
    employernameaddress: z.string().min(1, REQUIRED_ERROR),
    business: z.string().optional(),
    email: z.string().min(1, REQUIRED_ERROR).email(EMAIL_ERROR),
    phone: z
      .string()
      .min(7, PHONE_ERROR)
      .max(15, PHONE_ERROR)
      .regex(/^\d+$/, NUMBER_ERROR),
  }),

  bankAccountDetails: z.object({
    accountname: z
      .string()
      .min(1, REQUIRED_ERROR)
      .min(3, "Account name must be at least 3 characters"),
    accountnumber: z
      .string()
      .min(10, "Account number must be exactly 10 digits")
      .max(10, "Account number must be exactly 10 digits")
      .regex(/^\d+$/, NUMBER_ERROR),
    bankaccounttype: z.string().min(1, REQUIRED_ERROR),
    banknameaddress: z.string().min(1, REQUIRED_ERROR),
    sortcode: z.string().min(1, REQUIRED_ERROR).regex(/^\d+$/, NUMBER_ERROR),
    bvn: z.string().length(11, BVN_ERROR).regex(/^\d+$/, NUMBER_ERROR),
    dateopened: z.string().min(1, REQUIRED_ERROR).regex(dateRegex, DATE_ERROR),
  }),

  otherInformation: z.object({
    kinname: z
      .string()
      .min(1, REQUIRED_ERROR)
      .min(3, "Next of kin name must be at least 3 characters"),
    relationshipwithnextofkin: z.string().min(1, REQUIRED_ERROR),
    kinaddress: z
      .string()
      .min(1, REQUIRED_ERROR)
      .min(10, "Address should be at least 10 characters long"),
    tel: z
      .string()
      .min(7, PHONE_ERROR)
      .max(15, PHONE_ERROR)
      .regex(/^\d+$/, NUMBER_ERROR),
    signature: z.any(),
    documents: z.any(),
    mandate: z.string().optional(),
  }),
  investmentDetails: z.object({
    investmentamount: z
      .string()
      .min(1, REQUIRED_ERROR)
      .regex(/^\d+$/, "Investment amount must be a number")
      .refine(
        (val) => parseInt(val) >= 1000,
        "Investment amount must be at least 1000"
      ),
  }),

  serviceRequired: z
    .object({
      equitytrading: z.string().optional(),
      portfoliomanagement: z.string().optional(),
      investmentadvisory: z.string().optional(),
      fixedincome: z.string().optional(),
    })
    .optional(),
  politicallyExposed: z.object({
    ifExposed: z.string().min(1, REQUIRED_ERROR),
    ifyesdetails: z.string().optional(),
    // .refine((val) => {
    //   if (val === undefined) return true;
    //   return val.trim().length > 0;
    // }, "Details are required if you selected Yes"),
    // uploadpepsignature: z.any(),
    // pepdate: z.string().min(1, REQUIRED_ERROR).regex(dateRegex, DATE_ERROR),
  }),
});

//

export const createCorporateAccountSchema = z.object({
  personalDetails: z.object({
    passportimg: z.any().optional(),
    firstname: z
      .string()
      .min(1, REQUIRED_ERROR)
      .regex(/^[a-zA-Z\s]*$/, "First should only contain letters"),
    surname: z
      .string()
      .min(1, REQUIRED_ERROR)
      .regex(/^[a-zA-Z\s]*$/, "Surname should only contain letters"),
    maiden: z.string().optional(),
    othernames: z.string().optional(),
    title: z.string().min(1, REQUIRED_ERROR),
    date: z.string().min(1, REQUIRED_ERROR).regex(dateRegex, DATE_ERROR),
    gender: z.string().min(1, REQUIRED_ERROR),
    accounttype: z.string().min(1, REQUIRED_ERROR),
    maritalstatus: z.string().min(1, REQUIRED_ERROR),
    nationality: z.string().min(1, REQUIRED_ERROR),
    dateofbirth: z.string().min(1, REQUIRED_ERROR).regex(dateRegex, DATE_ERROR),
  }),

  contactDetails: z.object({
    contactaddress: z
      .string()
      .min(1, REQUIRED_ERROR)
      .min(10, "Address should be at least 10 characters long"),
    permanentaddress: z
      .string()
      .min(1, REQUIRED_ERROR)
      .min(10, "Address should be at least 10 characters long"),
    mailingaddress: z.string().min(1, REQUIRED_ERROR),
    localgovtarea: z.string().min(1, REQUIRED_ERROR),
    occupation: z.string().min(1, REQUIRED_ERROR),
    employernameaddress: z.string().min(1, REQUIRED_ERROR),
    business: z.string().optional(),
    email: z.string().min(1, REQUIRED_ERROR).email(EMAIL_ERROR),
    phone: z
      .string()
      .min(7, PHONE_ERROR)
      .max(15, PHONE_ERROR)
      .regex(/^\d+$/, NUMBER_ERROR),
  }),

  bankAccountDetails: z.object({
    accountname: z
      .string()
      .min(1, REQUIRED_ERROR)
      .min(3, "Account name must be at least 3 characters"),
    accountnumber: z
      .string()
      .min(10, "Account number must be exactly 10 digits")
      .max(10, "Account number must be exactly 10 digits")
      .regex(/^\d+$/, NUMBER_ERROR),
    bankaccounttype: z.string().min(1, REQUIRED_ERROR),
    banknameaddress: z.string().min(1, REQUIRED_ERROR),
    sortcode: z.string().min(1, REQUIRED_ERROR).regex(/^\d+$/, NUMBER_ERROR),
    bvn: z.string().length(11, BVN_ERROR).regex(/^\d+$/, NUMBER_ERROR),
    dateopened: z.string().min(1, REQUIRED_ERROR).regex(dateRegex, DATE_ERROR),
  }),

  otherInformation: z.object({
    kinname: z
      .string()
      .min(1, REQUIRED_ERROR)
      .min(3, "Next of kin name must be at least 3 characters"),
    relationshipwithnextofkin: z.string().min(1, REQUIRED_ERROR),
    kinaddress: z
      .string()
      .min(1, REQUIRED_ERROR)
      .min(10, "Address should be at least 10 characters long"),
    tel: z
      .string()
      .min(7, PHONE_ERROR)
      .max(15, PHONE_ERROR)
      .regex(/^\d+$/, NUMBER_ERROR),
    signature: z.any(),
    documents: z.any(),
    mandate: z.string().optional(),
  }),
  investmentDetails: z.object({
    investmentamount: z
      .string()
      .min(1, REQUIRED_ERROR)
      .regex(/^\d+$/, "Investment amount must be a number")
      .refine(
        (val) => parseInt(val) >= 1000,
        "Investment amount must be at least 1000"
      ),
  }),

  serviceRequired: z
    .object({
      equitytrading: z.string().optional(),
      portfoliomanagement: z.string().optional(),
      investmentadvisory: z.string().optional(),
      fixedincome: z.string().optional(),
    })
    .optional(),
  // serviceRequired: z
  //   .object({
  //     equitytrading: z.boolean().optional(),
  //     portfoliomanagement: z.boolean().optional(),
  //     investmentadvisory: z.boolean().optional(),
  //     fixedincome: z.boolean().optional(),
  //   })
  //   .optional(),
  politicallyExposed: z.object({
    ifExposed: z.string().min(1, REQUIRED_ERROR),
    ifyesdetails: z.string().optional(),
    // .refine((val) => {
    //   if (val === undefined) return true;
    //   return val.trim().length > 0;
    // }, "Details are required if you selected Yes"),
    // uploadpepsignature: z.any(),
    // pepdate: z.string().min(1, REQUIRED_ERROR).regex(dateRegex, DATE_ERROR),
  }),
  corporateAccount: z
    .array(
      z.object({
        names: z
          .string()
          .min(1, REQUIRED_ERROR)
          .min(3, "Name must be at least 3 characters"),
        signature: z.any(),
        designation: z.string().min(1, REQUIRED_ERROR),
        category: z.string().min(1, REQUIRED_ERROR),
      })
    )
    .min(1, "At least one signatory is required")
    .optional(),
});
