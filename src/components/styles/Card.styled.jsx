import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 2rem;

  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Flex;

export const StyledCard = styled.div`
  border: 1px solid whitesmoke;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  gap: 1rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;

  height: 45vh;
`;

export const Resim = styled.img`
  height: 28vh;
  width: 50%;
  margin: 3rem;
`;

export const Read = styled.div`
  margin: 3rem;
`;
