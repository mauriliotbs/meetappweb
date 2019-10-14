import styled from 'styled-components';
import { darken } from 'polished';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  max-width: 900px;
  margin: 60px auto;

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
  }
`;

export const Description = styled(Input)`
  height: 200px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px 20px;
  border: 0;
  color: #fff;
  resize: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const DateDiv = styled.div`
  .react-datepicker-wrapper,
  input {
    width: 100%;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: right;

  button {
    height: 50px;
    border-radius: 4px;
    background: #f94d6a;
    border: none;
    color: #ffffff;
    font-weight: bold;
    margin: 5px 0;
    padding: 5px 20px;

    &:hover {
      background: ${darken(0.03, '#f94d6a')};
    }

    div {
      display: flex;
      align-items: center;

      span {
        margin-left: 10px;
      }
    }
  }
`;
