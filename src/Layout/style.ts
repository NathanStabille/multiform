import styled from "styled-components";

export const Container = styled.div`
user-select: none;
  background-color: #05091c;
  color: #fff;
  min-height: 100vh;
`;
export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Steps = styled.div`
  flex: 1;
  display: flex;
`;
export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid #b8b8d4;
`;
export const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
`;
