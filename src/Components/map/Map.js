/*global kakao */
import React, { useEffect, useState } from "react";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const [latCoords, setLatCoords] = useState("");
  const [longCoords, setLongCoords] = useState("");

  const mapscript = (coordinates) => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(33.4506810661721, 126.57049341667),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(latCoords, longCoords);

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  const getCoords = () => {
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(
      "역삼동792-11 논현로71길 43-2 201호 강남구",
      function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          console.log(coords.La);
          console.log(result[0].x);
          setLatCoords(coords.La);
          setLongCoords(coords.Ma);
          return coords;
        } else {
          console.log("Hmm, we can't seem to find that address");
        }
      }
    );
  };
  getCoords();

  // const getLat = () => {
  //   const geocoder = new kakao.maps.services.Geocoder();
  //   geocoder.addressSearch(
  //     "역삼동792-11 논현로71길 43-2 201호 강남구",
  //     function (result, status) {
  //       // 정상적으로 검색이 완료됐으면
  //       if (status === kakao.maps.services.Status.OK) {
  //         console.log("here");
  //         console.log(result[0].x);
  //       } else {
  //         console.log("Hmm, we can't seem to find that address");
  //       }
  //     }
  //   );
  // };
  // getLat();

  let lat = getCoords();
  console.log(lat);
  // const lat = getCoords();
  // console.log(lat.Ma);
  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
}
