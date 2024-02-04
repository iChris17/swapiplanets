import React from "react";

const Pagination = ({ data, handlePrevious, handleNext }) => {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <button
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        type="button"
        disabled={!data?.previous}
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        type="button"
        disabled={!data?.next}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export { Pagination };
