import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const TopBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ButtonsOnBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ButtonOnBarContainer = styled.button`
  display: flex;
  padding: 0.8rem 1rem;
  background: #cb4444;
  color: #f5f5f5;
  font-weight: 700;
  border: none;
  border-radius: 10px;

  &:hover {
    background: #cf6161;
    cursor: pointer;
  }
`;

export const RedirectButtonsOnBarContainer = styled.div`
  display: flex;
  gap: 1.8rem;

  a {
    height: 1.5rem;
    color: #f5f5f5;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid #f5f5f5;
    }
  }
`;

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  flex-direction: column;
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: #f0edf6;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CreateActivityDialogContainer = styled.div`
  display: flex;
  flex-direction: column;
`;



export const Close = styled(Dialog.Close)`
  border: none;
  color: #160548;
  margin-left: 30rem;
`;
