import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Initial from "./components/Initial";
import About from "./components/About";
import Header from "./components/Header";
import styled from "styled-components";
import Posts from "./components/Posts";
import Error404 from "./components/Error404";
import { ContextTheme } from "./contexts/contextTheme";

const App = () => {
  const { theme } = useContext(ContextTheme);

  return (
    <BrowserRouter>
      <MainContainer>
        <Header></Header>
        <Main $theme={theme}>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Initial />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<Posts></Posts>}></Route>
            <Route path="/acerca-de" element={<About />} />
          </Routes>
        </Main>
      </MainContainer>
    </BrowserRouter>
  );
};

const MainContainer = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  font-size: ${(props) =>
    props.$theme ? props.$theme.fontSize + "px" : "16px"};
  text-align: ${(props) => (props.$theme ? props.$theme.align : "left")};
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;
