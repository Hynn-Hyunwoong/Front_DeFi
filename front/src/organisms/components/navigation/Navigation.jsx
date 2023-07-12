import React, { useState } from 'react';

const category = [
  { name: '내자산', path: '/assets' },
  { name: '스왑', path: '/exchange/swap' },
  { name: '예치', path: '/exchange/pool' },
  {
    name: 'ASD거버넌스',
    path: '#',
    subMenu: [
      { name: '스테이킹+풀 투표', path: '/staking' },
      { name: '의제 투표', path: '/governance/' },
    ],
  },
  { name: 'Drops', disabled: true, path: '/drops' },
  { name: '대시보드', path: '/dashboard' },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f7f8fa] text-gray-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center sm:justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 border-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className={classNames(isOpen ? 'hidden' : 'block', 'h-6 w-6')}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className={classNames(isOpen ? 'block' : 'hidden', 'h-6 w-6')}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {category.map((item, index) => (
                <div
                  key={item.name}
                  onMouseEnter={() => setActiveMenu(item.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                  style={{ position: 'relative' }}
                >
                  <a
                    href={item.path}
                    className={classNames(
                      item.name === activeMenu
                        ? 'bg-gray-100 text-gray-800'
                        : 'text-gray-600 hover:bg-gray-200',
                      'no-underline rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                  {item.name === activeMenu && item.subMenu && (
                    <div className="absolute left-0 mt-2 bg-white text-black border border-gray-200">
                      {item.subMenu.map((subItem, subIndex) => (
                        <a
                          key={subItem.name}
                          href={subItem.path}
                          className="block no-underline text-gray-600 px-4 py-2 text-sm hover:bg-gray-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            className={classNames(
              isOpen ? 'block' : 'hidden',
              'sm:hidden fixed inset-0 flex items-center justify-center z-50',
            )}
          >
            <div
              className="bg-black opacity-50 inset-0 fixed"
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="bg-white rounded-md shadow-md p-4 max-w-xs m-auto relative z-10">
              {category.map((item, index) => (
                <div key={item.name}>
                  <a
                    href={item.path}
                    className="no-underline block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-200"
                  >
                    {item.name}
                  </a>
                  {item.subMenu && (
                    <div className="pt-2 pb-4 space-y-1">
                      {item.subMenu.map((subItem, subIndex) => (
                        <a
                          key={subItem.name}
                          href={subItem.path}
                          className="block no-underline text-gray-600 pl-7 pr-4 py-2 text-base font-medium hover:bg-gray-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
