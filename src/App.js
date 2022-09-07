import "./App.css";
import { useState } from "react";

function App() {
  const [titles, setTitles] = useState([
    "강남 우동 맛집",
    "용인 고기 맛집",
    "분당 짜장면 맛집",
  ]);
  const [newTitle, setNewTitle] = useState(0);

  const [thumbUp, setThumbUp] = useState([0, 0, 0]);
  const [modal, setModal] = useState(true);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button
        className="modal-button"
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달창 만들기
      </button>
      {titles.map((title, index) => {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setNewTitle(index);
              }}
            >
              {title}
            </h4>
            <span
              onClick={() => {
                const newThumb = [...thumbUp];
                newThumb[index] = newThumb[index] + 1;
                setThumbUp(newThumb);
              }}
            >
              👍
            </span>
            {thumbUp[index]}
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {modal ? <Modal titles={titles} newTitle={newTitle} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.titles[props.newTitle]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button>글 수정</button>
    </div>
  );
}

export default App;
