import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import { DatePicker, message } from 'antd';
import { Moment } from 'moment';

import { gotoPage } from '../../utils/history';
import { PAGE_DETAIL } from '../../constants/pages';
import Math from '../../components/math';
import { CharacterCounter } from './components/character_couter';

import styles from './homepage.m.css';

const HomepagePage = () => {
  const [date, setDate] = useState<Moment | null>(null);

  const gotoDetailPage = useCallback(() => {
    gotoPage(PAGE_DETAIL);
  }, []);

  const handleChange = useCallback(async (value: Moment | null) => {
    setDate(value);
    await message.info(
      `您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`,
    );
  }, []);

  return (
    <>
      <h1>homepage</h1>

      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
      </div>

      <CharacterCounter />
      <Math num={3} />
      <div>{_.trim(' Hello, World!  ')}</div>
      <div onClick={gotoDetailPage} className={styles.link}>
        Show Detail
      </div>
    </>
  );
};

export default HomepagePage;
