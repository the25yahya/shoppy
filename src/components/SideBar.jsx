import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { Tooltip } from '@chakra-ui/react'
import { links } from '../data/dummy';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';

const SideBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

const activelink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'

const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-100 m-2'
  return (
    <div className='pl-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 shadow-lg'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to="/" onClick={()=>{
            setActiveMenu(false);
          }}
            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900"
          >
            <SiShopware /> <span>DashX</span>
          </Link>
          <Tooltip label="menu"
          position="BottomCenter">
            <button type="button" 
               onClick={() => setActiveMenu(
                (prevActiveMenu) => !prevActiveMenu)}
             className='text-xl rounded-full p-3 mt-4 block md:hidden'>
              <MdOutlineCancel />
            </button>
          </Tooltip>
        </div>
        <div className='mt-10'>
          {links.map((item)=>(
            <div key={item.title}>
              <p className='text-gray-500 m-3 uppercase'>
                {item.title}
              </p>
              {item.links.map((link)=>(
                <NavLink
                to={`/${link.name}`}
                key={link.name}
                onClick={() => {}}
                className={({ isActive }) => isActive ? activelink : normalLink}
                >
                  {link.icon}
                  <span className='captialize'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>
      )}
    </div>
  )
}

export default SideBar