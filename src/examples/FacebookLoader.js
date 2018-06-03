import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash/fp';
import {
  Circle,
  PlacehoderText,
  List,
} from '../components';

const listItems = [{ width: '200px' }, { width: '230px' }, { width: '180px' }];

const renderList = map(item => <PlacehoderText width={item.width} height="thin" />);

export default () => (
  <div>
    <HeaderWrapper>
      <Circle size="40px" />
      <PlacehoderTextWrapper>
        <PlacehoderText height="thin" width="80px" />
        <PlacehoderText height="thin" width="120px" />
      </PlacehoderTextWrapper>
    </HeaderWrapper>
    <List>
      {renderList(listItems)}
    </List>
  </div>
);


export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const PlacehoderTextWrapper = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;

  & > div:not(:last-child) {
    margin-bottom: 8px;
  }
`;