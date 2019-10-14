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
      height: 42px;
      border-radius: 4px;

      border: none;
      color: #ffffff;
      font-weight: bold;
      margin: 5px 0;
      padding: 5px 20px;

      div {
        display: flex;
        align-items: center;
        justify-content: baseline;

        span {
          margin-left: 10px;
        }
      }
    }

    .btn-edit {
      background: #f94d6a;
      margin-right: 10px;

      &:hover {
        background: ${darken(0.07, '#f94d6a')};
      }
    }

    .btn-cancel {
      background: #4dbaf9;

      &:hover {
        background: ${darken(0.07, '#4DBAF9')};
      }
    }
  }

  img {
    height: 300px;
    width: 100%;
    border-radius: 4px;
  }
`;

export const DescriptionDiv = styled.div`
  white-space: pre-wrap;
  line-height: 32px;
  margin: 25px 0;

  p {
    color: #ffffff;
  }
`;

export const LocationTimeDiv = styled.div`
  display: flex;
  justify-content: left;
  align-items: baseline;

  div {
    display: flex;
    align-items: flex-end;
    justify-content: left;
    margin: 15px 20px 0 0;
    color: rgba(255, 255, 255, 0.6);

    span {
      margin-left: 6px;
      font-size: 16px;
    }
  }
`;
