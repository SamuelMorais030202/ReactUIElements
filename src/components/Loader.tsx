import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoaderSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid transparent;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderSpinner />
    </LoaderContainer>
  );
};

export default Loader;
