import styled from '@emotion/styled';
import { IList } from '../models/api';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import OrgRepoContext from '../../contexts/OrgRepoContext';

const ListItem = (props: IList) => {
  const navigate = useNavigate();
  const { number, setNumber } = useContext(OrgRepoContext);

  const onClickIssue = () => {
    setNumber(props.number);
    return navigate(`/issuedetail/${number}`);
  };

  return (
    <>
      {props.index !== 0 && props.index % 4 === 0 && (
        <Link to="https://www.wanted.co.kr/">
          <Ad
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
            alt="ad"
          />
        </Link>
      )}
      <IssueListDiv onClick={onClickIssue}>
        <IssueListLeft>
          <IssueListHead>
            {props.number} {props.title}
          </IssueListHead>
          <IssueListBody>
            <span>작성자: {props.writer}</span>
            <span>작성일: {props.date}</span>
          </IssueListBody>
        </IssueListLeft>
        <IssueListComment>
          <span>코멘트</span>
          <span>{props.comments}</span>
        </IssueListComment>
      </IssueListDiv>
    </>
  );
};

const Ad = styled.img`
  width: 100%;
`;

const IssueListDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const IssueListLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const IssueListHead = styled.div`
  display: flex;
  flex-direction: row;
`;

const IssueListBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;
`;

const IssueListComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export default ListItem;
