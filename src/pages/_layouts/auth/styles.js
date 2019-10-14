import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #22202c, #402845);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      height: 50px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      margin-bottom: 10px;
      padding: 0 20px;
      border: 0;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      height: 50px;
      border-radius: 4px;
      background: #f94d6a;
      border: none;
      color: #ffffff;
      font-weight: bold;
      margin: 5px 0;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }

    a {
      margin-top: 10px;
      color: #ccc;
      opacity: 0.8;

      &:hover,
      &:visited {
        opacity: 1;
      }
    }

    span {
      color: #f94d6a;
      margin-bottom: 10px;
    }
  }
`;
