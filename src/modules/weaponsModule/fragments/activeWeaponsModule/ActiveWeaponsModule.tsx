import React from "react";
import { Tab, Widget } from "../../../../components";
import PagesChildTemplate from "../../../../templates/pagesChildTemplate";
import styles from "./ActiveWeaponsModule.module.scss";

const ActiveWeaponsModule = () => {
  return(
    <div className={styles.ActiveWeaponsContainer}>
      <Tab/>
    </div>
  )
}

export default ActiveWeaponsModule;