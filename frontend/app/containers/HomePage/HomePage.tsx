/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';

type HomePageProps = {
  username: string;
}

export class HomePage extends React.PureComponent<HomePageProps> {

  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React Redux SPA application homepage" />
        </Helmet>
        <div className="home-page">
          <section>
            <h2>Test!!!</h2>
          </section>
        </div>
      </article>
    );
  }
}
