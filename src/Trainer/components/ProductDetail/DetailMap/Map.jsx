import { useEffect } from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  height: 400px; /* 원하는 높이로 조정 */
`;

const KakaoMap = ({ address }) => {
  console.log(address);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_APP_KAKAOMAP_KEY
    }&autoload=false`;
    document.body.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도 표시할 div
        const options = {
          center: new kakao.maps.LatLng(37.5665, 126.978), // 기본 위치 (서울)
          level: 3, // 지도의 확대 레벨
        };

        const map = new kakao.maps.Map(container, options);

        // 주소로 좌표 변환
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            map.setCenter(coords); // 지도 중심을 주소로 설정
            map.setDraggable(false);
            map.setZoomable(false);
            // 마커 추가
            const marker = new kakao.maps.Marker({
              position: coords,
            });
            marker.setMap(map);
          } else {
            console.error("주소 검색 실패:", status);
          }
        });
      });
    };

    return () => {
      document.body.removeChild(script); // cleanup
    };
  }, [address]);

  return <MapContainer id="map"></MapContainer>;
};

export default KakaoMap;
