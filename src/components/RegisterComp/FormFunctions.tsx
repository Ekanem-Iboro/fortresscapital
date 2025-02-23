import { useState } from "react";

const usePageTransition = (
  totalCorporatePages: number,
  totalRegularPages: number
) => {
  const [onPageChange, setOnPageChange] = useState<number>(1);
  const [ifYes, setIfYes] = useState(false);
  const [ifCoperate, setIfCoperate] = useState(false);

  const totalPages = ifCoperate ? totalCorporatePages : totalRegularPages;

  const pageVariants = {
    initial: { opacity: 0, x: 300 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -300 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { width: `${(onPageChange / totalPages) * 100}%` },
  };

  const nextPage = () => {
    if (onPageChange < totalPages) {
      setOnPageChange(onPageChange + 1);
    }
  };

  const prevPage = () => {
    if (onPageChange > 1) {
      setOnPageChange(onPageChange - 1);
    }
  };

  return {
    onPageChange,
    setOnPageChange,
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
  };
};

export default usePageTransition;
