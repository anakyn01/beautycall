import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const messages = [
  "안녕하세요 뷰티콜 입니다",
  "아까운 콜비 아직도 내세요",
  "테라피스트와 일구할땐",
  "뷰티콜",
];

const Loading = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (index < messages.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // 마지막 메시지까지 보여준 후 2초 뒤 Home.js로 이동
      const timer = setTimeout(() => {
        navigate("/"); // Home 컴포넌트의 경로에 맞게 수정하세요
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [index, navigate]);

  return (
    <Container fluid className="d-flex justify-content-center align-items-center bg-danger" style={{ height: "100vh" }}>
      <Row>
        <Col className="">
          <h2 className="text-white">{messages[index]}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
