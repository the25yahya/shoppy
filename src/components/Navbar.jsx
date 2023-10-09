import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { BsChatRight } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Tooltip } from '@chakra-ui/react'
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider'
import PropTypes from 'prop-types';

const Navbar = () => {

  //menu contextState
  const {activeMenu, setActiveMenu } = useStateContext();
  //reusable button component (nav component)
  const Navbutton = ({title, customFunc, icon, color, dotColor}) => (
    <Tooltip label={title}>
      <button type='button' onClick={customFunc} style={{color}}
      className="relative text-xl rounded-full p-3 hover:bg-gray-100">
       <span style={{ background:dotColor }}>
        {icon}
       </span>
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


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <Navbutton
        title='Menu' customFunc={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
    </div>
  )
}

export default Navbar