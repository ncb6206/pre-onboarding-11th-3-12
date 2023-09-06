import styled from '@emotion/styled';
import { IList } from '../models/api';
import { Link, useNavigate } from 'react-router-dom';

const ListItem = (props: IList) => {
  const navigate = useNavigate();

  const onClickIssue = () => {
    return navigate(`/issuedetail/${props.number}`);
  };

  return (
    <>
      {(props.index === 0 || props.index % 4 === 0) && (
        <Link to="https://github.com/ncb6206/">
          <Ad
            src="https://camo.githubusercontent.com/610a398f79b84273e9306ec9f58eeebb25aa7b8bab5563ceb3448646a5be4ebd/68747470733a2f2f63617073756c652d72656e6465722e76657263656c2e6170702f6170693f747970653d7472616e73706172656e7426636f6c6f723d6175746f26637573746f6d436f6c6f724c6973743d3236266865696768743d3135302673656374696f6e3d68656164657226746578743d497427732532304e6125323047697468756226666f6e7453697a653d393026616e696d6174696f6e3d66616465496e"
            alt="ad"
          />
        </Link>
      )}
      <IssueListDiv onClick={onClickIssue}>
        <IssueListLeft>
          <IssueListHead>
            #{props.number} {props.title}
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
  height: 5vh;
  margin-top: 0.5rem;
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
  background-color: #f8f6ee;
`;

const IssueListLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
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
