import styled from 'styled-components';

const StyledForm = styled.form`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 75%;
    position: relative;
  }

  input {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    border-radius: 1rem;
    padding: 1rem 2.5rem;
    font-size: 1rem;
    border: none;
    outline: none;
    font-family: var(--font-family);
    width: 90%;
    transition: all 0.3s ease-in-out;

    &:focus {
        width: 100%;
    }
  }

  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default StyledForm;