'use client';

import styled from 'styled-components';

const MainLayout = styled.div`
  --layout-gutter: minmax(0.5rem, 1fr);
  --layout-margin: clamp(1.5rem, 9vw + -0.3rem, 6rem);

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
