import React, {createContext, useContext, useState} from "react";
import PropTypes from 'prop-types';

const StateContext = createContext();

const initialState = {
    chat : false,
    cart : false,
    userProfile : false,
    notification : false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined)


    const handleClick = (clicked) => {
      setIsClicked({...initialState, [clicked]: true})
    }


    return (
        <StateContext.Provider
          value={{
            activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize
          }}
        >
          {children}
        </StateContext.Provider>
    )
}
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export const useStateContext = () => useContext(StateContext);