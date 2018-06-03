import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash/fp';
import {
  ImagePlaceholder,
  Circle,
  PlacehoderText,
} from '../components';
import ListItemLoader from './ListItemLoader';

const listItemPlaceholders = [1, 2, 3, 4];
const renderList = map(l => <ListItemLoader key={l} icon />);

export default () => (
  <div>
    <HeaderWrapper>
      <Circle size="40px" />
      <PlacehoderTextWrapper>
        <PlacehoderText width="80px" />
        <PlacehoderText width="120px" />
      </PlacehoderTextWrapper>
    </HeaderWrapper>
    <Section>
      <ImagePlaceholder />
      <DetailWrapper>{renderList(listItemPlaceholders)}</DetailWrapper>
    </Section>
  </div>
);

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  & > div:first-child {
    margin-right: 16px;
  }
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
