/*global kakao */
import React, { useEffect, useState } from "react";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  // const [latCoords, setLatCoords] = useState("");
  // const [longCoords, setLongCoords] = useState("");

  const geocoder = new kakao.maps.services.Geocoder();

  const x = () => {
    geocoder.addressSearch(
      "제주특별자치도 제주시 첨단로 242",
      function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          console.log("inside function");
          console.log(coords);
          return coords;
        }
      }
    );
  };

  console.log("function return");
  console.log(x());

  // const address = "역삼동792-11 논현로71길 43-2 201호 강남구";
  // let coordinates = geocoder.addressSearch(address, function (result, status) {
  //   if (status === kakao.maps.services.Status.OK) {
  //     const coords = {
  //       y: result[0].y,
  //       x: result[0].x,
  //     };
  //     return coords;
  //   }
  // });
  // console.log(coordinates);

  // const getAddress = async (address) => {
  //   await geocoder.addressSearch(address, async function (result, status) {
  //     if (status === kakao.maps.services.Status.OK) {
  //       const coords = {
  //         y: result[0].y,
  //         x: result[0].x,
  //       };
  //       console.log("hiiiii");
  //       console.log(coords);
  //       return coords;
  //     }
  //   });
  // };

  // let address = getAddress("역삼동792-11 논현로71길 43-2 201호 강남구").then(
  //   (result) => {
  //     return result;
  //   }
  // );
  // console.log(address);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(33.4506810661721, 126.57049341667),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      33.4506810661721,
      126.57049341667
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  // const getCoords = () => {
  //   const geocoder = new kakao.maps.services.Geocoder();
  //   geocoder.addressSearch(
  //     "역삼동792-11 논현로71길 43-2 201호 강남구",
  //     function (result, status) {
  //       // 정상적으로 검색이 완료됐으면
  //       if (status === kakao.maps.services.Status.OK) {
  //         var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

  //         // 결과값으로 받은 위치를 마커로 표시합니다
  //         var marker = new kakao.maps.Marker({
  //           map: map,
  //           position: coords,
  //         });
  //         console.log(coords.La);
  //         console.log(result[0].x);
  //         setLatCoords(coords.La);
  //         setLongCoords(coords.Ma);
  //         return coords;
  //       } else {
  //         console.log("Hmm, we can't seem to find that address");
  //       }
  //     }
  //   );
  // };
  // getCoords();

  // const getLatLong = () => {
  //   const geocoder = new kakao.maps.services.Geocoder();
  //   geocoder.addressSearch(
  //     "역삼동792-11 논현로71길 43-2 201호 강남구",
  //     function (result, status) {
  //       // 정상적으로 검색이 완료됐으면
  //       if (status === kakao.maps.services.Status.OK) {
  //         const coords = {
  //           lat: result[0].y,
  //           long: result[0].x,
  //         };
  //         return coords.La;
  //       } else {
  //         console.log("Hmm, we can't seem to find that address");
  //       }
  //     }
  //   );
  // };

  // const geocoder = new kakao.maps.services.Geocoder();

  // const getWhatIWant = () => {
  //   geocoder.addressSearch(
  //     "역삼동792-11 논현로71길 43-2 201호 강남구",
  //     function (result, status) {
  //       // 정상적으로 검색이 완료됐으면
  //       if (status === kakao.maps.services.Status.OK) {
  //         const coords = {
  //           lat: result[0].y,
  //           long: result[0].x,
  //         };
  //         console.log("it's okay");
  //         console.log(result[0].y);
  //       } else {
  //         console.log("Hmm, we can't seem to find that address");
  //       }
  //     }
  //   );
  // };

  // const findAddress = (address) => {
  //   geocoder.addressSearch(address, function (result, status) {
  //     if (status === kakao.maps.services.Status.OK) {
  //       console.log("hiiiii");
  //       console.log(result[0]);
  //       return result[0];
  //     }
  //   });
  // };

  // const theSpot = findAddress("제주특별자치도 제주시 첨단로 242");
  // console.log("UMMMM");
  // console.log(theSpot);

  // geocoder.addressSearch(
  //   "제주특별자치도 제주시 첨단로 242",
  //   function (result, status) {
  //     // 정상적으로 검색이 완료됐으면
  //     if (status === kakao.maps.services.Status.OK) {
  //       var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  //       console.log("hereeeeeeee");
  //       console.log(coords);
  //     }
  //   }
  // );

  // getWhatIWant();

  // console.log("hereee");
  // console.log(getLatLong());

  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
}
