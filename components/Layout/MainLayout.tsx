'use client';

import styled from 'styled-components';

const MainLayout = styled.div`
  display: grid;
  grid-template-columns:
    1fr [margin-start] var(--layout-margin) [content-start] minmax(auto, 40rem) [content-end]
    var(--layout-margin) [margin-end] 1fr;

  & > * {
    grid-column-start: margin-start;
    grid-column-end: margin-end;
  }
`;

export default MainLayout;
