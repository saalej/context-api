import React, { useContext } from "react";
import posts from "../data/posts";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ContextTheme } from "../contexts/contextTheme"; // Importa el contexto
import Controllers from "./Controllers";

const Blog = () => {
  const { theme } = useContext(ContextTheme);

  return (
    <div>
      <h2>Blog</h2>
      <StyledList $theme={theme}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <NavLink to={`/post/${post.id}`}>{post.title}</NavLink>
            </li>
          );
        })}
      </StyledList>
      <Controllers></Controllers>
    </div>
  );
};

const StyledList = styled.ul`
  text-align: ${(props) => (props.$theme ? props.$theme.align : "left")};
  list-style-position: ${(props) =>
    props.$theme &&
    (props.$theme.align === "center" || props.$theme.align === "right")
      ? "inside"
      : "outside"};
  padding-left: ${(props) => (props.$theme.align === "center" ? "0" : "40px")};
  font-size: ${(props) =>
    props.$theme ? props.$theme.fontSize + "px" : "16px"};
`;

export default Blog;
