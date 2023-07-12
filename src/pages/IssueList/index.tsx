import React, { useEffect, useState, useContext, useRef } from 'react';
import Header from '../../components/Header';
import styled from '@emotion/styled';
import ListItem from '../../components/ListItem';
import { IIssueList } from '../../components/models/api';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import OrgRepoContext from '../../contexts/OrgRepoContext';
import { getIssues } from '../../services/Issue';

const IssueList = () => {
  const navigate = useNavigate();
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const [pageLoading, setPageLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [List, setList] = useState<any>([]); // 수정 필요
  const [page, setPage] = useState(1);
  const { org, repo } = useContext(OrgRepoContext);

  const fetchMoreLists = async () => {
    setPageLoading(true);
    const response = await getIssues({ org, repo, page });
    if (response.status === 200) {
      setList((prev: any) => [...prev, ...response.data]); // 수정필요
    }
    setHasNextPage(response.data.length === 10);
    if (response.data.length) {
      setPage(prev => prev + 1);
    }
    setPageLoading(false);
  };

  useEffect(() => {
    if (!(repo && org)) return navigate('/');
    if (!observerTargetEl.current || !hasNextPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        fetchMoreLists();
      }
    });
    io.observe(observerTargetEl.current);

    return () => {
      io.disconnect();
    };
  }, [fetchMoreLists, hasNextPage]);

  return (
    <Wrap>
      <Header />
      <IssueListDiv>
        {List.length !== 0 &&
          List.map((list: IIssueList, index: number) => (
            <ListItem
              key={list.id}
              id={list.id}
              number={list.number}
              title={list.title}
              writer={list.user.login}
              date={list.updated_at}
              comments={list.comments}
              index={index}
            />
          ))}
        {pageLoading && <Loading />}
        {!pageLoading && <div ref={observerTargetEl} />}
      </IssueListDiv>
    </Wrap>
  );
};

const Wrap = styled.main`
  width: 80%;
  height: 100vh;
`;

const IssueListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default IssueList;
