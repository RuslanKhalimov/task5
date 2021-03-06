import React, { Component } from 'react';

import './menuButtons.css';
import { MenuButton } from './button/menuButton';

export class MenuButtons extends Component {
  render() {
    return (
      <ul className="menu-buttons">
        <MenuButton name="Входящие" />
        <MenuButton name="Отправленные" />
        <MenuButton name="Удаленные" />
        <MenuButton name="Спам" />
        <MenuButton name="Черновики" />
        <MenuButton name="Создать папку" />
      </ul>
    );
  }
}
