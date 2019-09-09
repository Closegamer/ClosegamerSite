import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./containers/Home'));
const Articles = lazy(() => import('./containers/Articles'));
const Partners = lazy(() => import('./containers/Partners'));
const Courses = lazy(() => import('./containers/Courses'));
const Contacts = lazy(() => import('./containers/Contacts'));
const Advertising = lazy(() => import('./containers/Advertising'));

function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/articles' component={Articles} />
        <Route exact path='/partners' component={Partners} />
        <Route exact path='/courses' component={Courses} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/advertising' component={Advertising} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
