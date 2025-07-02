import {Nav,Carousel,Tabs,Tab, Button} from 'react-bootstrap';
import KakaoMap from './KakaoMap';

function MyPage() {
  return (
    <>
    <div className='bg-white wrap'>
    <KakaoMap/>

      <Tabs
      defaultActiveKey="call"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="call" title="리스트">
        <p className='px-3'>
          <div className='d-flex justify-content-between align-items-center border-bottom py-3'>
            <div className=''>
              <div>
              벤자롱 아로마 대전 서구 둔산동 니뮤
              </div>
              <div className='small text-secondary'>
              2018.02.20
              </div>
            </div>
          <div>
          <div className='btn-group'>
          <Button variant='danger btn-user py-2'>수락</Button>
          <Button variant='secondary btn-user py-2'>취소</Button>
          </div>
        </div>
          </div>

          <div className='d-flex justify-content-between align-items-center border-bottom py-3'>
            <div className=''>
              <div>
              벤자롱 아로마 대전 서구 둔산동 니뮤
              </div>
              <div className='small text-secondary'>
              2018.02.20
              </div>
            </div>
          <div>
          <div className='btn-group'>
          <Button variant='danger btn-user py-2'>수락</Button>
          <Button variant='secondary btn-user py-2'>취소</Button>
          </div>
        </div>
          </div>

          <div className='d-flex justify-content-between align-items-center border-bottom py-3'>
            <div className=''>
              <div>
              벤자롱 아로마 대전 서구 둔산동 니뮤
              </div>
              <div className='small text-secondary'>
              2018.02.20
              </div>
            </div>
            <div>
              <div className='btn-group'>
              <Button variant='danger btn-user py-2'>수락</Button>
              <Button variant='secondary btn-user py-2'>취소</Button>
              </div>
            </div>
          </div>
        </p>
      </Tab>
      <Tab eventKey="ok" title="점수">
        <p className='px-3'>
                    <div className='d-flex justify-content-between align-items-center border-bottom py-3'>
            <div className=''>
              <div>
              벤자롱 아로마
              </div>
              <div className='small text-secondary'>
              2018.02.20
              </div>
            </div>
            <div>
                <div>
              벤자롱 골드스파 둔산본점
              </div>
              <div className='small'>
              ★★★★★
              </div>
            </div>
          </div>
        </p>
      </Tab>

<Tab eventKey="point" title="포인트">
  <div className='px-3'>
    <div className='mb-3'>
      <h5>현재 보유 포인트</h5>
      <div className='border rounded-5 p-3 text-center bg-danger'>
        <strong className='text-white'>5,000P</strong>
      </div>
    </div>

    <div>
      <h6 className='mt-4'>포인트 사용 내역</h6>
      <div className='border-bottom py-2 d-flex justify-content-between'>
        <div>콜비 차감</div>
        <div className='text-danger'>-1,000P</div>
      </div>
      <div className='border-bottom py-2 d-flex justify-content-between'>
        <div>충전</div>
        <div className='text-success'>+10,000P</div>
      </div>
      <div className='border-bottom py-2 d-flex justify-content-between'>
        <div>이벤트 참여</div>
        <div className='text-success'>+2,000P</div>
      </div>
    </div>
  </div>
</Tab>

<Tab eventKey="charge" title="충전하기">
  <div className='px-3'>
    <h5 className='mb-3'>포인트 충전</h5>

    <div className='d-flex flex-wrap gap-2 mb-3'>
      {[1000, 5000, 10000, 30000, 50000, 100000].map((amount) => (
        <Button variant='outline-danger' key={amount} className=''>
          {amount.toLocaleString()}P
        </Button>
      ))}
    </div>

    <div className='text-center'>
      <Button variant='danger' size='lg' className='form-control btn-user'>결제하기</Button>
    </div>
    <div className='text-center mt-3'>
      <Button variant='outline-secondary' size='lg' className='form-control btn-user'>취소</Button>
    </div>
  </div>
</Tab>
      
      
      
      <Tab eventKey="edu" title="신청">
        <p className='px-3'>
           <div className='d-flex justify-content-between align-items-center border-bottom py-3'>
            <div className=''>
              <div>
              한방 미용 학교...
              </div>
              <div className='small text-secondary'>
              2018.02.20
              </div>
            </div>
            <div>
              <div className='btn-group'>
              <Button variant='danger btn-user py-2'>신청</Button>
              <Button variant='secondary btn-user py-2'>취소</Button>
              </div>
            </div>
          </div>
        </p>
      </Tab>
    </Tabs>
</div>
    </>
  );
}

export default MyPage;