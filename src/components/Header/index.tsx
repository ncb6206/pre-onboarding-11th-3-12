import React from 'react';
import styled from '@emotion/styled';
import { IHeader } from '../models/api';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { org, repo }: IHeader = JSON.parse(
    String(localStorage.getItem('orgRepo')),
  );

  const onClickHome = () => {
    return navigate('/');
  };

  return (
    <HeaderDiv onClick={onClickHome}>
      {org} / {repo}
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  padding: 20px 30px;
  margin: 10px;
  font-size: 2.5rem;
  text-align: center;
  box-shadow: 0 4px 4px -4px black;
  border-radius: 5px;
  cursor: pointer;
`;

export default Header;
