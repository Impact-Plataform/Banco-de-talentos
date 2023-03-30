import { SocialContainer, SocialLink } from "./styles";

export const ButtonSocials = ({ socials }) => {
  return (
    <>
      <SocialContainer>
        {socials.map((social) => (
          <SocialLink href={social.url} target="_blank" key={social.name}>
            <img src={social.imageSrc} alt={social.name} />
          </SocialLink>
        ))}
      </SocialContainer>
    </>
  );
};
