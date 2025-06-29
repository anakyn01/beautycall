import {Table} from 'react-bootstrap';


function Edu() {
  return (
    <>
<div className='bg-white wrap p-3'>
   <h5>교육신청목록</h5>
   <Table>
    <thead>
      <tr>
        <td>신청날짜</td><td>종목</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-06-29</td>
        <td>[교육안내및모집] 교욱 프로그램 ...</td>
      </tr>
    </tbody>
   </Table>
</div>
    </>
  );
}

export default Edu;