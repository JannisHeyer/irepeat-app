import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  // Colors //
--main-color: #70abaf;

// Button-Styling //
--button-border-radius: 0.3rem;
--button-height: 2.5rem;
--button-width: 6.5rem;

// Card-Styling //
/*--card-height: 455.13px;
--card-width: 279px;*/
--card-height: 300px;
--card-width: 300px;
--card-margin: 5rem 3rem 0rem 3rem;
--card-border: 1px solid #70abaf;
--card-bgColor: white;
}

html,
body {
  
  user-select: none;
  padding: 0;
  margin: 0;
  
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
& main{

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
