import React, {useState, useEffect} from 'react';
import UseLocalStorage from './useLocalStorage';

 const UseDarkMode = ()=>{
 const [darkMode, setDarkMode] = UseLocalStorage('Dark mode on');
  useEffect(()=> {
    darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
  },[darkMode])
  return [darkMode, setDarkMode]
 }
 export default UseDarkMode;