import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { BsChatRight } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Tooltip } from '@chakra-ui/react'
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider'
import PropTypes from 'prop-types';

const Navbar = () => {

  //menu contextState
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();
  //reusable button component (nav component)
  const Navbutton = ({title, customFunc, icon, color, dotColor}) => (
    <Tooltip label={title}>
      <button type='button' onClick={customFunc} style={{color}}
      className="relative text-xl rounded-full p-3 hover:bg-gray-100">
       <span style={{ background:dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
       />
        {icon}
      </button>
    </Tooltip>
  )
  Navbutton.propTypes = {
    title: PropTypes.string.isRequired, // Example prop with validation
    customFunc: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
    color: PropTypes.string,
    dotColor: PropTypes.string,
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize',handleResize);
    handleResize();
    return () => window.removeEventListener('resize',handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false);
    } else{
      setActiveMenu(true);
    }
  },[screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <Navbutton
        title='Menu' customFunc={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
       <Navbutton
        title='cart' 
        customFunc={()=>handleClick('cart')}
        color="blue"
        icon={<FiShoppingCart />}
       />
       <Navbutton
        title='chat'
        dotColor="#03C9D7" 
        customFunc={()=>handleClick('chat')}
        color="blue"
        icon={<BsChatLeft />}
       />
       <Navbutton
        title='Notifications'
        dotColor="#03C9D7" 
        customFunc={()=>handleClick('notification')}
        color="blue"
        icon={<RiNotification3Line />}
       />
       <Tooltip
       label="Profile">
         <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-100 rounded-lg'
         onClick={()=> handleClick('userProfile')}>
          <img
            className='rounded-full w-8 h-8'
            src={avatar}
          />
          <p>
            <span className='text-gray-400 text-14'>Hi,</span>{' '}
            <span className='text-gray-400 font-bold ml-1 text-14'>Micheal</span>
          </p>
          <MdKeyboardArrowDown 
            className='text-gray-400 text-14'
          />
         </div>
       </Tooltip>
       {isClicked.chat && <Chat />}
       {isClicked.cart && <Cart />}
       {isClicked.notification && <Notification />}
       {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar