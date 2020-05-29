import * as React from "react";
import SideLayoutMenu from './SideLayoutMenu';
import SideLayoutHeader from './SideLayoutHeader';
import SideLayoutMain from './SideLayoutMain';
import CloseButton from './CloseButton';
import Logo from './Logo';

function App() {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="md:hidden">
        <div className="fixed inset-0 flex z-40">
          <div className="fixed inset-0">
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-800">
            <CloseButton></CloseButton>
            <Logo></Logo>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <SideLayoutMenu></SideLayoutMenu>
            </div>
          </div>
          <div className="flex-shrink-0 w-14">
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-indigo-800 pt-5 pb-4">
          <Logo></Logo>
          <div className="mt-5 h-0 flex-1 flex flex-col overflow-y-auto">
            <SideLayoutMenu customClass={"flex-1 px-2 bg-indigo-800"}></SideLayoutMenu>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <SideLayoutHeader ></SideLayoutHeader>
        <SideLayoutMain>

        </SideLayoutMain>
      </div>
    </div>
  );
}

export default App;
