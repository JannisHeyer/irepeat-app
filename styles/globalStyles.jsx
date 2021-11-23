import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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

--card-border: 2px solid #70abaf;
--card-bgColor: white;

// Card positioning //


}

html,
body {
  height: 100vh;
  width: 100vw;
  user-select: none;
  padding: 0;
  margin: 0;
  
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

}

main {
  display: flex;
  height: 80vh;
 margin: 10vh auto 10vh auto;
 justify-content: center;
 align-items: center;

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
button {
  border: none;
}
`;
