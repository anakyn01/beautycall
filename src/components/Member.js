import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';

function Member() {
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/signup', {
        email,
        password,
        nickname,
      });

      if (response.status === 200) {
        alert('회원가입 성공!');
        // 회원가입 성공 후 리디렉션이나 다른 처리
      }
    } catch (err) {
      console.error('회원가입 실패:', err);
      setError('회원가입에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
<div className='bg-white wrap p-3'>
   <h2 className='mt-4 mb-2'>회원정보수정</h2>
      <form onSubmit={handleSubmit} className='was-validated'>
        {error && <div className="error">{error}</div>}

        <div className="form-group mt-3">
          <label htmlFor="password" className='form-label'>비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            className='form-control form-control-user py-2'
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 다시 입력하세요"
            className='form-control mt-3 form-control-user py-2'
            required
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="nickname" className='form-label'>이름</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="선택한 본인에 이름"
            className='form-control form-control-user py-2'
            disabled
          />
        </div>

<div className="form-group mt-3 ">
          <label htmlFor="nickname" className='form-label'>휴대폰</label>
          <div className='input-group'>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="휴대폰 번호를 입력하세요"
            className='form-control form-control-user py-2'
            required
          />
          <Button variant='danger' className='btn-user'>인증버튼</Button>
          </div>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="nickname" className='form-label'>자격증 번호</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="자격증 번호를 입력하세요"
            className='form-control form-control-user py-2'
            required
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="nickname" className='form-label'>카카오톡 ID</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="카카오톡 id를 입력하세요"
            className='form-control form-control-user py-2'
            required
          />
        </div>

         <div className="form-group mt-3">
          <label htmlFor="nickname" className='form-label'>브랜드</label>
          <select class="form-select form-control-user py-2" >
            <option>아래항목중에 선택하세요</option>
            <option>벤자롱아로미</option>
            <option>풋샵</option>
            <option>너에브랜드</option>
            <option>너님브랜드</option>
          </select>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="nickname" className='form-label'>종목</label>
          <select class="form-select form-control-user py-2" >
            <option>아래항목중에 선택하세요</option>
            <option>헤어초보</option>
            <option>헤어중급</option>
            <option>헤어고급</option>
            <option>테라피스트</option>
          </select>
        </div>

<div className='btn-group w-100 mt-4'>
        <Button type="submit" disabled={loading} variant='danger' className='w-49 btn-user' size='lg'>
          {loading ? '가입 중...' : '수정완료'}
        </Button>
        <Button type="submit" variant='secondary' className='w-49 btn-user' size='lg'>
           취소
        </Button>
</div>
      </form>
</div>
    </>
  );
}

export default Member;