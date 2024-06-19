import React from "react";
import { FormData } from "../types/form";
import { WelcomeProps } from "../types/form";

const Welcome: React.FC<WelcomeProps> = ({ nextStep }) => {
  return (
    <div className="flex flex-col gap-2 justify-center mt-24 w-full max-w-md mx-auto bg-white border border-gray-300 rounded-md shadow-lg p-6">
      <h1 className="text-xl font-bold">Welcome!</h1>
      <p>Thanks for providing your feedback - let&apos;s go</p>
      <button
        type="button"
        onClick={nextStep}
        className="self-start mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        Next
      </button>
      <p className="text-center text-gray-300 text-sm"> Powered by ampswk</p>
      <div className="bg-gray-800 w-full h-1"></div>
    </div>
  );
};

export default Welcome;
