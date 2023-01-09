import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Heading } from "../../components/Heading";
import { GoBackNotFound, NotFoundWrapper } from "./styles";
import { Illustrations } from "../../assets";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate(-1), [navigate]);

  return (
    <NotFoundWrapper>
      <Heading
        level={1}
        color="secondaryLightColor"
        textTransform="uppercase"
        weight="700"
        align="center"
        fontSize="header1"
      >
        Error <span>404</span>
      </Heading>
      <Heading
        level={2}
        color="lightColor"
        textTransform="uppercase"
        weight="700"
        align="center"
      >
        Page Not Found
      </Heading>
      <img src={Illustrations.DarthVader} alt="Darth Vader" />
      <Heading level={3} color="lightColor">
        Maybe the force isn&apos;t with you.
      </Heading>
      <GoBackNotFound onClick={handleClick}>Go Back</GoBackNotFound>
    </NotFoundWrapper>
  );
};

export default PageNotFound;
