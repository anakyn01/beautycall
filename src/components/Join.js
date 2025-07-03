import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function Join() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [phone, setPhone] = useState('');
  const [certificate, setCertificate] = useState('');
  const [kakaoId, setKakaoId] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!birthYear || !birthMonth || !birthDay) {
      setError('생년월일을 모두 선택해주세요.');
      return;
    }

    setLoading(true);

    try {
      const birthdate = `${birthYear}-${birthMonth}-${birthDay}`;
      const response = await axios.post('/api/signup', {
        email,
        password,
        nickname,
        birthdate,
        phone,
        certificate,
        kakaoId,
        brand,
        category,
      });

      if (response.status === 200) {
        alert('회원가입 성공!');
        // 가입 성공 후 리다이렉트 처리 등
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
      <h2 className="mt-4 mb-2">
        회원가입
        <small className="text-secondary mx-2">프리랜서 매장</small>
      </h2>
      <form onSubmit={handleSubmit} className="was-validated" noValidate>
        {error && <div className="error text-danger mb-3">{error}</div>}

        <div className="form-group">
          <label htmlFor="email" className="form-label">아이디 (이메일)</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="아이디나 이메일을 입력하세요"
            required
            className="form-control form-control-user py-2"
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="password" className="form-label">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            required
            className="form-control form-control-user py-2"
          />
          <input
            type="password"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="비밀번호를 다시 입력하세요"
            required
            className="form-control mt-3 form-control-user py-2"
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="nickname" className="form-label">이름</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="이름을 입력하세요"
            required
            className="form-control form-control-user py-2"
          />
        </div>

        {/* 생년월일 */}
        <div className="form-group mt-3">
          <label className="form-label">생년월일</label>
          <div className="input-group ">
            <select
              className="form-select form-control-user py-2"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              required
            >
              <option value="">년</option>
              {[...Array(100)].map((_, i) => {
                const year = 2025 - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>

            <select
              className="form-select"
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
              required
            >
              <option value="">월</option>
              {[...Array(12)].map((_, i) => {
                const month = i + 1;
                return (
                  <option key={month} value={String(month).padStart(2, '0')}>
                    {month}
                  </option>
                );
              })}
            </select>

            <select
              className="form-select form-control-user py-2"
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              required
            >
              <option value="">일</option>
              {[...Array(31)].map((_, i) => {
                const day = i + 1;
                return (
                  <option key={day} value={String(day).padStart(2, '0')}>
                    {day}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* 휴대폰 */}
        <div className="form-group mt-3">
          <label htmlFor="phone" className="form-label">휴대폰</label>
          <div className="input-group">
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="휴대폰 번호를 입력하세요"
              required
              className="form-control form-control-user py-2"
            />
            <Button variant="danger" className='btn-user'>인증버튼</Button>
          </div>
        </div>

        {/* 자격증 번호 */}
        <div className="form-group mt-3">
          <label htmlFor="certificate" className="form-label">자격증 번호</label>
          <input
            type="text"
            id="certificate"
            value={certificate}
            onChange={(e) => setCertificate(e.target.value)}
            placeholder="자격증 번호를 입력하세요"
            required
            className="form-control form-control-user py-2"
          />
        </div>

        {/* 카카오톡 ID */}
        <div className="form-group mt-3">
          <label htmlFor="kakaoId" className="form-label">카카오톡 ID</label>
          <input
            type="text"
            id="kakaoId"
            value={kakaoId}
            onChange={(e) => setKakaoId(e.target.value)}
            placeholder="카카오톡 id를 입력하세요"
            required
            className="form-control form-control-user py-2"
          />
        </div>

        {/* 브랜드 */}
        <div className="form-group mt-3">
          <label htmlFor="brand" className="form-label">브랜드</label>
          <select
            id="brand"
            className="form-select form-control-user py-2"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          >
            <option value="">아래항목중에 선택하세요</option>
            <option value="벤자롱아로미">벤자롱아로미</option>
            <option value="풋샵">풋샵</option>
            <option value="너에브랜드">너에브랜드</option>
            <option value="너님브랜드">너님브랜드</option>
          </select>
        </div>

        {/* 종목 */}
        <div className="form-group mt-3">
          <label htmlFor="category" className="form-label">종목</label>
          <select
            id="category"
            className="form-select form-control-user py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">아래항목중에 선택하세요</option>
            <option value="헤어초보">헤어초보</option>
            <option value="헤어중급">헤어중급</option>
            <option value="헤어고급">헤어고급</option>
            <option value="테라피스트">테라피스트</option>
          </select>
        </div>

        <div className="d-grid gap-2 mt-4 mb-2">
          <Button type="submit" disabled={loading} variant="danger" size="lg" className='btn-user'>
            {loading ? '가입 중...' : '회원가입완료'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Join;
