import React from "react";
import styles from "./mystyle.module.css" ;

function Reacttutorial(){
 return(

 <div className={styles.Reacttutorial}><h1>React JS</h1><p>A JavaScript library for building user interfaces</p>
 <div className={styles.Reacttutorial_one}><a href="#" className={styles.react_get}>Get Started</a><a href="#">Take the Tutorial </a></div></div>
 );

}
export default Reacttutorial;