import styled from '@emotion/styled';
import { IList } from '../models/api';

const ListItem = (props: IList) => {
  return (
    <>
      <IssueListDiv>
        <IssueListLeft>
          <IssueListHead>
            {props.number} {props.title}
          </IssueListHead>
          <IssueListBody>
            작성자: {props.writer}, 작성일: {props.date}
          </IssueListBody>
        </IssueListLeft>
        <IssueListComment>코멘트: {props.comments}</IssueListComment>
      </IssueListDiv>
      <IssueListLine />
    </>
  );
};

const IssueListDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
  cursor: pointer;
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
  flex-direction: row;
`;

const IssueListComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IssueListLine = styled.div`
  border-bottom: 1px solid black;
`;

export default ListItem;
