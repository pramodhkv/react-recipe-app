import styled from 'styled-components';
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: #494949;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Lobster Two", Cedarville Cursive;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 0;
  gap: 0.5rem;

  svg {
    font-size: 2rem;
  }
`;
