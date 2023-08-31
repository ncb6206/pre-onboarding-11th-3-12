import React, { useEffect, useCallback } from 'react';
import Header from '../../components/Header';
import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';
import { getIssue } from '../../services/Issue';
import Loading from '../../components/Loading';
import dating from '../../components/Common/Utils/dating';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { IHeader } from '../../components/models/api';
import { useQuery } from '@tanstack/react-query';

const IssueDetail = () => {
  const navigate = useNavigate();
  const { org, repo }: IHeader = JSON.parse(
    String(localStorage.getItem('orgRepo')),
  );
  const { issueId } = useParams();

  useEffect(() => {
    if (!(repo && org && issueId)) return navigate('/');
  }, [issueId, navigate, org, repo]);

  const getItem = useCallback(async () => {
    return await getIssue({ org, repo, issueId });
  }, [issueId, org, repo]);

  const { isLoading, isFetching, data } = useQuery({
    queryKey: ['issue'],
    queryFn: getItem,
  });

  return (
    <Wrap>
      <Header />
      <IssueDetailDiv>
        {!(isLoading || isFetching) && (
          <>
            <IssueDetailHead>
              <Avatar src={data.data.user.avatar_url} alt="avatar" />
              <IssueDetailLeft>
                <IssueDetailTitle>
                  {data.data.number} {data.data.title}
                </IssueDetailTitle>
                <IssueDetailWrite>
                  <span>작성자: {data.data.user.login}</span>
                  <span>작성일: {dating(data.data.updated_at)}</span>
                </IssueDetailWrite>
              </IssueDetailLeft>
              <IssueDetailComment>
                코멘트: {data.data.comments}
              </IssueDetailComment>
            </IssueDetailHead>
            <IssueDetailBody>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {data.data?.body}
              </ReactMarkdown>
            </IssueDetailBody>
          </>
        )}
        {(isLoading || isFetching) && <Loading />}
      </IssueDetailDiv>
    </Wrap>
  );
};

export default IssueDetail;

const Wrap = styled.main`
  width: 80%;
  min-height: 100vh;
  border-radius: 5px;
  padding: 2rem;
`;

const IssueDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IssueDetailHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const Avatar = styled.img`
  width: 15%;
  height: 15%;
`;

const IssueDetailBody = styled.section`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 40px;
  border-radius: 0px 40px 40px 40px;
  border: 0.5px solid #d0d7de;
  font-weight: 300;
  word-wrap: break-word;

  h1,
  h2 {
    width: 100%;
    padding: 20px 0;
    margin-bottom: 20px;
    border-bottom: 0.5px solid #d0d7de;
  }

  p,
  li {
    margin: 20px 0;
    line-height: 1.2;
  }

  code {
    white-space: break-spaces;
    width: 100%;
    background-color: #eee;
    border-radius: 3px;
    padding: 0 3px;
  }

  img {
    margin: 20px 0;
    width: 100%;
    max-width: 600px;
  }
`;

const IssueDetailLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const IssueDetailTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

const IssueDetailWrite = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;
`;

const IssueDetailComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
