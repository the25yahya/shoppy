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

    return (
        <StateContext.Provider
          value={{
            activeMenu, setActiveMenu,
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