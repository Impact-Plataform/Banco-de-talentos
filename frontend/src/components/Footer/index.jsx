import { ButtonSocials } from "../ButtonSocials";

import { FooterContainer, FooterText, Heart } from "./styles";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterText>
          Desenvolvido com <Heart /> Por{" "}
          <a href="https://www.linkedin.com/in/salomaosilval/" target="_blank">
            Salomão da Silva Leal
          </a>
        </FooterText>
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
      </FooterContainer>
    </>
  );
};
