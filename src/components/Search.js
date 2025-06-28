import {Button, Table} from 'react-bootstrap';
import KakaoMap from './KakaoMap';

function Search() {
  return (
    <>
    <div className='bg-white wrap'>
        <div className='d-flex justify-content-center'>
 <div className='container msg p-3 text-white text-center'>프리랜서 10km 반경 0명 대기</div>
        </div>        
    <KakaoMap/>

    <div class="button-container bg-danger">
      <button class="btn btn-danger">스텝</button>
      <button class="btn btn-danger mx-2">헤어초급</button>
      <button class="btn btn-danger">헤어중급</button>
      <button class="btn btn-danger mx-2">헤어고급</button>
      <button class="btn btn-danger">마사지</button>
      <button class="btn btn-danger mx-2">테라피스트</button>
      <button class="btn btn-danger">도움주기</button>
      <button class="btn btn-danger mx-2">밥집</button>
      <button class="btn btn-danger">고기집</button>
      <button class="btn btn-danger mx-2">학원</button>
    </div>

    <div className="d-flex justify-content-between p-3">
        <div className='d-flex align-items-center'>
            <label className='form-label'>
            필요인원
            </label>
            <input type="text" className='form-control w-35 mx-2'/>
        </div>
         <div className='d-flex align-items-center'>
            <label className='form-label w-100'>
            반경
            </label>
            <select className="form-select mx-2">
            <option>반경 1km</option>
            <option>반경 2km</option>
            <option>반경 3km</option>
            <option>반경 4km</option>
            <option>반경 5km</option>
            </select>
        </div>
    </div>

    <div className='p-3'>
        <div className='d-grid gap-2 my-2'>
            <Button variant="danger" className='' size="lg">검색하기</Button>
        </div>
        <h6 className='mt-4 mb-2 fw-bold'>
        호출받은 관리사
        </h6>
        <div class="table-responsive">
        <Table className='w-100'>
            <colgroup>
            <col style={{}}/>
            <col style={{}}/>
            <col style={{}}/>
            <col style={{}}/>
            <col style={{}}/>
            </colgroup>
            <thead>
<tr className='text-center'>
<th>종목</th><th>성별</th><th>이름</th><th>연락처</th><th>상태</th>
</tr>
            </thead>
            <tbody>
<tr className='text-center'>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>             
            </tbody>
        </Table>
        </div>
    </div>



</div>
    </>
  );
}

export default Search;