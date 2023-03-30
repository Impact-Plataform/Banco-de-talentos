import { ButtonSocials } from "../ButtonSocials";
import { HeaderContainer } from "./styles";

export const Header = ({ imageSrc }) => {
  return (
    <>
      <HeaderContainer>
        <img src={imageSrc} alt="Star Wars logo" />
        <ButtonSocials
          socials={[
            {
              name: "Instagram",
              imageSrc: "https://res.cloudinary.com/dbnq26wqe/image/upload/v1673715682/others/Instagram_wiegqo.svg",
              url: "https://www.instagram.com/starwars",
            },
            {
              name: "Twitter",
              imageSrc: "https://res.cloudinary.com/dbnq26wqe/image/upload/v1673715682/others/Twitter_t5dave.svg",
              url: "https://twitter.com/starwars",
            },
            {
              name: "Facebook",
              imageSrc: "https://res.cloudinary.com/dbnq26wqe/image/upload/v1673715682/others/Facebook_efs2j4.svg",
              url: "https://www.facebook.com/starwars",
            },
          ]}
        />
      </HeaderContainer>
    </>
  );
};
