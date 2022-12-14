import React from "react";
import {FaHtml5, FaCss3Alt, FaPython, FaNodeJs} from 'react-icons/fa'
import {DiJavascript1, DiJqueryLogo, DiMaterializecss, DiReact, } from 'react-icons/di'
import {SiHandlebarsdotjs, SiMaterialui, SiExpress, SiMysql, SiMongodb, SiAnsys, SiWolframmathematica, SiLabview} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'
import { IconContext } from "react-icons";

const styles = {
    footer: {
      background: "#a3320b",
      color: "red", 
      position: "fixed", 
      bottom: 0,
      width: '100%',
      height: '15%',
      justifyContent: 'space-between'
    }
  }

function LinkButtons() {
    return (
        <IconContext.Provider
            value = {{ color: '#001514', size: '50px'}}
            >
        <footer style={styles.footer}>
            <div className="foot centered">
                <ul className="link">
                    <li id = "html"><FaHtml5/></li>
                    <li id = "css"><FaCss3Alt/></li>
                    <li id = "js"><DiJavascript1/></li>
                    <li id = "jqry"><DiJqueryLogo/></li>
                    <li id = "btsp"><BsFillBootstrapFill/></li>
                    <li id = "mtcs"><DiMaterializecss/></li>
                    <li id = "hdbs"><SiHandlebarsdotjs/></li>
                    <li id = "react"><DiReact/></li>
                    <li id = "matui"><SiMaterialui/></li>
                    <li id = "pyth"><FaPython/></li>
                    <li id = "expr"><SiExpress/></li>
                    <li id = "node"><FaNodeJs/></li>
                    <li id = "mysql"><SiMysql/></li>
                    <li id = "godb"><SiMongodb/></li>
                    <li id = "ansys"><SiAnsys/></li>
                    <li id = "math"><SiWolframmathematica/></li>
                    <li id = "labv"><SiLabview/></li>
                </ul>
            </div>
        </footer>
        </IconContext.Provider>
    )
}

export default LinkButtons;