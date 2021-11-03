import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
--main-color: #70abaf;
--button-border-radius: 0.3rem;
--button-height: 2.5rem;
--button-width: 6.5rem;
}

html,
body {
  user-select: none;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
& main{
  margin-top: 5rem;
  
}
}

a {
  
  text-decoration: none;
}

li {
  list-style: none;
}

* {
  box-sizing: border-box;

}
`;

export default GlobalStyles;
