import React from "react";
import Mailto from "react-mailto"

function LinkButtons() {
    return (
        <div className="foot centered">
            <ul className="link">
                <li>
                    <a href='https://github.com/Honsumal/'>
                        Github
                    </a>
                </li>
                
                <li>
                    <a href='https://www.linkedin.com/in/hon-sum-alastair-lee/'>
                        LinkedIn
                    </a>
                </li>

                <li>
                    <a href='https://stackoverflow.com/users/20526502/honsumal'>
                        Stack Overflow
                    </a>
                </li>

                <li>
                <Mailto email="14leealastair@gmail.com" obfuscate={true}>
                    Email me!
                </Mailto>
                </li>          
            </ul>
        </div>
    )
}

export default LinkButtons;