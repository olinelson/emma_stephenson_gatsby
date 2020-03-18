import React, { useState } from 'react'
import { Menu, Drawer, Button } from 'antd'
import {
  MenuUnfoldOutlined

} from '@ant-design/icons'
import { Link } from 'gatsby'
import { isBrowser } from '../utils'

function Nav () {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const currentPage = isBrowser() ? [window.location.pathname] : ['/']

  return <>
    <Button style={{ position: 'fixed', top: '1rem', left: '1rem', zIndex: '150' }} onClick={() => setDrawerOpen(true)} icon={<MenuUnfoldOutlined />} />
    {/* <MenuOutlined /> */}
    <Drawer
      placement='left'
      closable={false}
      onClose={() => setDrawerOpen(false)}
      visible={drawerOpen}
      bodyStyle={{ padding: 0 }}

    >
      <Menu mode='inline' style={{ width: '100%', height: '100%' }} selectedKeys={currentPage}>
        <Menu.Item key='/'>
          <Link to='/'>Music</Link>
        </Menu.Item>

        <Menu.Item key='/teaching'>
          <Link to='/teaching'>Teaching</Link>
        </Menu.Item>

        {/* <Menu.Item key='/research'>
          <Link to='/research'>Research</Link>
        </Menu.Item> */}

        <Menu.Item key='/linksquid'>
          <Link to='/linksquid'>Linksquid</Link>
        </Menu.Item>

        <Menu.Item key='/bio'>
          <Link to='/bio'>Bio</Link>
        </Menu.Item>

        <Menu.Item key='/blog'>
          <Link to='/blog'>Blog</Link>
        </Menu.Item>

        <Menu.Item key='/podcast'>
          <Link to='/podcast'>Podcast</Link>
        </Menu.Item>

        <Menu.Item key='/contact'>
          <Link to='/contact'>Contact</Link>
        </Menu.Item>

      </Menu>
    </Drawer>

         </>
}

export default Nav
