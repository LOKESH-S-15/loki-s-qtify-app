import React from "react";
import styles from "./SerchItemCard.module.css";
import { Link } from "react-router-dom";

const SerchItemCard = ({ searchItem, handleSongToPlay }) => {
  console.log(searchItem);

  return (
    <div>
      {searchItem.songs ? (
        <Link to={`/album/${searchItem.id}`} style={{ textDecoration: "none" }}>
          <div className={styles.serchItemCardCon}>
            <div className={styles.serchItemCardMainCon}>
              <img
                src={searchItem.image}
                alt={searchItem.title}
                className={styles.serchItemCardImg}
              />
              <div className={styles.serchItemCardDetailsCon}>
                <h2>{searchItem.title}</h2>
                <p>{searchItem.title}</p>
              </div>
            </div>
            <p className={styles.follows}>{searchItem.follows} Follows</p>
          </div>
        </Link>
      ) : (
        <div
          className={styles.serchItemCardCon}
          onClick={(e) => handleSongToPlay(e, searchItem)}
        >
          <div className={styles.serchItemCardMainCon}>
            <img
              src={searchItem.image}
              alt={searchItem.title}
              className={styles.serchItemCardImg}
            />
            <div className={styles.serchItemCardDetailsCon}>
              <h2>{searchItem.title}</h2>
              <p>{searchItem.title}</p>
            </div>
          </div>
          <p>{searchItem.likes} Likes</p>
        </div>
      )}
    </div>
  );
};

export default SerchItemCard;
