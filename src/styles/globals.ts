import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 4rem 0;
`;

export const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  img {
    border-radius: 2rem;
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  p {
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 50%;
    color: white;
    transform: translate(-50%, 50%);
    width: 100%;
    height: 40%;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;