import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  background: #000000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  aside {
    display: flex;
    flex-direction: line;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      text-align: right;
      margin-right: 30px;

      strong {
        color: #ffffff;
        font-size: 14px;
        margin: 4px 0;
      }

      a {
        text-decoration: none;
        color: #999999;
        font-size: 14px;

        &:hover {
          color: ${lighten(0.07, '#999999')};
        }
      }
    }

    button {
      height: 42px;
      border-radius: 4px;
      background: #d44059;
      border: none;
      color: #ffffff;
      font-weight: bold;

      padding: 5px 20px;

      &:hover {
        background: ${darken(0.03, '#D44059')};
      }
    }
  }

  nav a img {
    height: 32px;
  }
`;
