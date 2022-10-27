import content from "../data";
import { Read, Resim, StyledCard } from "./styles/Card.styled";
import Flex from "./styles/Flex.styled";

const Card = () => {
  return (
    <div>
      {content.map((item) => {
        const img = item.image;
        return (
          <StyledCard>
            <Flex>
              <Resim src={`./images/${img}`} alt="img" />
              <Read>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Read>
            </Flex>
          </StyledCard>
        );
      })}
    </div>
  );
};

export default Card;
