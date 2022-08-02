import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 13px;
    color: #b8b8d4;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }
  hr {
    height: 1px;
    border: 0;
    background-color: #b8b8d4;
    margin: 30px 0;
  }

  label {
    font-size: 13px;

    input {
      display: block;
      margin-top: 10px;
      margin-bottom: 30px;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 10px;
      border: 2px solid #17c3b2;
      color: #fff;
      outline: 0;
      font-size: 15px;
      background-color: transparent;
    }
  }

  button {
    margin-top: 10px;
    margin-right: 15px;
    padding: 5px 25px;
    border: 2px solid #17c3b2;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    text-align: center;
    font-size: 13px;
    transition: 0.3s;
    z-index: 1;
    font-family: inherit;
    color: #17c3b2;
    cursor: pointer;
  }

  button::before {
    content: "";
    width: 0;
    height: 300%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(35deg);
    background: #17c3b2;
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }

  button:hover::before {
    width: 100%;
  }

  button:hover {
    color: #111;
  }
`;
