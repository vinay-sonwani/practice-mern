import styled from 'styled-components';
import styles from './Component.module.css';

// Second 
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// .myClass {
//   color: red;
// }

// $primary-color: blue;

// body {
//   background-color: lightblue;

//   h1 {
//     color: $primary-color;
//   }
// }
const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 16px;
`;

const MyComponent = () => {
  return (

  <div>
    
    <Button>Click Me</Button>;
    <div css={css`color: hotpink;`}>
      This is a styled component.
    </div>
    <div className={styles.myClass}>Hello World</div>;
    </div>
  )
};
export default MyComponent