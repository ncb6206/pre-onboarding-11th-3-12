import React from 'react';
import styled from '@emotion/styled';
import { IOwnerRepo } from '../models/api';

const Header = (props: IOwnerRepo) => {
  return (
    <HeaderDiv>
      {props.org} / {props.repo}
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  padding: 20px 30px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 4px -4px black;
  border-radius: 5px;
`;

export default Header;
