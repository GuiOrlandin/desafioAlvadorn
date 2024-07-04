import styled from "styled-components";

export const EditActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  background: #16308b;
  min-height: 100vh;

  h2 {
    font-weight: 2rem;
    color: #f5f5f5;
  }
`;
export const EditActivityContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15rem;
  gap: 1rem;
  border-radius: 10px;
  background: #2f1b7e;
  width: 30rem;
  padding: 2rem;
  color: #f5f5f5;
`;
export const NameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #f5f5f5;

  input {
    padding: 0.7rem;
    margin-top: 0.4rem;
    border-radius: 4px;
  }
`;

export const DescriptionInputContainer = styled(NameInputContainer)``;

export const SendActivityEditedInputContainer = styled.button`
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
