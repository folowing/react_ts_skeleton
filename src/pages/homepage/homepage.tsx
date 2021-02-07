import React, { useCallback } from 'react';
import _ from 'lodash';

import { gotoPage } from '../../utils/history';
import { PAGE_DETAIL } from '../../constants/pages';
import Math from '../../components/math';

import styles from './homepage.m.css';

const HomepagePage = () => {
  const gotoDetailPage = useCallback(() => {
    gotoPage(PAGE_DETAIL);
  }, []);

  return (
    <>
      <h1>homepage</h1>
      <Math num={3} />
      <div>{_.trim(' Hello, World!  ')}</div>
      <div onClick={gotoDetailPage} className={styles.link}>
        Show Detail
      </div>
    </>
  );
};

export default HomepagePage;
