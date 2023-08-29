import React, { useContext, useEffect, useState, useCallback } from 'react';
import Header from '../../components/Header';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import OrgRepoContext from '../../contexts/OrgRepoContext';
import { getIssue } from '../../services/Issue';
import Loading from '../../components/Loading';
import dating from '../../components/Common/Utils/dating';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const IssueDetail = () => {
  const navigate = useNavigate();
  const [issue, setIssue] = useState<any>([]); // 수정필요
  const { org, repo, number } = useContext(OrgRepoContext);

  const getItem = useCallback(async () => {
    const response = await getIssue({ org, repo, number });
    // console.log(response, response.data);
    if (response.status === 200) {
      setIssue(response.data);
    }
  }, [number, org, repo]);

  useEffect(() => {
    if (!(repo && org && number)) return navigate('/');
    getItem();
    // console.log(issue);
  }, [getItem, navigate, number, org, repo]);

  return (
    <Wrap>
      <Header />
      <IssueDetailDiv>
        {issue.length !== 0 && (
          <>
            <IssueDetailHead>
              <Avatar src={issue.user.avatar_url} alt="avatar" />
              <IssueDetailLeft>
                <IssueDetailTitle>
                  {issue.number} {issue.title}
                </IssueDetailTitle>
                <IssueDetailWrite>
                  <span>작성자: {issue.user.login}</span>
                  <span>작성일: {dating(issue.updated_at)}</span>
                </IssueDetailWrite>
              </IssueDetailLeft>
              <IssueDetailComment>코멘트: {issue.comments}</IssueDetailComment>
            </IssueDetailHead>
            <IssueDetailBody>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {issue?.body}
              </ReactMarkdown>
            </IssueDetailBody>
          </>
        )}
        {issue.length === 0 && <Loading />}
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
