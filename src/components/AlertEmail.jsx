import { useState } from "react";

export function AlertEmail() {

    const [email, setEmail] = useState(null);

    const enteredName = prompt('Please enter your name')


    const handleClick = (event) => {

        /* call prompt() with custom message to get user input from alert-like dialog */
        
    
        console.log(enteredName)
        console.log(email)
    }
    
  return (
    <>
      {enteredName}
    </>
  );
}
