import content from "../data";
import { Read, Resim, StyledCard } from "./styles/Card.styled";
import Flex from "./styles/Flex.styled";

const Card = () => {
  return (
    <div>
      {content.map((item) => {
        const img = item.image;
        if (item.id % 2 === 1) {
          return (
            <StyledCard>
              <Resim src={`./images/${img}`} alt="img" />
              <Flex>
                <Read>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </Read>
              </Flex>
            </StyledCard>
          );
        } else {
          return (
            <StyledCard>
              <Flex>
                <Read>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </Read>
                <Resim src={`./images/${img}`} alt="img" />
              </Flex>
            </StyledCard>
          );
        }
      })}
    </div>
  );
};

export default Card;
