import React from 'react';
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  InputGroup,
  Image,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';

function Lecture({ isFirst = false }) {
  return (
    <>
      {isFirst && <div className="h-[1px] bg-slate-300 w-full mt-2" />}
      <div className="flex my-2">
        <Form.Check type="checkbox" id="default-checkbox" />
        <Image
          className="mx-[16px]"
          src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          rounded
          width={120}
          height={78}
        />
        <div>
          <p>강의 이름 강의 이름 강의 이름</p>
          <div className="flex items-center text-sm mt-1">
            <p className="text-gray-400">지식공유자</p>
            <div className="h-[10px] w-px mx-2 bg-gray-400" />
            <p className="font-semibold text-primary-500">수강기한</p>
          </div>
        </div>
        <div className="ml-20 self-start">X</div>
        <div className="h-auto w-px bg-gray-300 mx-6 my-0" />
        <p className="font-bold ml-auto self-start">99,999,999원</p>
      </div>
      <div className="h-[1px] bg-slate-300  w-full mt-2" />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar expand="lg" className="shadow-md">
        <Container fluid className="max-w-screen-lg">
          <Navbar.Brand href="#">inflearn</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
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
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <Button variant="primary">최근 강의</Button>
              <button className="flex justify-center p-2 mx-2 hover:bg-primary-100">
                🛒
              </button>
              <button className="flex justify-center p-2 mx-2 hover:bg-primary-100">
                🔔
              </button>
              <button className="flex justify-center p-2 mx-2 hover:bg-primary-100">
                👤
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="flex mt-8 mx-auto px-3 max-w-screen-lg">
        <section className="flex-1">
          <h2 className="text-xl mb-3 font-bold">수강바구니</h2>
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
            <span className="font-semibold mr-1">강의</span>
            <span className="text-primary-500">2</span>
            <span>/5</span>
          </div>
          {[1, 2, 3, 4].map((el) => (
            <Lecture key={el} isFirst={el === 1} />
          ))}
        </section>
        <aside className="w-[300px] ml-10">
          <div className="border rounded-md p-4">
            <Form>
              <Form.Group className="mb-3 text-sm" controlId="formBasicEmail">
                <Form.Label>구매자 이름</Form.Label>
                <Form.Control type="text" placeholder="실명을 입력해주세요" />
              </Form.Group>
              <Form.Group
                className="mb-3 text-sm"
                controlId="formBasicPassword"
              >
                <Form.Label>이메일</Form.Label>
                <Form.Control type="email" placeholder="이메일 입력" />
              </Form.Group>
              <Form.Group
                className="mb-3 text-sm"
                controlId="formBasicPassword"
              >
                <Form.Label>휴대폰 번호(숫자만 입력)</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl placeholder="01012341234" />
                  <Button size="sm" variant="outline-secondary">
                    인증요청
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
          <div className="border rounded-md p-4 shadow-md mt-3 flex flex-col">
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
                  <FormControl placeholder="01012341234" />
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
                  <FormControl placeholder="01012341234" />
                  <Button size="sm" variant="outline-secondary">
                    전액사용
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>
            <div>
              <div className="flex justify-between">
                <p className="text-sm mb-1 text-gray-500">선택상품 금액</p>
                <p className="text-sm mb-1 text-gray-500">999,999,000원</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm mb-1 text-red-500">할인금액</p>
                <p className="text-sm mb-1 text-red-500">-60,000원</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm mb-1 font-bold">총 결제금액</p>
                <p className="text-sm mb-1 font-bold">999,000원</p>
              </div>
            </div>
            <Button size="sm" variant="dark" className="my-2">
              15% 할인받기
            </Button>
            <Button size="sm" className="mb-2">
              결제하기
            </Button>
            <p className="text-xs text-gray-500">
              회원 본인은 주문내용을 확인했으며, 구매조건 및 개인정보취급방침과
              결제에 동의합니다.
            </p>
          </div>
          <div className="flex justify-between mt-3 px-2">
            <p className="text-gray-300 text-sm">궁금한 점이 있나요?</p>
            <p className="text-gray-300 text-sm">문의하기</p>
          </div>
        </aside>
      </main>
    </>
  );
}

export default App;
