import React from "react";
import { Heading } from "../../Heading";
import P from "prop-types";

const Info = ({ title, data }) => {
  return (
    <div>
      <Heading
        style={{ whiteSpace: "nowrap" }}
        level={3}
        spacing="0.15em"
        fontSize="small"
        textTransform="uppercase"
        weight="700"
      >
        {title}
      </Heading>
      <p
        style={{
          textTransform: "capitalize",
          fontSize: ".75rem",
          textAlign: "center",
        }}
      >
        {data}
      </p>
    </div>
  );
};

Info.propTypes = {
  title: P.string,
  data: P.any,
};

export default Info;
