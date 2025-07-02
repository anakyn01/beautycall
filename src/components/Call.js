import { useState } from 'react';
import { Table } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

function Call() {
  // 예시 데이터
  const callData = [
    { date: '2025-07-01', name: '벤자롱 아로마', location: '대전 서구 둔산동', status: '수락' },
    { date: '2025-07-02', name: '골드 테라피', location: '서울 강남구 역삼동', status: '수락' },
    { date: '2025-07-01', name: '로즈 아로마', location: '대전 유성구 봉명동', status: '수락' },
  ];

  const [selectedDate, setSelectedDate] = useState(null);

  // 날짜 필터링
  const filteredData = selectedDate
    ? callData.filter((item) => item.date === format(selectedDate, 'yyyy-MM-dd'))
    : callData;

  return (
    <div className='bg-white wrap p-3'>
      <h5 className='mb-3'>콜 승인내역</h5>

      <div className='mb-4 d-flex align-items-center gap-3'>
        <label className='fs-13'>날짜 선택:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="날짜를 선택하세요"
          className='form-control'
        />
        {selectedDate && (
          <button className='btn btn-sm btn-outline-secondary fs-13' onClick={() => setSelectedDate(null)}>
            전체 보기
          </button>
        )}
      </div>

      <Table bordered hover>
        <thead>
          <tr>
            <th>날짜</th>
            <th>업체명</th>
            <th>위치</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="4" className='text-center'>해당 날짜에 승인된 콜이 없습니다.</td>
            </tr>
          ) : (
            filteredData.map((item, idx) => (
              <tr key={idx}>
                <td className='fs-12'>{item.date}</td>
                <td className='fs-12'>{item.name}</td>
                <td className='fs-12'>{item.location}</td>
                <td className='text-success fs-12'>{item.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Call;
