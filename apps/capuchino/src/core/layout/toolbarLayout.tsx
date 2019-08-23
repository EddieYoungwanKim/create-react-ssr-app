import React, { FC, Fragment } from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { Layout } from 'antd';

import MainContent from './components/content';
import Toolbar from './components/toolbar';
import ToolbarItem from './components/toolbar-item';
import { LinkItem } from './types';

interface Props {
  route: { routes: Array<RouteConfig> };
}

const ToolbarLayout: FC<Props> = ({ route }) => {
  const links: LinkItem[] = [
    {
      key: '1',
      title: 'Home',
      to: '/',
    },
    {
      key: '2',
      title: 'Todos',
      to: '/todos',
    },
  ];
  return (
    <Layout className="layout">
      <Toolbar>
        {links.map(link => (
          <ToolbarItem key={link.key} to={link.title}>
            {link.title}
          </ToolbarItem>
        ))}
      </Toolbar>
      <MainContent>{renderRoutes(route.routes)}</MainContent>
    </Layout>
  );
};

export default ToolbarLayout;
