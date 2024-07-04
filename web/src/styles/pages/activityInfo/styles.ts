import styled from "styled-components";

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
