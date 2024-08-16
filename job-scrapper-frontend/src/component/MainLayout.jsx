import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Outlet } from "react-router-dom";
import Filters from "./Filters"
import { useState, useEffect } from "react";
import axiosClient from "../axios-client.js";
import logo from '../job-scraper-big.png';

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [filters, setFilters] = useState({})
  const [city, setCity] = useState([])

  useEffect(()=>{
    axiosClient.get(`/offers/city`)
        .then(({data}) => {
            setCity(data)
        })  
},[])

  return (
    <>
    <header className="relative isolate z-10 bg-white">
        
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <a href="/" className="-m-1.5 p-1.5">
            
            <img alt="" src={logo} className="h-16 rounded-full" />
          </a>
        <div className="flex lg:flex-1">
      
        </div>
        
        <div className="flex lg:hidden">
            
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Filter
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
               
                  <div className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                    <Filters workplace={city} filterWp={(cty)=> setFilters({...filters,displayWorkplace: cty })}/>
                  </div>
             
              </div>
              <div className='flex justify-center'>
                <a 
                href={`/filter/${filters.displayWorkplace}`}
                className="rounded-md bg-indigo-600 px-8 py-2.5 mb-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Search
                </a>
                </div>
            </PopoverPanel>
          </Popover>

    
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a  className="text-sm font-semibold leading-6 text-gray-300 cursor-not-allowed">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Filter
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                  <div className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                    <Filters workplace={city}/>
                  </div>
                  <div className='flex justify-center'>
                <a 
                href={`/filter/${filters.displayWorkplace}`}
                className="rounded-md bg-indigo-600 px-8 py-2.5 mb-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Search
                </a>
                </div>
                  </DisclosurePanel>
                </Disclosure>
             
              </div>
              <div className="py-6">
                <a
               
                  
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-not-allowed"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
        <main>
            <h1 className='flex justify-center text-blue-600'>At the moment work only offers for junors and there is one filter option </h1>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"> <Outlet/></div>
  </main>

  </>
  )
}