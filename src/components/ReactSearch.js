import React from "react";
import styles from  "./mystyle.module.css";

function ReactSearch(){
return(
  <input type="search"  placeholder="Search" className={styles.reactsearch} />
);
}
export default ReactSearch;