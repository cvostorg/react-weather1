import React from 'react'

import s from './ThisDay.module.scss';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';

interface Props { }
export const ThisDay = (props: Props) => {
  return (
    <div className={s.root}>
      <div className={s.top_bx}>
        <div className={s.top_bx_wrapper}>
          <div className={s.this_temp}>20*</div>
          <div className={s.this_day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id='sun' />
      </div>
      <div className={s.bot_bx}>
        <div className={s.this_time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.this_city}>
          Город: <span>-</span>
        </div>
      </div>
    </div>
  )
}
