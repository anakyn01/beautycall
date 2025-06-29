import {Carousel,Tabs,Tab, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import image1 from '../img/1.png';
import image2 from '../img/2.png';
import image3 from '../img/3.png';


function IdPw() {
  const navigate = useNavigate();

  const joinClick = () => {
    navigate('/join');
  };

  const cacaoClick = () => {
    navigate('/kakao');
  };

  return (
    <>
    <div className='bg-white wrap'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>Beauty Call</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>Beauty Call</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption className='text-white'>
          <h5>Beauty Call</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <Tabs
      defaultActiveKey="free"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="free" title="아이디 찾기">
        <p className='p-3'>
         <form className='was-validated'>
<h5>아이디 찾기</h5>
<p className='text-secondary'>
가입시 등록한 사업자 및 자격증 번호를 입력하세요  
</p>

        <div className="form-group mt-3">
          <label htmlFor="nickname" className='form-label'>종목</label>
          <select class="form-select" >
            <option>아래항목중에 선택하세요</option>
            <option>헤어초보</option>
            <option>헤어중급</option>
            <option>헤어고급</option>
            <option>테라피스트</option>
          </select>
        </div>

         <div className="form-group mt-3">
          <label htmlFor="nickname" className='form-label'>자격증 번호</label>
          <input
            type="text"
            id="nickname"
            placeholder="가입시 입력했던 자격증 번호를 입력하세요"
            className='form-control'
            required
          />
        </div>
            <div className='d-grid gap-2 mt-3'>
                <Button variant="danger"size="lg" className='py-2'>확인</Button>
            </div>

          </form>
        </p>
      </Tab>
      <Tab eventKey="shop" title="비밀번호 찾기">
         <p className='p-3'>
         <form className='was-validated'>
          <h5>비밀번호 찾기</h5>
<p className='text-secondary'>
가입시 등록한 핸드폰 번호를 입력해 주세요
</p>
         <div className="form-group mt-3">
          <label htmlFor="nickname" className='form-label'>아이디</label>
          <input
            type="text"
            id="nickname"
            placeholder="아이디를 입력하세요"
            className='form-control'
            required
          />
        </div>

         <div className="form-group mt-3">
          <label htmlFor="nickname" className='form-label'>휴대폰 번호</label>
          <input
            type="text"
            id="nickname"
            placeholder="가입시 입력했던 휴대폰 번호를 입력하세요"
            className='form-control'
            required
          />
        </div>
            <div className='d-grid gap-2 mt-3'>
                <Button variant="danger"size="lg" className='py-2'>확인</Button>
            </div>

            </form>
        </p>
      </Tab>
    </Tabs>
</div>
    </>
  );
}

export default IdPw;