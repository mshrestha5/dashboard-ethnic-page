// import { Fragment, useState } from 'react'
// import { Listbox, Transition } from '@headlessui/react'
//  import { ChevronUpDownIcon } from '@heroicons/react/20/solid'


// const people = [
//   { name: 'Select all that apply...' },
//   { name: 'American Indian or Alaskan Native' },
//   { name: 'Asian' },
//   { name: 'Black or African American'},
//   { name: 'White' },
//   { name: 'Native Hawaiian or Other Pacific Islander' },
//   { name: 'Two or More Races' },
//   { name: 'Decline to self identify' },
// ]

// export default function Drop() {
//   const [selected, setSelected] = useState(people[0])
  
// return (
//     <div className='w-auto'>
//         <Listbox value={selected} onChange={setSelected}>
//         <div className="relative px-44">
//             <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 
//             focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
//                 <span className='block truncate'>{selected.name}</span>
//                 <span className="pointer-events-none absolute inset-y-0 right-0 
//                 flex items-center pr-2">
          
//             <ChevronUpDownIcon className="h-5 w-5 text-gray-400"  aria-hidden="true" />
//             </span> 
//                 </Listbox.Button>
//                 <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >    
//            <Listbox.Options className=" mt-1 max-h-60  overflow-auto rounded-md
//             bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 
//             sm:text-sm">
//               {people.map((person, personIdx) => (  
//                 <Listbox.Option key={personIdx}  className={({ active }) =>
//                 `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                     active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
//                   }`
//                 }
//                 value={person}>
//                     {({ selected }) => (
//                     <>
//                       <span
//                         className={`block truncate ${
//                           selected ? 'font-medium' : 'font-normal'
//                         }`}
//                       > {person.name}
//                       </span>
                     
//                       </>
//                     )}
//                 </Listbox.Option>
//               ))}
//             </Listbox.Options>
//           </Transition>   
//         </div>
//         </Listbox>
//         </div>
//               )}
