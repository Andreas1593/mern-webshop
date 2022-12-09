import { Fragment, useRef } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';
import { GiEmeraldNecklace } from 'react-icons/gi';
import { GiBigDiamondRing } from 'react-icons/gi';
import { GiCrystalEarrings } from 'react-icons/gi';
import { GiJewelCrown } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const CategoryMenu = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="text-right pl-6 z-40">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            ref={buttonRef}
            onMouseEnter={() => buttonRef.current?.click()}
            className="inline-flex w-full justify-center rounded-md px-4 py-2 text-base font-medium hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Categories
            <HiChevronDown
              className="ml-2 -mr-1 h-5 w-5 hover:text-slate-600"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute -left-10 mt-2 w-52 md:w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/category/necklaces">
                    <button
                      className={`${
                        active ? 'bg-rose-100' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <GiEmeraldNecklace
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Necklaces
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="p-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/category/rings">
                    <button
                      className={`${
                        active ? 'bg-rose-100' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <GiBigDiamondRing
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Rings
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/category/earrings">
                    <button
                      className={`${
                        active ? 'bg-rose-100' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <GiCrystalEarrings
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Earrings
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="p-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/category/other">
                    <button
                      className={`${
                        active ? 'bg-rose-100' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <GiJewelCrown
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Other
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default CategoryMenu;
