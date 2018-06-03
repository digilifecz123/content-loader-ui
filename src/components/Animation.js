import styled, { keyframes } from 'styled-components';

const progress = keyframes`
  0% { left: -500px; };
  100% { left: 100%; };
`;

const Animation = styled.div`
  line-height: 1;
  overflow: hidden;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 500px;
    top: 0;
    left: -500px;
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    );
    animation: ${progress} 2s ease-in-out infinite;
  }
`;

export default Animation;
