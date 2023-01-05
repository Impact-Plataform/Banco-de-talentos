import React from "react";
import { Heading } from "../../Heading";
import P from "prop-types";

const Info = ({ title, data }) => {
  return (
    <div>
      <Heading
        level={3}
        spacing="0.15em"
        fontSize="small"
        textTransform="uppercase"
        weight="700"
      >
        {title}
      </Heading>
      <Heading
        level={3}
        fontSize="small"
        textTransform="capitalize"
        align="center"
      >
        {data}
      </Heading>
    </div>
  );
};

Info.propTypes = {
  title: P.string,
  data: P.any,
};

export default Info;
