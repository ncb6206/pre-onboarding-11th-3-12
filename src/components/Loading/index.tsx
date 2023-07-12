import styled from '@emotion/styled';

const Loading = () => {
  return <Loader></Loader>;
};

const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #7a7676;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
