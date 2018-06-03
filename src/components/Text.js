import styled from 'styled-components';
import Animation from './Animation';


const getHeight = type => {
  switch (type) {
    case 'thin': return '4px';
    case 'bold': return '12px';
    default: return type;
  }
};

const PlacehoderText = styled(Animation)`
  background-color: #efefef;
  width: ${props => (props.width ? `${props.width}` : '180px')};
  height: ${props => (props.height ? `${getHeight(props.height)}` : '8px')};
  border-radius: 10px;
`;

export default PlacehoderText;
