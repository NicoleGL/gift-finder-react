import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../constants";
import styles from "./index.module.css";

function Home() {
  const imageLinksAbove = [
    "gilt.com/3bb08466ad01a2261cb83a81a022c569",
    "gilt.com/f11876e4f3368470d920744171bf5dbe",
    "target.com/bd054058149132cbb2df314b1508ba5a",
    "gilt.com/f3642c2b3890f27330b2bbde57871c1e",
    "newegg.com/4d6d248ca19702cfa607a3ae5cf75fbc",
    "target.com/d039f0300133e94385aa875f74be9167",
    "gilt.com/293e7d0ec02cff0c601255aee61f85ab",
    "target.com/17c60ab425c001438165a74c7b7d32c1",
    "target.com/51128a20a9e929b4d3135106d07bc7c4",
    "newegg.com/bb254d6a5a8c5e2ca7ef8028098853b9",
  ];
  const imageLinksBelow = [
    "target.com/513cfdb98b3661b24993e28762598938",
    "gamestop.com/8d5be723802a1df47f330e074c5603c7",
    "academy.com/eef08745c4d8f95a988b2ce9e37445b0",
    "gilt.com/5f7c538bcb237c8e35ca7b595090be0d",
    "target.com/c36dbceabe20ddd42bb99bd3ff96511c",
    "target.com/40d4d77296a320c49bd2c5142294ca3c",
    "gilt.com/01245cbc2966a32339d30f7e47faa1d6",
    "gilt.com/8b6b7e2b87d2190e5c872dba4a924b57",
    "gilt.com/344eb1d5c1054ef89623639602e2eb3a",
    "gilt.com/bb4a2ce725b227231e4d676c58933541",
  ];
  const sourcePath = "https://img.klarnacdn.net/2/thumbnail/";

  return (
    <>
      <div className={`${styles["display-of-products"]} ${styles["above"]}`}>
        {imageLinksAbove.map((link) => (
          <img
            src={sourcePath.concat(link)}
            alt=""
            className={styles["display-image"]}
            key={link}
          />
        ))}
      </div>
      <div className={`${styles["display-of-products"]} ${styles["above2"]}`}>
        {imageLinksAbove.map((link) => (
          <img
            src={sourcePath.concat(link)}
            alt=""
            className={styles["display-image"]}
            key={link}
          />
        ))}
      </div>
      <h1 className={styles.Title}>Klarna Gift Finder</h1>
      <p className={styles.Subtitle}>
        Out of ideas for a gift?
        <br />
        Don't worry, we are here for you.
        <br />
        Let us know how much you are willing to spend and some basic traits of{" "}
        <br />
        your friend/lover/dog... (maybe yourself even?) and we will give some
        ideas.
        <br />
        Simple as that!
      </p>
      <Link to={ROUTE_NAMES.BUDGET} className={styles["Start-button"]}>
        <i className={`${styles["fa-mar"]} fas fa-gift`}></i>Find your gift
      </Link>
      <div className={`${styles["display-of-products"]} ${styles["below"]}`}>
        {imageLinksBelow.map((link) => (
          <img
            src={sourcePath.concat(link)}
            alt=""
            className={styles["display-image"]}
            key={link}
          />
        ))}
      </div>
      <div className={`${styles["display-of-products"]} ${styles["below2"]}`}>
        {imageLinksBelow.map((link) => (
          <img
            src={sourcePath.concat(link)}
            alt=""
            className={styles["display-image"]}
            key={link}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
