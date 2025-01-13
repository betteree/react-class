import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";
import App from "./app";

const root = document.getElementById("react");

//타입보호
if (!root) {
  alert("문서에 #react 요소가 존재하지 않습니다.");
} else {
  //React 컴포넌트 -> React 엘리먼트 생성
  const app = React.createElement(App);

  // 생성된 REACT 엘리먼트는
  ReactDOM.createRoot(root).render(app);
}
