import React from 'react'

import s from './Home.module.scss';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import { Days } from './components/Days/Days';

interface Props { }
export const Home = (props: Props) => {
  return (
    <main className={s.root}>
      <div className={s.wrapper_1}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <div className={s.wrapper_2}>
        <Days />
      </div>
    </main>
  )
}
