import { useState } from 'react';
import { Table } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

function Point() {
  // 더미 데이터 (실제로는 서버에서 받아오는 구조)
  const pointData = [
    { date: '2025-07-01', description: '콜비 사용', point: -1000 },
    { date: '2025-07-02', description: '이벤트 적립', point: 2000 },
    { date: '2025-07-01', description: '포인트 충전 보너스', point: 500 },
  ];

  const [selectedDate, setSelectedDate] = useState(null);

  // 선택한 날짜에 맞는 데이터 필터링
  const filteredData = selectedDate
    ? pointData.filter((item) => item.date === format(selectedDate, 'yyyy-MM-dd'))
    : pointData;

  return (
    <div className='bg-white wrap p-3'>
      <h5 className='mt-5 mb-3'>포인트 사용내역</h5>

      <div className='mb-4 d-flex align-items-center justify-content-between'>
        <label className='fs-13'>날짜 선택:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="날짜를 선택하세요"
          className='form-control fs-13'
        />
        {selectedDate && (
          <button className='btn btn-sm btn-outline-secondary fs-13' onClick={() => setSelectedDate(null)}>
            전체 보기
          </button>
        )}
      </div>

      <Table bordered hover>
        <thead>
          <tr className='fs-15 text-center'>
            <th>날짜</th>
            <th>내역</th>
            <th>포인트</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr className='fs-14'>
              <td colSpan="3" className='text-center'>해당 날짜에 사용내역이 없습니다.</td>
            </tr>
          ) : (
            filteredData.map((item, idx) => (
              <tr key={idx} className='fs-14 text-center'>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td className={item.point < 0 ? 'text-danger' : 'text-success'}>
                  {item.point > 0 ? `+${item.point.toLocaleString()}` : item.point.toLocaleString()}P
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Point;
