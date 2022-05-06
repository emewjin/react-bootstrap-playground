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
} from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar expand="lg" className="shadow-md">
        <Container fluid>
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
      <main className="flex mt-3">
        <section className="flex-1">
          <h2 className="text-xl">장바구니</h2>
          <div className="flex justify-between">
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              label="전체선택 2/5"
            />
            <Button variant="outline-secondary">선택삭제 X</Button>
          </div>
          <div className="h-[1px] bg-black w-full mt-2" />
        </section>
        <aside className="w-[300px] ml-10">
          <div className="border border-slate-300 rounded-md p-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>구매자 이름</Form.Label>
                <Form.Control type="text" placeholder="실명을 입력해주세요" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>이메일</Form.Label>
                <Form.Control type="email" placeholder="이메일 입력" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>휴대폰 번호(숫자만 입력)</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl placeholder="01012341234" />
                  <Button variant="outline-secondary">인증요청</Button>
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
          <div className="border border-slate-300 rounded-md p-4 shadow-md mt-3">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>구매자 이름</Form.Label>
                <Form.Control type="text" placeholder="실명을 입력해주세요" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>이메일</Form.Label>
                <Form.Control type="email" placeholder="이메일 입력" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>휴대폰 번호(숫자만 입력)</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl placeholder="01012341234" />
                  <Button variant="outline-secondary">인증요청</Button>
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
        </aside>
      </main>
    </>
  );
}

export default App;
