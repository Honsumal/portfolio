import React from "react";
import {FaHtml5, FaCss3Alt, FaPython, FaNodeJs} from 'react-icons/fa'
import {DiJavascript1, DiJqueryLogo, DiMaterializecss, DiReact, } from 'react-icons/di'
import {SiHandlebarsdotjs, SiMaterialui, SiExpress, SiMysql, SiMongodb, SiAnsys, SiWolframmathematica, SiLabview} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'

const styles = {
    footer: {
        background: "#a3320b",
        color: "red", 
        position: "fixed", 
        bottom: 0,
        width: '100%',
        height: '10%',
        justifyContent: 'space-between'
    }
  }

function LinkButtons() {
    return (
        <footer style={styles.footer}>
            <div className="foot centered">
                <ul className="link">
                    <li><a href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'><FaHtml5 className = "html"/></a></li>
                    <li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS'><FaCss3Alt className = "css"/></a></li>
                    <li><a href='https://www.javascript.com/'><DiJavascript1 className = "js"/></a></li>
                    <li><a href='https://www.jquery.com/'><DiJqueryLogo className = "jqry"/></a></li>
                    <li><a href='https://www.getbootstrap.com/'><BsFillBootstrapFill className = "btsp"/></a></li>
                    <li><a href='https://www.materializecss.com/'><DiMaterializecss className = "mtcs"/></a></li>
                    <li><a href='https://www.handlebarsjs.com/'><SiHandlebarsdotjs className = "hdbs"/></a></li>
                    <li><a href='https://www.reactjs.org/'><DiReact className = "react"/></a></li>
                    <li><a href='https://www.mui.com/'><SiMaterialui className = "matui"/></a></li>
                    <li><a href='https://www.python.org/'><FaPython className = "pyth"/></a></li>
                    <li><a href='https://www.expressjs.com/'><SiExpress className = "expr"/></a></li>
                    <li><a href='https://www.nodejs.org/'><FaNodeJs className = "node"/></a></li>
                    <li><a href='https://www.mysql.com/'><SiMysql className = "mysql"/></a></li>
                    <li><a href='https://www.mongodb.com/home'><SiMongodb className = "godb"/></a></li>
                    <li><a href='https://www.ansys.com/products/fluids/ansys-fluent'><SiAnsys className = "ansys"/></a></li>
                    <li><a href='https://www.wolfram.com/mathematica/'><SiWolframmathematica className = "math"/></a></li>
                    <li><a href='https://www.ni.com/en-ca/shop/labview.html'><SiLabview className = "labv"/></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default LinkButtons;