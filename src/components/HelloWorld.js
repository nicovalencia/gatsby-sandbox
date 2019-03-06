import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

const Wrapper = styled.div`
  border: 1px solid violet;
  padding-bottom: ${rhythm(1)};
  text-align: center;
`;

const HelloWorld = () => (
  <Wrapper>
    <h1>Hello World</h1>
  </Wrapper>
);

export default HelloWorld;
