import { Plus, Trash2 } from "lucide-react";
import { useForm, useFieldArray } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const signatorySchema = z.object({
  corporateAccount: z.object({
    signatories: z
      .array(
        z.object({
          names: z.string().nonempty("Names are required"),
          // .transform((val) => val.split(",").map((name) => name.trim()))
          signature: z
            .any()
            .refine((fileList) => fileList && fileList.length > 0, {
              message: "At least one signature is required",
            }),
          designation: z.string().nonempty("Designation is required"),
          // .transform((val) => val.split(",").map((desig) => desig.trim()))
          category: z.string().nonempty("Category is required"),
        })
      )
      .min(1, "At least one signatory is required"),
  }),
});

type SignatoryFormData = z.infer<typeof signatorySchema>;

const CorporateSignatories = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignatoryFormData>({
    resolver: zodResolver(signatorySchema),
    defaultValues: {
      corporateAccount: {
        signatories: [
          {
            names: "",
            signature: undefined,
            designation: "",
            category: "",
          },
        ],
      },
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "corporateAccount.signatories",
  });

  const addSignatory = () => {
    append({
      names: "",
      signature: undefined,
      designation: "",
      category: "",
    });
  };

  const onSubmit = (data: SignatoryFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      <div className="flex items-center justify-between">
        <p className="md:text-[24px] text-[18px] text-[#692371] font-[600] mb-4 uppercase">
          <span>8 </span> For Corporate Account
        </p>
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

      {errors.corporateAccount?.signatories && (
        <p className="text-red-500 mt-2">
          {errors.corporateAccount.signatories.message}
        </p>
      )}

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
              <div>
                <label className="text-[18px] font-[400] block mb-2">
                  Names:
                </label>
                <input
                  type="text"
                  placeholder="John Doe, Willy Jonathan, Andrew James etc.."
                  className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-[#692371] focus:border-[#692371] focus:outline-none"
                  {...register(`corporateAccount.signatories.${index}.names`)}
                />
                {errors.corporateAccount?.signatories?.[index]?.names && (
                  <p className="text-red-500 mt-1">
                    {
                      errors.corporateAccount?.signatories?.[index]?.names
                        ?.message
                    }
                  </p>
                )}
              </div>

              <div>
                <label className="text-[18px] font-[400] block mb-2">
                  Signature:
                </label>
                <input
                  type="file"
                  multiple
                  className="mt-1 block w-full px-3 py-2 border border-gray-500 accent-[#692371] rounded-md shadow-sm focus:ring-[#692371] focus:border-[#692371] focus:outline-none"
                  {...register(
                    `corporateAccount.signatories.${index}.signature`
                  )}
                />
                {/* {errors.corporateAccount?.signatories?.[index]?.signature && (
                  <p className="text-red-500 mt-1">
                    {
                      errors.corporateAccount?.signatories?.[index]?.signature
                        ?.message
                    }
                  </p>
                )} */}
              </div>

              <div>
                <label className="text-[18px] font-[400] block mb-2">
                  Designation:
                </label>
                <input
                  type="text"
                  placeholder="Account Officer, Manager, Secretary etc.."
                  className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-[#692371] focus:border-[#692371] focus:outline-none"
                  {...register(
                    `corporateAccount.signatories.${index}.designation`
                  )}
                />
                {errors.corporateAccount?.signatories?.[index]?.designation && (
                  <p className="text-red-500 mt-1">
                    {
                      errors.corporateAccount?.signatories?.[index]?.designation
                        ?.message
                    }
                  </p>
                )}
              </div>

              <div>
                <label className="text-[18px] font-[400] block mb-2">
                  Category:
                </label>
                <input
                  type="text"
                  placeholder="A, B, C etc.."
                  className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-[#692371] focus:border-[#692371] focus:outline-none"
                  {...register(
                    `corporateAccount.signatories.${index}.category`
                  )}
                />
                {errors.corporateAccount?.signatories?.[index]?.category && (
                  <p className="text-red-500 mt-1">
                    {
                      errors.corporateAccount?.signatories?.[index]?.category
                        ?.message
                    }
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.button
        type="submit"
        className="w-full mt-6 px-6 py-3 text-white bg-[#692371] rounded-md hover:bg-[#561d5e] transition-colors font-semibold"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Submit Corporate Account Details
      </motion.button>
    </form>
  );
};

export default CorporateSignatories;
