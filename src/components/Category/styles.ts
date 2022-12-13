import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  gap: 2rem;
`;

export const CuisineLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f12711, #f5af19);
  }
`;
