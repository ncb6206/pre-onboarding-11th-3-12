import React from 'react';
import Header from '../../components/Header';
import styled from '@emotion/styled';
import ListItem from '../../components/ListItem';

const IssueDetail = () => {
  return (
    <Wrap>
      {/* <Header /> */}
      <IssueDetailDiv>
        <IssueDetailHead>
          <div>avatar</div>
          <ListItem
            key={IssueDummy.id}
            id={IssueDummy.id}
            number={IssueDummy.number}
            title={IssueDummy.title}
            writer={IssueDummy.user.login}
            date={IssueDummy.updated_at}
            comments={IssueDummy.comments}
          />
        </IssueDetailHead>
        <IssueDetailBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at
          consequuntur cumque molestias placeat error cum laborum enim,
          consequatur sequi impedit iusto nihil id repellat numquam non voluptas
          ullam dicta?
        </IssueDetailBody>
      </IssueDetailDiv>
    </Wrap>
  );
};

export default IssueDetail;

const Wrap = styled.main`
  width: 80%;
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
`;

const IssueDetailBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const IssueDummy = {
  id: 1232114,
  number: '#111',
  title: 'issue title',
  user: {
    login: 'name',
  },
  updated_at: '2019년 12월 31일',
  comments: '67',
};
