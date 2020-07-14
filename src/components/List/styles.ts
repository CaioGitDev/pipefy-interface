import styled from "styled-components";
import { MdAdd } from 'react-icons/md';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 320px;

  & + div {
    border-left: 1px solid rgba(0,0,0,0.05);
  }

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    > h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    > button {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: var(--notification);
      border: 0;
      cursor: pointer;

      -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
      box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    }

  }

  > ul {
      margin-top: 30px;
    }
`;

export const AddMore = styled(MdAdd)`
  width: 24px;
  height: 24px;
  color: var(--white);
`;