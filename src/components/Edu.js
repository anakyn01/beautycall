import {Table} from 'react-bootstrap';


function Edu() {
  return (
    <>
<div className='bg-white wrap p-3'>
   <h5 className='mt-5 mb-3'>교육신청목록</h5>
   <Table>
    <thead>
      <tr className='fs-15'>
        <td>신청날짜</td><td>종목</td>
      </tr>
    </thead>
    <tbody>
      <tr className='fs-14 text-secondary'>
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