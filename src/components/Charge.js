import { useState } from 'react';
import { Table } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

function Charge() {
  // 더미 데이터 (실제로는 서버에서 받아오면 됨)
  const chargeData = [
    { date: '2025-07-01', amount: 10000, method: '카카오페이' },
    { date: '2025-07-02', amount: 5000, method: '토스' },
    { date: '2025-07-01', amount: 30000, method: '신용카드' },
  ];

  const [selectedDate, setSelectedDate] = useState(null);

  // 날짜 필터링
  const filteredData = selectedDate
    ? chargeData.filter((item) => item.date === format(selectedDate, 'yyyy-MM-dd'))
    : chargeData;

  return (
    <div className='bg-white wrap p-3'>
      <h5 className='mb-3'>충전 내역</h5>

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
            <th>금액</th>
            <th>결제수단</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="3" className='text-center'>해당 날짜에 충전 내역이 없습니다.</td>
            </tr>
          ) : (
            filteredData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.date}</td>
                <td>{item.amount.toLocaleString()}원</td>
                <td>{item.method}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Charge;
