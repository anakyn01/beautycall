import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import KakaoMap from './KakaoMap';

function Search() {
  // 호출받은 관리사 JSON 데이터 (임시 하드코딩, 추후 API 연동 가능)
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    // 실제 API 요청이 필요한 경우 fetch 등을 사용하세요.
    const dummyData = [
      {
        type: "테라피스트",
        gender: "남",
        name: "서수안무",
        phone: "010-3276-0000",
        status: "Call 대기중"
      },
      {
        type: "테라피스트",
        gender: "여",
        name: "김하나",
        phone: "010-1234-5678",
        status: "Call 대기중"
      },
      {
        type: "헤어중급",
        gender: "남",
        name: "이준호",
        phone: "010-8765-4321",
        status: "Call 대기중"
      },
      {
        type: "헤어고급",
        gender: "여",
        name: "박민정",
        phone: "010-5555-1212",
        status: "Call 대기중"
      },
      {
        type: "스텝",
        gender: "남",
        name: "정우성",
        phone: "010-2222-3333",
        status: "Call 대기중"
      }
    ];
    setFreelancers(dummyData);
  }, []);

  return (
    <>
      <div className='bg-white wrap'>

        <KakaoMap />

        <div className="button-container bg-danger">
          <button className="btn btn-danger">스텝</button>
          <button className="btn btn-danger mx-2">헤어초급</button>
          <button className="btn btn-danger">헤어중급</button>
          <button className="btn btn-danger mx-2">헤어고급</button>
          <button className="btn btn-danger">마사지</button>
          <button className="btn btn-danger mx-2">테라피스트</button>
          <button className="btn btn-danger">도움주기</button>
          <button className="btn btn-danger mx-2">밥집</button>
          <button className="btn btn-danger">고기집</button>
          <button className="btn btn-danger mx-2">학원</button>
        </div>

        <div className="p-3">
          <div className='d-flex align-items-center'>
            <label className='form-label w-25 fs-14'>
              필요인원
            </label>
            <select className="form-select form-control-user py-2 mx-2">
              <option>1명</option>
              <option>2명</option>
              <option>3명</option>
              <option>4명</option>
              <option>5명</option>
            </select>
          </div>
          <div className='d-flex align-items-center mt-3'>
            <label className='form-label w-25 fs-14'>
              반경
            </label>
            <select className="form-select form-control-user py-2 mx-2">
              <option>반경 1km</option>
              <option>반경 2km</option>
              <option>반경 3km</option>
              <option>반경 4km</option>
              <option>반경 5km</option>
              <option>반경 6km</option>
              <option>반경 7km</option>
              <option>반경 8km</option>
              <option>반경 9km</option>
              <option>반경 10km</option>
            </select>
          </div>
        </div>

        <div className='p-3'>
          <div className='d-grid gap-2 my-2'>
            <Button variant="danger" className='btn-user py-3' size="lg">검색하기</Button>
          </div>
          <h6 className='mt-4 mb-2 fw-bold text-dark fs-15'>
            Call을 기다리는 프리랜서찾기<br/>
            <small className='text-ccc fs-12 mt-2 mb-3'>스마트폰은 화면이 작으니 정보를 확인하려면 좌우 슬라이딩 해주세요</small>
          </h6>
          <div className="table-responsive">
            <Table style={{ width: "620px" }}>
              <colgroup>
                <col style={{ width: "120px" }} />
                <col style={{ width: "60px" }} />
                <col style={{ width: "80px" }} />
                <col style={{ width: "150px" }} />
                <col style={{ width: "210px" }} />
              </colgroup>
              <thead>
                <tr className='text-center fs-15 text-secondary'>
                  <th>종목</th><th>성별</th><th>이름</th><th>연락처</th><th>상태</th>
                </tr>
              </thead>
              <tbody>
                {freelancers.map((freelancer, idx) => (
                  <tr className='text-center fs-14' key={idx}>
                    <td>{freelancer.type}</td>
                    <td>{freelancer.gender}</td>
                    <td>{freelancer.name}</td>
                    <td>{freelancer.phone}</td>
                    <td>
                      <Button variant="danger" className='btn-user py-2'>
                        {freelancer.status}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
