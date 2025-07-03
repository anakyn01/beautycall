import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function KakaoJoin() {
 const [userInfo, setUserInfo] = useState(null); // 사용자 정보를 저장할 상태
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  if (!window.Kakao) {
    const script = document.createElement('script');
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    script.async = true;
    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("a0bf46b6f85adb1c911c864cba503e22");
      }
    };
    document.body.appendChild(script);
  } else {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("a0bf46b6f85adb1c911c864cba503e22");
    }
  }
}, []);

  const handleKakaoLogin = () => {
    if (!window.Kakao) {
      alert('카카오 SDK가 제대로 로드되지 않았습니다.');
      return;
    }

    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log('카카오 로그인 성공', authObj);

        // 카카오 로그인 후 사용자 정보 가져오기
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
            console.log('사용자 정보', response);
            setUserInfo(response);
          },
          fail: function (error) {
            console.error('사용자 정보 조회 실패', error);
          }
        });
      },
      fail: function (error) {
        console.error('카카오 로그인 실패', error);
      }
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 서버로 회원가입 요청 보내기 (닉네임, 비밀번호, 카카오 정보 포함)
      const response = await axios.post('/api/signup', {
        nickname,
        password,
        email: userInfo.kakao_account.email,
        profile_image: userInfo.properties.profile_image,
      });

      if (response.status === 200) {
        console.log('회원가입 성공', response.data);
        // 회원가입 성공 후 처리 (예: 로그인 상태 변경, 리디렉션 등)
      }
    } catch (error) {
      console.error('회원가입 처리 실패', error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
    <div className='bg-white wrap'>
     <div className="container">
        <h2 className='mt-4 mb-2 text-secondary'>카카오톡으로 회원가입</h2>
        {!userInfo ? (
          <Button onClick={handleKakaoLogin} variant="outline-warning">
            카카오톡으로 회원가입
          </Button>
        ) : (
          <div className="user-info">
            <img src={userInfo.properties.profile_image} alt="profile" />
            <h3>{userInfo.properties.nickname}님, 환영합니다!</h3>
            <p>{userInfo.kakao_account.email}</p>
          </div>
        )}

        {userInfo && (
          <form onSubmit={handleSignUp} className="signup-form">
            <div className="form-group">
              <label htmlFor="nickname">닉네임</label>
              <input
                type="text"
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="새로운 닉네임을 입력하세요"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? '가입 중...' : '회원가입'}
            </button>
          </form>
        )}
      </div>
    </div>
    </>
  );
}

export default KakaoJoin;