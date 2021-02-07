import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as PAGES from '../constants/pages';
import HomepagePage from './homepage';

const DetailPage = lazy(() => import('./detail'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Redirect exact from="/" to={PAGES.PAGE_HOMEPAGE} />
        <Route exact path={PAGES.PAGE_HOMEPAGE}>
          <HomepagePage />
        </Route>
        <Route exact path={PAGES.PAGE_DETAIL}>
          <DetailPage />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
