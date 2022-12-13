import styled from "styled-components";
import { motion } from "framer-motion";

export const DetailsWrapper = styled(motion.div)`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  gap: 2rem;

  h2 {
    margin-bottom: 1rem;
  }

  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }

  img {
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: flex-start;

  ul {
    list-style: none;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

export const StyledButton = styled.button`
  background: transparent;
  color: black;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 2px solid black;
  outline: none;
  font-family: var(--font-family);
  cursor: pointer;
`;
