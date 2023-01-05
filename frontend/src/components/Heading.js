import styled, { css } from "styled-components";
import { typeScale, theme } from "../styles";

export const Heading = styled("h1").attrs(({ level }) => ({
  as: `h${level}`,
}))`
  ${({
    color = "white",
    fontSize = ".75rem",
    spacing = "0px",
    textTransform = "none",
    weight = 400,
    align = "start",
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${typeScale[fontSize]};
    font-weight: ${weight};
    letter-spacing: ${spacing};
    text-transform: ${textTransform};
    text-align: ${align};
    `};
`;
