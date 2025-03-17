'use client';

import { useState } from 'react';
import { Container, Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClose = () => setShowMenu(false);
  const handleMenuShow = () => setShowMenu(true);

  return (
    <>
      {/* 네비게이션 바 */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">마라톤 대회 관리</Navbar.Brand>
          <Button 
            variant="outline-light" 
            onClick={handleMenuShow} 
            className="d-lg-none"
            aria-controls="sidebar-menu"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
            <Nav>
              <Nav.Link href="/races">대회 목록</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 오프캔버스 메뉴 (햄버거 메뉴) */}
      <Offcanvas show={showMenu} onHide={handleMenuClose} placement="end" id="sidebar-menu">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>메뉴</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/" onClick={handleMenuClose}>홈</Nav.Link>
            <Nav.Link href="/races" onClick={handleMenuClose}>대회 목록</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* 메인 콘텐츠 */}
      <Container className="py-5">
        <h1 className="text-center mb-4">마라톤 대회 관리 시스템</h1>
        <p className="text-center">
          전국의 마라톤 대회 정보를 한 곳에서 관리하고 참가할 수 있는 서비스입니다.
        </p>
        <div className="text-center mt-4">
          <Button href="/races" variant="primary" size="lg">
            대회 목록 보기
          </Button>
        </div>
      </Container>

      {/* 푸터 */}
      <footer className="bg-dark text-white py-4 mt-5">
        <Container className="text-center">
          <p className="mb-0">&copy; 2023 마라톤 대회 관리 시스템. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}
