import React, { useContext } from 'react';
import styled from '@emotion/styled';
import OrgRepoContext from '../../contexts/OrgRepoContext';

const Header = () => {
  const orgRepo = useContext(OrgRepoContext);
  return (
    <HeaderDiv>
      {orgRepo.org} / {orgRepo.repo}
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
