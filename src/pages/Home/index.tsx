import React, { useContext } from 'react';
import useInput from '../../hooks/useInput';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { validUrl } from '../../components/Common/Utils/valid';
import { extraUrl } from '../../components/Common/Utils/extraction';
import OrgRepoContext from '../../contexts/OrgRepoContext';

const Home = () => {
  const navigate = useNavigate();
  const [gitUrl, onChangeGitUrl] = useInput('');
  const { setOrg, setRepo } = useContext(OrgRepoContext);

  const onSubmitUrl = () => {
    if (validUrl(gitUrl)) {
      const { org, repo } = extraUrl(gitUrl);
      setOrg(org as string);
      setRepo(repo as string);
      return navigate('/issuelist');
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
