/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from '@app/containers/HomePage/Loadable';
import NotFoundPage from '@app/containers/NotFoundPage/Loadable';
import { Header } from '@app/components/Header';
import { Footer } from '@app/components/Footer';
import './style.scss';

export const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React Redux SPA"
      defaultTitle="React Redux SPA"
    >
      <meta name="description" content="A React Redux SPA application" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);
