import React, { useEffect, useCallback } from 'react';
import Header from '../../components/Header';
import styled from '@emotion/styled';
import ListItem from '../../components/ListItem';
import { IHeader, IIssueList } from '../../components/models/api';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { getIssues } from '../../services/Issue';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import _ from 'lodash';

const IssueList = () => {
  const navigate = useNavigate();
  const { org, repo }: IHeader = JSON.parse(
    String(localStorage.getItem('orgRepo')),
  );
  const { ref, inView } = useInView({ threshold: 0.5 });

  const fetchIssueList = useCallback(
    async ({ pageParam = 0 }) => {
      return await getIssues({ org, repo, page: pageParam });
    },
    [org, repo],
  );

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['issueList'],
      queryFn: fetchIssueList,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.data.length !== 0 ? allPages.length + 1 : undefined;
      },
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledFetchNextPage = useCallback(_.throttle(fetchNextPage, 1000), [
    fetchNextPage,
  ]);

  if (hasNextPage && inView && !isFetchingNextPage && !isFetching) {
    throttledFetchNextPage();
  }

  useEffect(() => {
    if (!(repo && org)) return navigate('/');
  }, [navigate, org, repo]);

  return (
    <Wrap>
      <Header />
      <IssueListDiv>
        {data?.pages &&
          data?.pages.map((group, i: number) => (
            <React.Fragment key={i}>
              {group.data.map((list: IIssueList, index: number) => (
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
            </React.Fragment>
          ))}

        {isFetchingNextPage || isFetching ? (
          <Loading />
        ) : (
          <div style={{ height: '50px' }} ref={ref}></div>
        )}
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
