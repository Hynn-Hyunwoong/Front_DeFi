import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const category = [
    { label: "내자산", path: "/assets" },
    { label: "스왑", path: "/exchange/swap" },
    { label: "예치", path: "/exchange/pool" },
    {
      label: "ASD거버넌스",
      subMenu: [
        { label: "스테이킹+풀 투표", path: "/staking" },
        { label: "의제 투표", path: "/governance/" },
      ],
    },
    { label: "Drops", disabled: true, path: "/drops" },
    { label: "대시보드", path: "/dashboard" },
  ];

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img className="h-8 w-auto sm:h-10" src="/logo.png" alt="" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button onClick={handleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              {isOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {category.map((item, idx) => (
              <a key={idx} href={item.path} className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/logo.png" alt="" />
                </div>
                <div className="-mr-2">
                  <button onClick={handleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {category.map((item, idx) => (
                  <a key={idx} href={item.path} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};
