'use client';

import styled from 'styled-components';

const MainLayout = styled.div`
  --layout-gutter: minmax(var(--min-layout-gutter), 1fr);

  display: grid;
  grid-template-columns:
    var(--layout-gutter) [margin-start] var(--layout-margin) [content-start] minmax(auto, 40rem) [content-end]
    var(--layout-margin) [margin-end] var(--layout-gutter);

  & > * {
    grid-column-start: margin-start;
    grid-column-end: margin-end;
  }
`;

export default MainLayout;
