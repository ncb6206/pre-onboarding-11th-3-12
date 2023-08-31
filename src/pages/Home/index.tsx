import React from 'react';
import useInput from '../../hooks/useInput';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { validUrl } from '../../components/Common/Utils/valid';
import { extraUrl } from '../../components/Common/Utils/extraction';

const Home = () => {
  const navigate = useNavigate();
  const [gitUrl, onChangeGitUrl] = useInput(
    'https://github.com/vercel/next.js/issues',
  );
  // const { setOrg, setRepo } = useContext(OrgRepoContext);

  const onSubmitUrl = () => {
    if (validUrl(gitUrl)) {
      const { org, repo } = extraUrl(gitUrl);
      const orgRepo = { org: org, repo: repo };

      if (localStorage.getItem('orgRepo')) {
        localStorage.removeItem('orgRepo');
      }

      localStorage.setItem('orgRepo', JSON.stringify(orgRepo));
      return navigate('/issuelist');
    }

    console.error('url이 잘못 되었습니다.');
  };

  return (
    <Wrap>
      <Title>Github URL을 입력해주세요</Title>
      <InputDiv>
        <Input
          type="text"
          id="git-input"
          placeholder="https://github.com"
          value={gitUrl}
          onChange={onChangeGitUrl}
        />
        <Button onClick={onSubmitUrl}>입력</Button>
      </InputDiv>
    </Wrap>
  );
};

const Wrap = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  font-family: 'Jua', sans-serif;
  font-size: 5rem;
  color: #5ebec4;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border: 3px solid;
  padding: 0.5rem;
  font-family: 'Jua', sans-serif;
  font-size: 2rem;
  height: 4rem;
`;

const Button = styled.button`
  display: block;
  position: relative;
  float: left;
  width: 10rem;
  height: 90%;
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

export default Home;
