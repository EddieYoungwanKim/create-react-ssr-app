import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

interface Props {
  key: string;
  to: string;
}

const Toolbar: FC<Props> = ({ key, to, children }) => {
  return (
    <Menu.Item key={key}>
      <Link to={to}>{children}</Link>
    </Menu.Item>
  );
};

export default Toolbar;
