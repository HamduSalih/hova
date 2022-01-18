import React, { Component } from "react";
import styles from "../../styles/Banner/Banner.module.css";

export default class Banner extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className='bigTitle'>Find Your Next Home</h1>
        <h1 className='smallTitle'>on HOVA</h1>
      </div>
    );
  }
}
