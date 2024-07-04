import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const ActivityInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  background: #16308b;
  min-height: 100vh;
`;
export const ActivityInfoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 15rem;
  border-radius: 10px;
  background: #2f1b7e;
  width: 30rem;
  padding: 2rem;
  color: #f5f5f5;
`;
export const NameAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #2f1b7e;

  p {
    margin-top: 1rem;
  }
`;
export const EditAndDeleteButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
export const EditButtonContainer = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: #cb4444;
  color: #f5f5f5;
  font-weight: 600;

  &:hover {
    background: #cf6161;
  }
`;
export const DeleteButtonContainer = styled(EditButtonContainer)``;

export const DialogTitle = styled(Dialog.Title)`
  font-size: 1.2rem;
  color: #f5f5f5;
  margin-bottom: 1rem;
`;
export const DialogTrigger = styled(Dialog.Trigger)`
  display: flex;
`;

export const CancelButton = styled(Dialog.Close)`
  display: flex;
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  background: #cb4444;

  &:hover {
    background: #cf6161;
  }
`;

export const DialogClose = styled(Dialog.Close)`
  border: none;
  margin: -1rem 0 1rem 12rem;
`;

export const Content = styled(Dialog.Content)`
  flex-direction: column;
  min-width: 16rem;
  border-radius: 6px;
  padding: 2rem 2rem 1.2rem 2rem;
  background: #2f1b7e;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DialogDeleteTriggerButton = styled.button`
  border: none;
  font-size: 0.7rem;
  font-weight: 700;
  background: none;
`;
export const DialogDeleteCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonsOfDialogContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ConfirmButton = styled.button`
  display: flex;
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  background: #cb4444;

  &:hover {
    background: #cf6161;
  }
`;
