import { Global } from "@emotion/react";


const GlobalStyles = () => {
  return (
    <Global
      styles={() => [
        {
          "*": {
            fontFamily: "monospace"
          },
          "html, body": {
            margin: 0,
            padding: 0,
          },
          "a":{
            color: "inherit",
            textDecoration: "none"
          }
        }
      ]}
    />
  );
};

export default GlobalStyles
