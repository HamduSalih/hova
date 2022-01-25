import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import styles from "../../styles/Knowmore.module.css";

export default class KnowMore extends Component {
  render() {
    return (
      <div className={styles.container} id="knowmore">
        <div className={styles.row}>
          <div className={styles.rowItem}>
            <h1 className="inforTitle">What is Hova?</h1>
            <p className="infoContent">
              Hova is simple Real Estate and Property listing app that allows
              users to post videos and pictures of their properties in order for
              people who are searching for their next homes to easily find them
              and contact them.
            </p>
          </div>
          <div className={styles.rowItem}>
            <h1 className="inforTitle">The problem we want to solve.</h1>
            <p className="infoContent">
              Finding a home to buy or rent is one of the most difficult tasks
              home seekers go through in their lives and we want to make that
              easy by providing Hova App to everyone who is looking for a home
              to buy or rent.
            </p>
          </div>
        </div>

        <div>
          <ReactPlayer
            url="http://ungodev.org/hova/hovademo.mp4"
            controls={true}
            width="100%"
          />
        </div>
      </div>
    );
  }
}
