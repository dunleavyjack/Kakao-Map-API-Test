/*global kakao */
import React, { useEffect, useState } from "react";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const [coords, setCoords] = useState([]);

  const getCoords = (address) => {
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        // 결과값으로 받은 위치를 마커로 표시합니다
        console.log(result[0].x);
        setCoords({
          x: result[0].x,
          y: result[0].y,
        });
      } else {
        console.log("Hmm, we can't seem to find that address");
      }
    });
  };
  getCoords("역삼동792-11 논현로71길 43-2 201호 강남구");
  console.log("coords below");
  console.log(coords);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.5665, 126.978),
      level: 8,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(coords.y, coords.x);

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
}
