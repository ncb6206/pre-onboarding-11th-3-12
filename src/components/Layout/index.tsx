import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Wrap>
      <Outlet />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdf5df;
  font-family: 'Jua', sans-serif;
  color: #5ebec4;
`;

export default Layout;
