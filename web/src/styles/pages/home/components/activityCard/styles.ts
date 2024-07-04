import styled from "styled-components";

export const ActivityCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #2f1b7e;
  color: #f5f5f5;
  padding: 1rem 1rem 1.2rem 1.7rem;
  border-radius: 10px;
  width: 32rem;

  h1 {
    font-size: 1.4rem;
    color: #d9d9d9;
  }
  p {
    font-size: 0.8rem;
    color: #A4A0A0;
    margin-top: 0.3rem;
  }
`;

export const NameAndEditButtonActivityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;
