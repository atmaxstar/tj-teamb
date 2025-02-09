import React from 'react'
import account from './account_circle.svg';
import { Page } from '../App';

interface Props {
    page: Page;
}

const Header = ({page}: Props) => {
  return (
    <div className='bg-gray-700 py-6 w-full relative'>
      <h1 className='text-2xl text-center text-white'>{page}</h1>
      <button className="absolute right-4 top-1">
      <img src={account} alt='account'/>
      </button>
    </div>
  )
}

export default Header