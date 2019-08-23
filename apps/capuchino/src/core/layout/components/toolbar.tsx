import React, { FC, ReactNode, Fragment } from 'react';
import { Layout, Menu } from 'antd';

interface Props {}

const Toolbar: FC<Props> = ({ children }) => {
  return (
    <Layout.Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        {children}
      </Menu>
    </Layout.Header>
  );
};

export default Toolbar;
