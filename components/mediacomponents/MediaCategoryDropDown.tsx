'use client'
import { Category } from '@/TS/categoryType'
import { useState } from 'react'
import Link from 'next/link'
import { SheetClose } from "@/components/ui/sheet"
import { ChevronDownIcon } from '@heroicons/react/24/solid'

type Props = {
  categories: Category[]
}

const MediaCategoryDropDown = ({ categories }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div className='relative'>
      <button
        onClick={() => setShow(!show)}
        className='text-xl mt-4 flex justify-between w-full'
      >
        <span>Categories</span>
        <span className={`${show && 'rotate-180'} duration-300`}>
          <ChevronDownIcon className='w-8' />
        </span>
      </button>

      {show && (
        <div className='absolute max-h-60 overflow-y-auto w-full'>
          <Link href='/all' key='all' className='flex items-center my-3 w-full'>
            <img src='/allicon.png' alt='all' 
            className='w-[70px] h-[70px] rounded-full' />
            <SheetClose className='ml-5 w-full'>
              All
            </SheetClose>
          </Link>
          {categories.map((category) => (
            <Link href={`/${category.title}`} key={category.id} className='flex items-center my-3 w-full'>
              <img src={category.image_url} alt={category.title} className='w-[70px] h-[70px] rounded-full' />
              <SheetClose className='ml-5 w-full'>
                {category.title}
              </SheetClose>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default MediaCategoryDropDown