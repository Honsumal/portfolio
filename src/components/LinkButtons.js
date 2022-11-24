import React from "react";

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
                    <a href="mailto:14leealastair@gmail.com">
                    Email me!
                    </a>
                </li>          
            </ul>
        </div>
    )
}

export default LinkButtons;