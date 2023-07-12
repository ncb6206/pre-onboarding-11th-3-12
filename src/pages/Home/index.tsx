import React from 'react';
import useInput from '../../hooks/useInput';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { validUrl } from '../../components/Common/Utils/valid';

const Home = () => {
  const navigate = useNavigate();
  const [gitUrl, onChangeGitUrl] = useInput('');

  const onSubmitUrl = () => {
    console.log(gitUrl);
    if (validUrl(gitUrl)) {
      return navigate('/issuelist', { state: { url: gitUrl } });
    } else {
      console.error('url이 잘못 되었습니다.');
    }
  };

  return (
    <Wrap>
      <span>Github URL을 입력해주세요</span>
      <InputDiv>
        <input
          type="text"
          id="git-input"
          placeholder="https://github.com"
          value={gitUrl}
          onChange={onChangeGitUrl}
        />
        <button onClick={onSubmitUrl}>입력</button>
      </InputDiv>
    </Wrap>
  );
};

const Wrap = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export default Home;
