import React from 'react';
import styled from 'styled-components';
import { PlacehoderText, Circle } from '../components';

const ListItemLoader = ({ icon }) => (
  <ListPlaceholderWrapper>
    {icon && <Circle />}
    <PlacehoderText />
  </ListPlaceholderWrapper>
);

export default ListItemLoader;

export const ListPlaceholderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;

  & > div {
    margin-right: 8px;
  }
`;
