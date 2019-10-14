import styled from 'styled-components';

export const Container = styled.div`
  align-self: stretch;
  height: 300px;
  max-width: 900px;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 100%;
      border-radius: 4px;
    }

    input {
      display: none;
    }

    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0.4;
      font-weight: bold;

      span {
        font-size: 20px;
        margin-top: 5px;
      }
    }
  }
`;
