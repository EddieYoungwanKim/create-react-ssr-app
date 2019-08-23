import React, { FC } from 'react';
import { Layout, Breadcrumb } from 'antd';

interface Props {}

const MainContent: FC<Props> = ({ children }) => {
  return (
    <Layout.Content style={{ padding: '0 50px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        {children}
      </div>
    </Layout.Content>
  );
};

export default MainContent;
