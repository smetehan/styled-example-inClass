import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 2rem;
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
  align-items: center;

  /* height: 100vh; */
  @media (max-width: ${({ theme }) => theme.res}) {
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.resp}) {
    flex-direction: column-reverse;
  }
`;

export const Resim = styled.img`
  height: 28vh;
  width: 50%;
  margin: 3rem;
`;

export const Read = styled.div`
  margin: 3rem;
`;
