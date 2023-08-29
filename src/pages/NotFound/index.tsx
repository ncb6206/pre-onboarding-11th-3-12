import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <NotFoundDiv>
      <Title>페이지를 찾을 수 없습니다</Title>
      <HomeButton onClick={goHome}>홈으로</HomeButton>
    </NotFoundDiv>
  );
};

const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-family: 'Jua', sans-serif;
  font-size: 5rem;
  color: #5ebec4;
`;

const HomeButton = styled.button`
  display: block;
  position: relative;
  float: left;
  width: 10rem;
  height: 4rem;
  padding: 0;
  margin: 10px 20px 10px 0;
  font-weight: 600;
  text-align: center;
  line-height: 3rem;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0px 5px 0px 0px #1e8185;
  transition: all 0.2s;
  background: #5dc8cd;
  font-family: 'Jua', sans-serif;
  font-size: 2.2rem;
  letter-spacing: 0.1em;
  border: none;

  :hover {
    margin-top: 15px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 0px 0px #1e8185;
    cursor: pointer;
  }
`;

export default NotFound;
