import { memo } from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import Router from 'next/router';

import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Meta = ({ title }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Head>
    <style jsx global>{`
      /* loading progress bar styles */
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: #ff9300;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #ff9300, 0 0 5px #ff9300;
        opacity: 1;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  </div>
);

Meta.propTypes = {
  title: PropTypes.string.isRequired
};

export default memo(Meta);
