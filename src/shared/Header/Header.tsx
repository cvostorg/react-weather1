import React from 'react'
import s from './Header.module.scss'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import Select/* , { StylesConfig } */ from 'react-select';

export const Header = () => {
  // const theme = useTheme();
  const options = [
    { value: 'city01', label: 'Москва' },
    { value: 'city02', label: 'Санкт-Петербург' },
    { value: 'city03', label: 'Новгород' },
  ];
  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71,147,255,0.2)',
      // theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71,147,255,0.2)',
      width: '200px',
      height: '36px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100
    }),
    singleValue: (styles: any) => ({
      ...styles,
      // color: theme.theme === Theme.DARK ? '#fff' : '#000',
    }),
  };
  // function changeTheme() {
  //   theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  // }  onClick={changeTheme}
  return (
    <header className={s.root}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo"></GlobalSvgSelector>
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id='change-theme'></GlobalSvgSelector>
        </div>
        <div className={s.selector}>
          <Select
            defaultValue={options[0]}
            options={options}
            styles={selectStyles}
          />
        </div>
      </div>
    </header>
  )
}
