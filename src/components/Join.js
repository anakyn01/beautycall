import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';

function Join() {
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
    <div className="bg-white wrap p-2">
      <h2 className='mt-4 mb-2'>회원가입</h2>
      <form onSubmit={handleSubmit} className='was-validated'>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <label htmlFor="email" className='form-label'>이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            required
            className='form-control'
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="password" className='form-label'>비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            className='form-control'
            required
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="nickname" className='form-label'>닉네임</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력하세요"
            className='form-control'
            required
          />
        </div>
<div className='d-grid gap-2 mt-4 mb-2'>
        <Button type="submit" disabled={loading} variant='danger' size='lg'>
          {loading ? '가입 중...' : '회원가입'}
        </Button>
</div>
      </form>
    </div>
  );
}

export default Join;
