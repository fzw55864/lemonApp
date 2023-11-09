import React, { useState } from "react";
import { createFromIconfontCN } from '@ant-design/icons';
import { Menu } from 'antd';
import './less/Navigation.less';

const Navigation = (props) => {

    const [theme, setTheme] = useState('light');
    const IconFont = createFromIconfontCN({
        scriptUrl: [
            '//at.alicdn.com/t/c/font_4322940_3xnoqvx2xcl.js',
        ],
    });
    const menuItems = [
        renderMenuItem('首页', '1', <IconFont type='icon-musicfill' />),
        renderMenuItem('排行榜', '2', <IconFont type='icon-paihang' />),
        renderMenuItem('歌手', '3', <IconFont type='icon-geshou' />),
        renderMenuItem('歌单', '4', <IconFont type='icon-gedan' />),
        renderMenuItem('电台', '5', <IconFont type='icon-diantai' />),
    ];

    function renderMenuItem(itemText, itemKey, itemIcon) {
        return {
            itemKey,
            itemIcon,
            itemText,
        }
    }

    function onMenuItemClick(e) {
        console.log('onMenuItemClick', e);
    }

    return (
        <div className={props.className}>
            <div className='MenuLabelStyle'>我的1</div>
            <Menu className='MenuStyle' defaultSelectedKeys={['1']} mode="inline" theme={theme}>
                {menuItems.map(item => (
                    <Menu.Item key={item.itemKey} icon={item.itemIcon} onClick={onMenuItemClick}>
                        {item.itemText}
                    </Menu.Item>
                ))}
            </Menu>
            <div className='MenuLabelStyle'>我的</div>
            <Menu className='MenuStyle' defaultSelectedKeys={['1']} mode="inline" theme={theme}>
                {menuItems.map(item => (
                    <Menu.Item key={item.itemKey} icon={item.itemIcon} onClick={onMenuItemClick}>
                        {item.itemText}
                    </Menu.Item>
                ))}
            </Menu>
        </div>)
}

export default Navigation;
