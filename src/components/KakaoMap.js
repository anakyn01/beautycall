import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a0bf46b6f85adb1c911c864cba503e22';
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map'); // 지도를 표시할 div
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울 중심
          level: 3,
        };
        new window.kakao.maps.Map(container, options); // 지도 생성
      });
    };
    document.head.appendChild(script);
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}>
           <div className='d-flex justify-content-center'>
             <div className='container msg p-3 text-white text-center'>프리랜서 10km 반경 0명 대기</div>
           </div>
  </div>;
};

export default KakaoMap;