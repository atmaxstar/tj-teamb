import React from 'react'
import account from './account_circle.svg';
import { Page } from '../App';

interface Props {
    page: Page;
    setPage: React.Dispatch<React.SetStateAction<Page>>;
}

const Header = ({page, setPage}: Props) => {
  return (
    <div className='fixed bg-gray-700 py-6 w-[375px] z-10'>
      <h1 className='text-2xl text-center text-white'>{page}</h1>
      <button className="absolute right-4 top-1" onClick={() => setPage("mypage")}>
      <img src={account} alt='account'/>
      </button>
    </div>
  )
}

export default Header