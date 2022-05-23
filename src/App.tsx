import React from 'react';
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  InputGroup,
  OverlayTrigger,
  Tooltip,
  Button,
} from 'react-bootstrap';
import { Lecture } from './Lecture';

function App() {
  return (
    <>
      <Navbar expand="lg" className="shadow-md">
        <Container fluid className="max-w-screen-lg">
          <Navbar.Brand href="#">inflearn</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 me-auto my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="강의" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">로드맵</Nav.Link>
              <Nav.Link href="#action1">멘토링</Nav.Link>
              <Nav.Link href="#action1">커뮤니티</Nav.Link>
              <Nav.Link href="#action1">채용정보</Nav.Link>
            </Nav>
            <Nav>
              <Form className="d-flex">
                <FormControl
                  size="sm"
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <Button variant="primary" size="sm">
                최근 강의
              </Button>
              <button className="flex justify-center p-2 mx-2">🛒</button>
              <button className="flex justify-center p-2 mx-2">🔔</button>
              <button className="flex justify-center p-2 mx-2">👤</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main id="main" className="flex max-w-screen-lg px-3 mx-auto mt-8">
        <section className="flex-1">
          <h2 className="mb-3 text-xl font-bold">수강바구니</h2>
          <div className="flex justify-between">
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              label="전체선택 2/5"
            />
            <Button size="sm" variant="outline-secondary">
              선택삭제 X
            </Button>
          </div>
          <div className="h-[1px] bg-black w-full mt-2" />
          <div className="flex my-2">
            <span className="mr-1 font-semibold">강의</span>
            <span className="text-primary-500">2</span>
            <span>/5</span>
          </div>
          {[1, 2, 3, 4].map((el) => (
            <Lecture key={el} isFirst={el === 1} />
          ))}
        </section>
        <aside className="w-[300px] ml-10">
          <div className="p-4 border rounded-md">
            <Form>
              <Form.Group className="mb-3 text-sm" controlId="formBasicEmail">
                <Form.Label>구매자 이름</Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="실명을 입력해주세요"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 text-sm"
                controlId="formBasicPassword"
              >
                <Form.Label>이메일</Form.Label>
                <Form.Control
                  size="sm"
                  type="email"
                  placeholder="이메일 입력"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 text-sm"
                controlId="formBasicPassword"
              >
                <Form.Label>휴대폰 번호(숫자만 입력)</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl size="sm" placeholder="01012341234" />
                  <Button size="sm" variant="outline-secondary">
                    인증요청
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
          <div className="flex flex-col p-4 mt-3 border rounded-md shadow-md">
            <Form>
              <Form.Group
                className="mb-3 text-sm"
                controlId="formBasicPassword"
              >
                <Form.Label>쿠폰</Form.Label>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>쿠폰에 대한 설명</Tooltip>
                  }
                >
                  <span className="ml-2">ℹ️</span>
                </OverlayTrigger>
                <InputGroup className="mb-3">
                  <FormControl size="sm" placeholder="01012341234" />
                  <Button size="sm" variant="outline-secondary">
                    쿠폰선택
                  </Button>
                </InputGroup>
              </Form.Group>
              <Form.Group
                className="mb-3 text-sm"
                controlId="formBasicPassword"
              >
                <Form.Label>포인트</Form.Label>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>포인트에 대한 설명</Tooltip>
                  }
                >
                  <span className="ml-2">ℹ️</span>
                </OverlayTrigger>
                <InputGroup className="mb-3">
                  <FormControl size="sm" placeholder="01012341234" />
                  <Button size="sm" variant="outline-secondary">
                    전액사용
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>
            <div>
              <div className="flex justify-between">
                <p className="mb-1 text-sm text-gray-500">선택상품 금액</p>
                <p className="mb-1 text-sm text-gray-500">999,999,000원</p>
              </div>
              <div className="flex justify-between">
                <p className="mb-1 text-sm text-red-500">할인금액</p>
                <p className="mb-1 text-sm text-red-500">-60,000원</p>
              </div>
              <div className="flex justify-between">
                <p className="mb-1 text-sm font-bold">총 결제금액</p>
                <p className="mb-1 text-sm font-bold">999,000원</p>
              </div>
            </div>
            <Button variant="dark" className="my-2">
              15% 할인받기
            </Button>
            <Button className="mb-2">결제하기</Button>
            <p className="text-xs text-gray-500">
              회원 본인은 주문내용을 확인했으며, 구매조건 및 개인정보취급방침과
              결제에 동의합니다.
            </p>
          </div>
          <div className="flex justify-between px-2 mt-3">
            <p className="text-sm text-gray-300">궁금한 점이 있나요?</p>
            <p className="text-sm text-gray-300">문의하기</p>
          </div>
        </aside>
      </main>
    </>
  );
}

export default App;
