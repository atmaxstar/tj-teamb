import React from 'react'
import IconButton from './IconButton';
import calendarImg from './calendar.svg';
import chartImg from './chart.svg';
import homeImg from './home.svg';
import { Page } from '../App';


interface Props {
    page: Page;
    setPage: React.Dispatch<React.SetStateAction<Page>>;
}

const Footer = ({page, setPage}: Props) => {
  return (
    <footer className="fixed w-[375px] bottom-0 bg-gray-800 text-white py-3">
      <div className="mx-auto flex justify-around">
        <IconButton page={page} icon={homeImg} name='home' setPage={setPage}/>
        <IconButton page={page} icon={chartImg} name='dashboard' setPage={setPage}/>
        <IconButton page={page} icon={calendarImg} name='record' setPage={setPage}/>
      </div>
    </footer>
  
  )
}

export default Footer
