import { useContext, useState, createContext } from 'react';

const init_state = {
  toggle: false,
  theme: 'light',
};

const ThemeContext = createContext(init_state);

const ContextProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    const [theme, setTheme] = useState('light')
    const value = {
        toggle,
        setToggle,
        theme,
        setTheme,}
  return (
    <ThemeContext.Provider value= {value} >
        { children }
    </ThemeContext.Provider>
  )
}

export default ContextProvider
export const ValueContext = () => useContext(ThemeContext);

