import React from "react";
import styles from "./AlbumDetailSection.module.css";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AlbumDetailsCardPagination from "./AlbumDetailsCardPagination";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import Skleten from "./Skleten";
const AlbumDetailSection = ({ albumData ,handleSongToPlay}) => {
  const Navigate = useNavigate();
  return (
    <div className={styles.albumDetailsSectionCon}>
      <div className={styles.albumDetailsSectionbackCon}>
        <IconButton
          onClick={() => {
            Navigate("/");
          }}
        >
          <ArrowCircleLeftOutlinedIcon
            sx={{ height: 38, width: 38, color: "white" }}
          />
        </IconButton>
      </div>
      {Object.keys(albumData).length === 0 ? (
        <Skleten/>
      ) : (
        <div>
          <div className={styles.albumDetailsSectionHeadCon}>
            <img
              src={albumData.image}
              alt={"album"}
              className={styles.albumDetailsSectionHeadImage}
            />
            <div className={styles.albumDetailsSectionHeadDeatilsCon}>
              <h1 className={styles.albumDetailsSectionHeadTitle}>
                {albumData.title}
              </h1>
              <p className={styles.albumDetailsSectionHeadDec}>
                {albumData.description}
              </p>
              <div className={styles.albumDetailsSectionHeadSongDeatilsCon}>
                <p>{albumData.songs.length} Songs</p>
                <p>.</p>
                <p>{albumData.follows} Follows</p>
              </div>
              <div className={styles.albumDetailsSectionHeadBtnCon}>
                <Button
                  variant="contained"
                  startIcon={<ShuffleIcon />}
                  className={styles.shuffleBtn}
                >
                  Shuffle
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<DifferenceOutlinedIcon />}
                  className={styles.addToLibBtn}
                >
                  Add to library
                </Button>
              </div>
            </div>
          </div>
          <AlbumDetailsCardPagination songsData={albumData.songs} handleSongToPlay={handleSongToPlay} />
        </div>
      )}
    </div>
  );
};

export default AlbumDetailSection;
