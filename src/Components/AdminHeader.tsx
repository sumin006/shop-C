import React from 'react';
import './style/Header.css'
import './style/AdmHeader.css'
import { Link } from 'react-router-dom';
import { getCookie } from '../API/Cookie';

const AdminHeader = () => {  
  if(getCookie('authority')<1||getCookie('authority')===undefined) alert("잘못된 접근입니다.");
  window.scrollTo(0,0)
  return (
    <>
    <header>
    <div className='head top'>
      <h1><Link to='/admin/product'>관리자 페이지</Link></h1>
      <ul className='headList openUl'>
        <li><Link to='/logout'>로그아웃</Link></li>
        <li><Link to='/'> 홈페이지</Link></li>		
      </ul>
    </div>
    <div className='head'>
      <ul className='openUl'>
        <li><Link to='/admin/product'> 상품 관리</Link></li>
        <li><Link to='/admin/member'> 멤버 관리</Link></li>
        <li><Link to='/admin/banner'>메인배너 관리</Link></li>
      </ul>
    </div>
  </header>
    </>
  );
};

export default AdminHeader;