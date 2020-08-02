import React from 'react';
import {
  Header,
  Logo,
  NavContainer,
  NavItem
} from './head.style'
import SearchBox from './../Search'

function Head() {
  return (
    <Header>
      <Logo>
        Flower Shop
        </Logo>
      <NavContainer>
        <NavItem>Trang chủ</NavItem>
        <NavItem>Sản phẩm</NavItem>
      </NavContainer>
      <SearchBox />
      <NavContainer>
        <NavItem>Đăng nhập</NavItem>
        <NavItem>Giỏ hàng</NavItem>
      </NavContainer>
    </Header>
  )
}

export default Head