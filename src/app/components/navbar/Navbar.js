'use client';
import React from 'react';
import Image from 'next/image';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline/Bars3Icon'
import { BellIcon } from '@heroicons/react/24/outline/BellIcon'
import { XMarkIcon  } from '@heroicons/react/24/outline/XMarkIcon'

const navigation = [
  { name: 'Cursos', href: '#', current: true },
  { name: 'Contacto', href: '#', current: false },
  { name: 'Acceso', href: '#', current: false },
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (    
        <section className='bg-blue-900'>
            <div className="flex justify-end max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* Mobile menu button*/}
                
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-12 w-auto"
                    src="https://media.licdn.com/dms/image/C4D0BAQFMt84PE2XTZQ/company-logo_200_200/0/1632400265824/inco_academy_logo?e=1718236800&v=beta&t=PAO1oytugfzLjHszyA1bNkfruhK1fPSpoW_nFtVQei8"
                    alt="Inco Academy"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-blue-300 text-white' : 'text-gray-300 hover:bg-blue-500 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        style={{ backgroundColor: item.current ? '#44D8CA' : '' }} 
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
          

          
        
      )}
   



