import React, { useEffect, useState, useCallback } from 'react';
import Header from '../../components/Header';
import styled from '@emotion/styled';
import ListItem from '../../components/ListItem';
import { getIssue } from '../../services/Issue';
import { IIssueList } from '../../components/models/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { extraUrl } from '../../components/Common/Utils/extraction';

const IssueList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [List, setList] = useState<any>([]); // 수정 필요
  const orgRepo = extraUrl(location.state.url);

  const getIssues = useCallback(async () => {
    const response = await getIssue(orgRepo);
    console.log(response);
    setList(response);
  }, [orgRepo]);

  useEffect(() => {
    if (!location.state.url) return navigate('/');
    getIssues();
  }, []);

  return (
    <Wrap>
      <Header org={location.state.org} repo={location.state.orepo} />
      <IssueListDiv>
        {List.data &&
          List.data.map((list: IIssueList) => (
            <ListItem
              key={list.id}
              id={list.id}
              number={list.number}
              title={list.title}
              writer={list.user.login}
              date={list.updated_at}
              comments={list.comments}
            />
          ))}
        {!List.data && <span>검색결과를 가져올 수 없습니다</span>}
      </IssueListDiv>
    </Wrap>
  );
};

const Wrap = styled.main`
  width: 80%;
`;

const IssueListDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default IssueList;
