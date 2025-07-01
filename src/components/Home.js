import {Carousel,Tabs,Tab, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import image1 from '../img/1.png';
import image2 from '../img/2.png';
import image3 from '../img/3.png';


function Home() {
  const navigate = useNavigate();

  const joinClick = () => {
    navigate('/join');
  };

  const cacaoClick2 = () => {
    navigate('/kakao');
  };

  const findClick = () => {
    navigate('/idpw');
  };

  const cacaoClick = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      console.error('Kakao SDK is not initialized');
      return;
    }

    window.Kakao.Auth.login({
      scope: 'profile_nickname, account_email',
      success: function (authObj) {
        console.log('로그인 성공', authObj);
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function (res) {
            console.log('사용자 정보', res);
            // 여기에 사용자 정보 처리 코드 추가
            // 예: navigate('/dashboard');
          },
          fail: function (error) {
            console.error('사용자 정보 요청 실패', error);
          }
        });
      },
      fail: function (err) {
        console.error('카카오 로그인 실패', err);
      }
    });
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
      <Tab eventKey="free" title="프리랜서">
            <div className='p-3'>
            <form className='was-validated'>
              <input type="text" className='form-control py-2 form-control-user' placeholder='enter your id' required />
              <input type="password" className='form-control mt-3 py-2 form-control-user' placeholder='enter your password' required />
              <div className="form-check mb-3 mt-2">
                <label className="form-check-label">
                  <input className="form-check-input border-danger" type="checkbox" name="remember" /> <small>아이디저장</small>
                </label>
              </div>

              <div className='d-grid gap-2'>
                <Button variant="danger" size="lg" className='py-2 btn-user'>로그인</Button>
              </div>

              <div className='d-grid gap-2 mt-2 mb-3'>
                <Button variant="warning" size="lg" className='py-2 btn-user' onClick={cacaoClick}>카카오톡으로 로그인</Button>
              </div>

              <div className='d-grid gap-2 my-2'>
                <Button variant="outline-danger" size="lg" className='py-2 btn-user' onClick={joinClick}>회원가입</Button>
              </div>

              <div className='d-grid gap-2 mb-3'>
                <Button variant="outline-warning" size="lg" className='py-2 btn-user' onClick={cacaoClick}>카카오톡으로 회원가입</Button>
              </div>

              <div className='d-grid gap-2 my-2'>
                <Button variant="outline-secondary" size="lg" className='py-2 btn-user' onClick={findClick}>ID / PW찾기</Button>
              </div>
            </form>
          </div>
      </Tab>
      <Tab eventKey="shop" title="매장">
         <p className='p-3'>
         <form className='was-validated'>
            <input type="text" className='form-control py-2 form-control-user'placeholder='enter your id' required/>
            <input type="password" className='form-control mt-3 py-2 form-control-user'placeholder='enter your password' required/>
            <div class="form-check mb-3 mt-2">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" name="remember" /> 아이디저장
                </label>
            </div>
            <div className='d-grid gap-2'>
                <Button variant="danger"size="lg" className='py-2 btn-user'>로그인</Button>
            </div>

            <div className='d-grid gap-2 mt-2 mb-3'>
  <Button variant="warning" className='py-2 btn-user' size="lg" onClick={cacaoClick}>카카오톡으로 로그인</Button>
</div>



<div className='d-grid gap-2 my-2'>
  <Button variant="outline-danger" className='btn-user py-2' size="lg" onClick={joinClick}>회원가입</Button>
</div>
<div className='d-grid gap-2 my-2'>
  <Button variant="outline-warning" className='btn-user py-2' size="lg" onClick={cacaoClick}>카카오톡으로 회원가입</Button>
</div>
<div className='d-grid gap-2 mt-3'>
  <Button variant="outline-danger" className='btn-user py-2' size="lg" onClick={findClick}>ID / PW찾기</Button>
</div>

            </form>
        </p>
      </Tab>
    </Tabs>
</div>
    </>
  );
}

export default Home;