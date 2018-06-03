import styled from 'styled-components';
import Animation from './Animation';

const Circle = styled(Animation)`
  border-radius: 50%;
  width: ${props => (props.size ? `${props.size}` : '16px')};
  height: ${props => (props.size ? `${props.size}` : '16px')};
  background-color: #efefef;
`;

export default Circle;
