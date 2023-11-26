import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { createContext } from 'react'
import ReactSwitch from 'react-switch';


export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`todo-app ${theme}-mode`}>
        <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        <TodoList />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
