/* eslint-disable @typescript-eslint/no-explicit-any */

const FileInput = ({
  label = "Signature",
  name,
  register,
  error,
  required = false,
  className = "",
  desc = "",
  desc2 = "",
  multiple = false,
}: {
  label: string;
  name: string;
  register: any;
  error?: { message?: string };
  required?: boolean;
  desc?: string;
  desc2?: string;
  className?: string;
  multiple?: boolean;
}) => {
  // const [previews, setPreviews] = useState<{ url: string; name: string }[]>([]);

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const prevName = URL.createObjectURL(file);
  //     // setPreviews([{ url: prevName, name: file.name }]);
  //   }
  // };

  // const removeFile = (index: number) => {
  //   setPreviews((prev) => prev.filter((_, i) => i !== index));
  //   // Reset the input value to clear the files
  //   const input = document.querySelector(
  //     `input[name="${name}"]`
  //   ) as HTMLInputElement;
  //   if (input) input.value = "";
  // };

  const ErrorMessage = ({ error }: { error?: { message?: string } }) => {
    if (!error?.message) return null;
    return <p className="text-red-500 text-sm fixed z-30">{error.message}</p>;
  };

  return (
    <div className="w-full">
      <div className="">
        <div className="flex-1">
          <p className="text-lg font-normal mb-2 block">
            {label} {required && <span className="text-red-500">*</span>}
            <span className="text-gray-500 text-sm">
              {desc} {}{" "}
            </span>{" "}
            <p className="text-gray-500 text-sm my-2">{desc2}</p>
          </p>
          <label
            className={` text-gray-400 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:ring-purple-700 focus:border-purple-700 focus:outline-none ${className} `}
            id={name}
          >
            Choose your file
            <input
              id={name}
              type="file"
              desc={desc}
              desc2={desc2}
              className="hidden w-full cursor-pointer"
              multiple={multiple}
              {...register(name)}
              required={required}
              // onChange={handleFileChange}
              accept="image/*,application/pdf"
            />
          </label>
          <ErrorMessage error={error} />
        </div>
        {/* {previews.length > 0 && (
          <div className="   w-[200px] h-[120px]">
            {previews.map((preview, index) => (
              <div className="relative" key={index}>
                <Image
                  src={preview.url}
                  alt={`Preview ${index + 1}`}
                  width={120}
                  height={20}
                  className="w-[200px] h-[120px] object-cover border rounded-md  mt-4"
                />

                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  title="Remove file"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default FileInput;
