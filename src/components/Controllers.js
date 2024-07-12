import React, { useContext } from "react";
import styled from "styled-components";
import { ContextTheme } from "../contexts/contextTheme";

const Controllers = () => {
  const { increaseFont, decreaseFont, alignCenter, alignLeft, alignRight } =
    useContext(ContextTheme);

  return (
    <ContainerController>
      <div>
        <Button onClick={() => increaseFont()}>Aumentar</Button>
        <Button onClick={() => decreaseFont()}>Disminuir</Button>
      </div>
      <div>
        <Button onClick={() => alignLeft()}>Izquierda</Button>
        <Button onClick={() => alignRight()}>Derecha</Button>
        <Button onClick={() => alignCenter()}>Centro</Button>
      </div>
    </ContainerController>
  );
};

const ContainerController = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  background: #165168;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 7px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 3px;

  &:hover {
    background: #191668;
  }
`;

export default Controllers;
