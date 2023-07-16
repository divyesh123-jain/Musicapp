import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

const DropDown = ({ options, onChange }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    const selectedOption = options.find((person) => person[0] === option);
    const selectedOptionId = selectedOption ? selectedOption[1] : null;
    const selectedOptionName = option;
    const selected = [selectedOptionId, selectedOptionName];

    setSelected(selected);
    if (onChange) {
      onChange(selected);
    }
  };

  return (
    <div className="absolute w-[100%]">
      <Listbox value={selected} onChange={handleSelect}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full h-10 p-2 border rounded-lg cursor-default backdrop-opacity-25 bg-white/10 border-white/40">
            <span className="block truncate">
              {selected ? selected[1] : "Select Name"}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <BsChevronDown
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-black rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options?.map((person) => (
                <Listbox.Option
                  key={person[1]}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-white/10 text-gray-200" : "text-gray-200"
                    }`
                  }
                  value={person[0]}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person[0]}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          {/* <TiTick className="w-5 h-5" aria-hidden="true" /> */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default DropDown;