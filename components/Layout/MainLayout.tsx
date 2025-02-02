'use client';

import styled from 'styled-components';

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr [margin-start] 4rem [content-start] minmax(auto, 40rem) [content-end] 4rem [margin-end] 1fr;

  & > * {
    grid-column-start: content-start;
    grid-column-end: content-end;
  }
`;

export default MainLayout;
