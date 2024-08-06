import { Link } from "react-router-dom";
import styled from "styled-components";
import Person1 from "/assets/Person1.svg";
import Person2 from "/assets/Person2.svg";
import Person3 from "/assets/Person3.svg";
import { useEffect, useState } from "react";
import axios from "axios";

// const navList = [
//   {
//     key: 1,
//     img: Person1,
//     name: "대구 야구 코칭, 타격 코칭",
//     star: 4.9,
//     comment: 200,
//     trainername: "오타니 쇼헤이",
//     content:
//       "100% 맞춤형 레슨 진행 / MLB 출신 / 투타 레슨 가능 / 대구 시내에서 가까운 곳 / 날짜 맞춰 드립.ㅁㄴㅇㄹㄴㅁㅇㄹㄴㅇ..",
//     phonenumber: "010-2256-6419",
//     address: "달서구 장기동",
//     love: 6234,
//     introduction: {
//       img: "url",
//       text: "안녕하세요 여러분 저입니다!!",
//     },
//     location: "서울 중구 동호로 241",
//     menu: [
//       {
//         img: "img1",
//         name: "체형 교정 스트레칭",
//         price: 16000,
//       },
//       {
//         img: "img2",
//         name: "퍼스널 트레이닝 1회",
//         price: 30000,
//       },
//       {
//         img: "img3",
//         name: "축구 1회",
//         price: "24000",
//       },
//     ],
//     reviews: [
//       {
//     "reviewId": 1,
//     "userId": 12312,
//     "productId": 314,
//     "memo": "asdf",
//     "star": 3.4,
//     "picture": "dsaf",
//     "createdDate": "2019-12-14"
// },
// {
//     "reviewId": 2,
//     "userId": 1,
//     "productId": 314,
//     "memo": "asdf",
//     "star": 3.4,
//     "picture": "dsaf",
//     "createdDate": "2019-12-14"
// }
//     ],
//   },
//   {
//     key: 2,
//     img: Person2,
//     name: "농구 개인 레슨 연락주세요",
//     star: 4.9,
//     comment: 15,
//     trainername: "루카 돈치치",
//     content: "NBA출신 농구선수 직접 현장 레슨 진행합니다. 언제든 연락주세요. ",
//   },
//   {
//     key: 3,
//     img: Person3,
//     name: "테니스 맞춤 레슨 진행",
//     star: 4.9,
//     comment: 1000,
//     trainername: "노박 조코비치",
//     content:
//       "보유중인 테니스장에서 레슨 진행합니다. 남여 모두 환영. 한달레슨 가능ddddd",
//   },
//   {
//     key: 4,
//     img: Person1,
//     name: "대구 야구 코칭, 타격 코칭",
//     star: 4.9,
//     comment: 200,
//     trainername: "오타니 쇼헤이",
//     content:
//       "100% 맞춤형 레슨 진행 / MLB 출신 / 투타 레슨 가능 / 대구 시내에서 가까운 곳 / 날짜 맞춰 드립...",
//   },
//   {
//     key: 5,
//     img: Person2,
//     name: "대구 야구 코칭, 타격 코칭",
//     star: 4.9,
//     comment: 15,
//     trainername: "오타니 쇼헤이",
//     content:
//       "100% 맞춤형 레슨 진행 / MLB 출신 / 투타 레슨 가능 / 대구 시내에서 가까운 곳 / 날짜 맞춰 드립...",
//   },
//   {
//     key: 6,
//     img: Person3,
//     name: "대구 야구 코칭, 타격 코칭",
//     star: 4.9,
//     comment: 1000,
//     trainername: "오타니 쇼헤이",
//     content:
//       "100% 맞춤형 레슨 진행 / MLB 출신 / 투타 레슨 가능 / 대구 시내에서 가까운 곳 / 날짜 맞춰 드립...",
//   },
//   {
//     key: 7,
//     img: Person1,
//     name: "대구 야구 코칭, 타격 코칭",
//     star: 4.9,
//     comment: 200,
//     trainername: "오타니 쇼헤이",
//     content:
//       "100% 맞춤형 레슨 진행 / MLB 출신 / 투타 레슨 가능 / 대구 시내에서 가까운 곳 / 날짜 맞춰 드립...",
//   },
//   {
//     key: 8,
//     img: Person2,
//     name: "대구 야구 코칭, 타격 코칭",
//     star: 4.9,
//     comment: 15,
//     trainername: "오타니 쇼헤이",
//     content:
//       "100% 맞춤형 레슨 진행 / MLB 출신 / 투타 레슨 가능 / 대구 시내에서 가까운 곳 / 날짜 맞춰 드립...",
//   },
//   {
//     key: 9,
//     img: Person3,
//     name: "대구 야구 코칭, 타격 코칭",
//     star: 4.9,
//     comment: 1000,
//     trainername: "오타니 쇼헤이",
//     content:
//       "100% 맞춤형 레슨 진행 / MLB 출신 / 투타 레슨 가능 / 대구 시내에서 가까운 곳 / 날짜 맞춰 드립...",
//   },
// ];
const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 256px);

  overflow: hidden;
  overflow-y: auto;
  // border: 1px solid black;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ListItemText = styled.p`
  margin: 0;
  padding: 0;
  color: black;
`;

export default function ContentList({ category }) {
  const [navList, setNavList] = useState([]);

  const formatCommentCount = (count) => {
    if (count >= 1000) return "1000+";
    if (count >= 500) return "500+";
    if (count >= 100) return "100+";
    if (count >= 50) return "50+";
    if (count >= 10) return "10+";
    return count;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = category
          ? `${import.meta.env.VITE_APP_URL}/product/large/${category}`
          : `${import.meta.env.VITE_APP_URL}/product/all`; // category가 없을 경우 다른 API URL

        const response = await axios.get(url);
        setNavList(response.data); // 서버에서 받은 데이터를 navList에 저장
        console.log(navList);
      } catch (error) {
        console.error("데이터를 가져오는 데 오류가 발생했습니다:", error);
      }
    };

    fetchData();
  }, [category]);
  return (
    <List>
      {navList.map((item, index) => (
        <Link
          to="/productdetail"
          state={item} // 데이터를 state로 전달
          key={item.key}
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div
            style={{
              display: "flex",
              borderBottom: "3px solid rgba(00,00,00,0.05)",
              gap: "15px",
              width: "90%",
              minWidth: "90%",
            }}
            key={index}
          >
            <img
              src={item.image}
              style={{
                width: "180px",
                minWidth: "180px",
                height: "auto",
                // border: "1px solid black",
                margin: "10px 0",
              }}
            />
            <div>
              <ListItemText style={{ fontSize: "30pt" }}>
                {item.title}
              </ListItemText>
              <div style={{ display: "flex", gap: "5px" }}>
                <ListItemText>
                  ★ 평점: {item.star}({formatCommentCount(item.comment)})
                </ListItemText>
                <ListItemText>{item.userName}</ListItemText>
              </div>
              <ListItemText>{item.description}</ListItemText>
            </div>
          </div>
        </Link>
      ))}
    </List>
  );
}
