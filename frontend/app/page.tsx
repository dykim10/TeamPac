'use client';

import { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Card, Carousel, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRunning, faMedal, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// 인터페이스 정의
interface FeaturedRace {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

interface UpcomingRace {
  id: string;
  title: string;
  date: string;
  location: string;
  distance: string;
  image: string;
}

export default function Home() {
  const [featuredRaces, setFeaturedRaces] = useState<FeaturedRace[]>([
    {
      id: '773e13d5-d4d0-4fc4-a025-58c224d9d3ef',
      title: '서울 국제 마라톤',
      date: '2023년 10월 15일',
      location: '서울 광화문 광장',
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '아름다운 서울의 풍경을 즐기며 달리는 국제 마라톤 대회'
    },
    {
      id: '8f7e6d5c-4b3a-2c1d-0e9f-8g7h6i5j4k3l',
      title: '부산 해변 마라톤',
      date: '2023년 11월 5일',
      location: '부산 해운대 해변',
      image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '시원한 바다를 옆에 두고 달리는 해변 마라톤'
    },
    {
      id: '2a3b4c5d-6e7f-8g9h-0i1j-2k3l4m5n6o7p',
      title: '제주 트레일 러닝',
      date: '2023년 9월 23일',
      location: '제주 한라산',
      image: 'https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '제주의 아름다운 자연을 만끽하며 달리는 트레일 러닝'
    }
  ]);

  const [upcomingRaces, setUpcomingRaces] = useState<UpcomingRace[]>([
    {
      id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
      title: '경주 벚꽃 마라톤',
      date: '2023년 4월 10일',
      location: '경주 보문단지',
      distance: '42.195km / 21.0975km / 10km / 5km',
      image: 'https://images.unsplash.com/photo-1617017641321-2a9c788aabc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '7q8r9s0t-1u2v-3w4x-5y6z-7a8b9c0d1e2f',
      title: '강원도 산악 마라톤',
      date: '2023년 5월 20일',
      location: '강원도 평창',
      distance: '30km / 15km / 7km',
      image: 'https://images.unsplash.com/photo-1551927411-95e412943b58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3g4h5i6j-7k8l-9m0n-1o2p-3q4r5s6t7u8v',
      title: '인천 바다 마라톤',
      date: '2023년 6월 3일',
      location: '인천 송도 센트럴파크',
      distance: '42.195km / 21.0975km / 10km',
      image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]);

  // API에서 데이터 가져오기 (실제 구현 시 사용)
  useEffect(() => {
    const fetchRaces = async (): Promise<void> => {
      try {
        // 실제 API 호출 코드로 대체
        // const response = await fetch('/api/featured-races');
        // const data = await response.json();
        // setFeaturedRaces(data);
        
        // const upcomingResponse = await fetch('/api/upcoming-races');
        // const upcomingData = await upcomingResponse.json();
        // setUpcomingRaces(upcomingData);
      } catch (error) {
        console.error('대회 데이터를 불러오는 중 오류가 발생했습니다:', error);
      }
    };

    // fetchRaces();
  }, []);

  // 검색 핸들러
  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // 검색 로직 구현
    console.log('검색 실행');
  };

  return (
    <>
      {/* 네비게이션 바 */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">마라톤 대회 관리</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">홈</Nav.Link>
              <Nav.Link href="#races">대회 목록</Nav.Link>
              <Nav.Link href="#register">대회 등록</Nav.Link>
              <Nav.Link href="#about">소개</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#login">로그인</Nav.Link>
              <Nav.Link href="#signup">회원가입</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 히어로 섹션 */}
      <div className="bg-primary text-white py-5 mb-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">마라톤 대회를 찾고 계신가요?</h1>
              <p className="lead">전국의 다양한 마라톤 대회 정보를 한 곳에서 확인하고 참가하세요.</p>
              <Button variant="light" size="lg" className="me-2">대회 찾기</Button>
              <Button variant="outline-light" size="lg">대회 등록하기</Button>
            </Col>
            <Col md={6}>
              <Form onSubmit={handleSearch}>
                <InputGroup className="mt-4 mb-3">
                  <Form.Control
                    placeholder="대회 이름, 지역으로 검색"
                    aria-label="대회 검색"
                  />
                  <Button variant="light" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 주요 대회 캐러셀 */}
      <Container className="mb-5">
        <h2 className="text-center mb-4">주목할 만한 대회</h2>
        <Carousel>
          {featuredRaces.map((race) => (
            <Carousel.Item key={race.id}>
              <div 
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${race.image})`,
                  height: '500px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <Carousel.Caption>
                  <h3>{race.title}</h3>
                  <p>{race.description}</p>
                  <p>
                    <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                    {race.date}
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="ms-3 me-2" />
                    {race.location}
                  </p>
                  <Button variant="primary">자세히 보기</Button>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* 다가오는 대회 */}
      <Container className="mb-5">
        <h2 className="text-center mb-4">다가오는 대회</h2>
        <Row>
          {upcomingRaces.map((race) => (
            <Col md={4} className="mb-4" key={race.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={race.image} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{race.title}</Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon={faCalendarAlt} className="me-2 text-primary" />
                    {race.date}<br />
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-primary" />
                    {race.location}<br />
                    <FontAwesomeIcon icon={faRunning} className="me-2 text-primary" />
                    {race.distance}
                  </Card.Text>
                  <Button variant="outline-primary" className="w-100">상세 정보</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button variant="primary">모든 대회 보기</Button>
        </div>
      </Container>

      {/* 특징 섹션 */}
      <div className="bg-light py-5 mb-5">
        <Container>
          <h2 className="text-center mb-5">마라톤 대회 관리 시스템의 특징</h2>
          <Row>
            <Col md={4} className="text-center mb-4">
              <div className="bg-white rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style={{ width: '100px', height: '100px' }}>
                <FontAwesomeIcon icon={faSearch} size="2x" className="text-primary" />
              </div>
              <h4>쉬운 대회 검색</h4>
              <p>지역, 날짜, 거리 등 다양한 조건으로 원하는 대회를 쉽게 찾을 수 있습니다.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="bg-white rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style={{ width: '100px', height: '100px' }}>
                <FontAwesomeIcon icon={faRunning} size="2x" className="text-primary" />
              </div>
              <h4>간편한 참가 신청</h4>
              <p>몇 번의 클릭만으로 원하는 대회에 빠르게 참가 신청할 수 있습니다.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="bg-white rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style={{ width: '100px', height: '100px' }}>
                <FontAwesomeIcon icon={faMedal} size="2x" className="text-primary" />
              </div>
              <h4>기록 관리</h4>
              <p>참가한 대회의 기록을 체계적으로 관리하고 분석할 수 있습니다.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 뉴스레터 구독 */}
      <Container className="mb-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2>최신 대회 소식 받기</h2>
            <p className="lead mb-4">새로운 대회 정보와 마라톤 관련 소식을 이메일로 받아보세요.</p>
            <Form onSubmit={(e) => { e.preventDefault(); console.log('뉴스레터 구독'); }}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="이메일 주소 입력"
                  aria-label="이메일 주소"
                  type="email"
                  required
                />
                <Button variant="primary" type="submit">구독하기</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* 푸터 */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <h5>마라톤 대회 관리</h5>
              <p>전국의 마라톤 대회 정보를 한 곳에서 관리하고 참가할 수 있는 서비스입니다.</p>
            </Col>
            <Col md={4} className="mb-3">
              <h5>빠른 링크</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">홈</a></li>
                <li><a href="#" className="text-white">대회 목록</a></li>
                <li><a href="#" className="text-white">대회 등록</a></li>
                <li><a href="#" className="text-white">소개</a></li>
              </ul>
            </Col>
            <Col md={4} className="mb-3">
              <h5>소셜 미디어</h5>
              <div>
                <a href="#" className="text-white me-3">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a href="#" className="text-white me-3">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>
            </Col>
          </Row>
          <hr />
          <div className="text-center">
            <p className="mb-0">&copy; 2023 마라톤 대회 관리 시스템. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </>
  );
}
