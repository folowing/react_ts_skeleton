import queryString from 'query-string';
import { createBrowserHistory } from 'history';
import { RouterLocation } from '../types/router';

export const history = createBrowserHistory({ basename: '/app' });

export const gotoPage = (
  path: string,
  queryParams?: Record<string, any>,
  data?: any,
) => {
  let searchString = undefined;
  if (queryParams) {
    searchString = queryString.stringify(queryParams);
  }
  history.push({
    pathname: path,
    search: searchString,
    state: data,
  });
};

export const replacePage = (
  path: string,
  queryParams?: { [key: string]: any },
  data?: any,
) => {
  let searchString = undefined;
  if (queryParams) {
    searchString = queryString.stringify(queryParams);
  }
  history.replace({
    pathname: path,
    search: searchString,
    state: data,
  });
};

export const replacePageByLocation = (location: RouterLocation) => {
  history.replace(location);
};

export const goBack = () => {
  history.goBack();
};
