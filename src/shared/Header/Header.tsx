import React from 'react'
import s from './Header.module.scss'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import Select, { StylesConfig } from 'react-select';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

export const Header = () => {
  const siteTheme = useTheme();
  const options = [
    { value: 'city01', label: 'Москва' },
    { value: 'city02', label: 'Санкт-Петербург' },
    { value: 'city03', label: 'Новгород' },
  ];
  const selectStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor: siteTheme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71,147,255,0.2)',
      width: '200px',
      height: '36px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: siteTheme.theme === Theme.DARK ? '#4F4F4F' : '#fff',
      // color: theme.theme === Theme.DARK ? '#fff' : '#000',
    }),
    option: (styles, { isSelected, isFocused }) => ({
      ...styles,
      backgroundColor: /* theme.theme === Theme.DARK && isSelected
        ? "#222"
        : */ siteTheme.theme === Theme.DARK && isFocused && !isSelected
          ? '#333'
          : styles.backgroundColor,
      ':active': {
        ...styles[':active'],
        backgroundColor: siteTheme.theme === Theme.DARK && !isSelected ? '#222' : styles[':active']?.backgroundColor,
      },
    }),
    singleValue: (styles) => ({
      ...styles,
      color: siteTheme.theme === Theme.DARK ? '#fff' : '#000',
    }),
  };
  function changeTheme() {
    siteTheme.changeTheme(siteTheme.theme !== Theme.DARK ? Theme.DARK : Theme.LIGHT);
  } // onClick={changeTheme}
  return (
    <header className={s.root}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo"></GlobalSvgSelector>
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <button className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id='change-theme'></GlobalSvgSelector>
        </button>
        <div className={s.selector}>
          <Select
            defaultValue={options[0]}
            // defaultMenuIsOpen={true}
            options={options}
            styles={selectStyles}
          />
        </div>
      </div>
    </header>
  )
}
