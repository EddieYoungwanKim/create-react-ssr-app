import React, { FC } from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { Layout } from 'antd';

import MainContent from './components/content';

interface Props {
  route: { routes: Array<RouteConfig> };
}

const DefaultLayout: FC<Props> = ({ route }) => {
  return (
    <Layout className="layout">
      <MainContent>{renderRoutes(route.routes)}</MainContent>
    </Layout>
  );
};

export default DefaultLayout;
