import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
  { id: 1, title: "Yes" },
  { id: 2, title: "No" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FancyRadio() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <div className="mt-4 flex space-x-4 justify-center">
        {plans.map((plan) => (
          <RadioGroup.Option
            key={plan.id}
            value={plan}
            className={({ checked, active }) =>
              classNames(
                checked
                  ? "border-transparent bg-sky-500 text-white"
                  : "border-gray-300 text-gray-900",
                active ? "border-sky-500 ring-2 ring-sky-500" : "",
                "w-32 relative flex cursor-pointer rounded-lg border p-6 shadow-sm focus:outline-none"
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="w-full text-center">
                  <span className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block text-sm font-semibold"
                    >
                      {plan.title}
                    </RadioGroup.Label>
                  </span>
                </span>
                <span
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-sky-500" : "border-transparent",
                    "pointer-events-none absolute -inset-px rounded-lg"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
