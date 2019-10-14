import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;

    h1 {
      font-size: 32px;
      color: #ffffff;
    }

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
        justify-content: baseline;

        span {
          margin-left: 10px;
        }
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  h2 {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
  }
`;

export const Meetup = styled.li`
  display: flex;
  flex-direction: line;
  justify-content: space-between;
  align-items: center;

  height: 62px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px 25px;
  border: 0;
  color: #fff;

  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  div {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);

    span {
      margin-right: 20px;
      font-size: 16px;
    }
  }
`;
