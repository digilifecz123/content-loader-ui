import styled from 'styled-components';

const List = styled.div`
   & > div:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export default List;
