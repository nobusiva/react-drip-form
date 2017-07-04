import React from 'react';

const Logo = ({ white, ...rest }) => (
  <svg width="50" height="68" viewBox="0 0 50 68" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <title>React Drip Form</title>
    <path d="M46.805 32.75c1.904 3.352 3 7.2 3 11.315 0 13.04-11.097 23.626-24.744 23.626C11.383 67.69.317 57.107.317 44.066v-.33c0-.234.033-.433.033-.665 0-.166.03-.332.03-.498.066-.663.13-1.327.227-1.958.032-.066.032-.1.032-.165.03-.167.064-.3.096-.466.097-.398.16-.796.258-1.195v-.034c.323-1.294.71-2.488 1.226-3.683 1.29-3.152 3.097-6.205 5.065-9.224C12.027 18.48 16.48 9.954 20.48.464 20.577.2 20.867 0 21.157 0H28.9c.29 0 .55.166.678.465 4 9.49 8.452 18.017 13.195 25.384 1.484 2.288 2.87 4.578 4.032 6.9zm-6.58 16.89c2.74-8.694-1.13-15.795-5.71-22.93-4.26-6.57-8.26-14.1-11.906-22.33-.13-.3-.42-.498-.743-.498-.322 0-.613.2-.742.498C17.48 12.61 13.48 20.14 9.22 26.71 4.64 33.846.77 40.947 3.51 49.64c2.614 8.262 9.808 13.604 18.357 13.67 8.55-.066 15.744-5.408 18.357-13.67z" fill={white ? '#fff' : '#000'} fillRule="evenodd" />
  </svg>
);

export default Logo;
