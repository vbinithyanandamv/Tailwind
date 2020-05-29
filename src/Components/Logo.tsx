import * as React from "react";

interface ILogoProps {
  // placeholder for the types
}

const Logo = (props: ILogoProps) => {
  return (
    <div className="flex-shrink-0 flex items-center px-4">
      <img className="h-8 w-auto" src="/img/logos/workflow-logo-on-brand.svg" alt="Workflow" />
    </div>
  );
};

export default Logo;
