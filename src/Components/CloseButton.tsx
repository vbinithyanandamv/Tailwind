import * as React from "react";

interface ICloseButtonProps {
  // placeholder for the types
}

const CloseButton = (props: ICloseButtonProps) => {
  return (<div className="absolute top-0 right-0 -mr-14 p-1">
    <button className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600" aria-label="Close sidebar">
      <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>);
};

export default CloseButton;