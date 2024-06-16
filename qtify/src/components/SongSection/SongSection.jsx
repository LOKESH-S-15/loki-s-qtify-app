import React, { useState } from "react";
import styles from "./songSection.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import Carousel from "../AlbumSection/Carousel/Carousel";
import { Skeleton, Alert } from "@mui/material";

import { CircularProgress } from "@mui/material";

const SongSection = ({
  songData,
  genreData,
  title,
  type,
  handleFilter,
  selectedFilter,
  handleSongToPlay,
}) => {
  console.log(songData)
  const Genre = ({ genreData }) => {
    return (
      <div className={styles.filterWrapper}>
        {
          (genreData ===
            "Too Many Requests" ||
            genreData.length === 0 ? (
              <div className={styles.CircularProgressFil}>
              <Skeleton
                  variant="rounded"
                  style={{ backgroundColor: "#4140404d" }}
                  width={68}
                  height={34}
                />
                <Skeleton
                variant="rounded"
                style={{ backgroundColor: "#4140404d" }}
                width={68}
                height={34}
              />
              <Skeleton
              variant="rounded"
              style={{ backgroundColor: "#4140404d" }}
              width={68}
              height={34}
            />
            <Skeleton
            variant="rounded"
            style={{ backgroundColor: "#4140404d" }}
            width={68}
            height={34}
          /><Skeleton
          variant="rounded"
          style={{ backgroundColor: "#4140404d" }}
          width={68}
          height={34}
        />
              
              
              
            </div>
            ) : (
              <div className={styles.filterWrapper}>
                <div
                  className={styles.filterCon}
                  value={""}
                  onClick={(e) => {
                    handleFilter(e);
                  }}
                >
                  <p className={styles.filterText}>All</p>
                  {selectedFilter === "" ? (
                    <p className={styles.isSelected}></p>
                  ) : (
                    <p className={styles.isNotSelected}></p>
                  )}
                </div>
                {genreData.map((each) => {
                  return (
                    <div
                      className={styles.filterCon}
                      id={each.key}
                      onClick={(e) => {
                        handleFilter(e);
                      }}
                    >
                      <p className={styles.filterText} id={each.key}>
                        {each.label}
                      </p>
                      {selectedFilter === each.key ? (
                        <p className={styles.isSelected}></p>
                      ) : (
                        <p className={styles.isNotSelected}></p>
                      )}
                    </div>
                  );
                })}
              </div>
            ))
        }
      </div>
    );
  };
  return (
    <div className={styles.albumCon}>
      <div className={styles.albumHeadCon}>
        <h2>{title}</h2>
      </div>
      {<Genre genreData={genreData} />}
      {
        (songData ===
          "Too Many Requests" ||
          songData.length === 0 ? (
            <div className={styles.CircularProgress}>
              <div>
                {" "}
                <Skeleton
                  variant="rounded"
                  style={{ backgroundColor: "#4140404d" }}
                  width={159}
                  height={205}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "2rem" }}
                  width={159}
                  style={{ backgroundColor: "#4140404d" }}
                />
              </div>
              <div>
                {" "}
                <Skeleton
                  variant="rounded"
                  style={{ backgroundColor: "#4140404d" }}
                  width={159}
                  height={205}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "2rem" }}
                  width={159}
                  style={{ backgroundColor: "#4140404d" }}
                />
              </div>
              <div>
                {" "}
                <Skeleton
                  variant="rounded"
                  style={{ backgroundColor: "#4140404d" }}
                  width={159}
                  height={205}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "2rem" }}
                  width={159}
                  style={{ backgroundColor: "#4140404d" }}
                />
              </div>
              <div>
                {" "}
                <Skeleton
                  variant="rounded"
                  style={{ backgroundColor: "#4140404d" }}
                  width={159}
                  height={205}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "2rem" }}
                  width={159}
                  style={{ backgroundColor: "#4140404d" }}
                />
              </div>
              <div>
                {" "}
                <Skeleton
                  variant="rounded"
                  style={{ backgroundColor: "#4140404d" }}
                  width={159}
                  height={205}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "2rem" }}
                  width={159}
                  style={{ backgroundColor: "#4140404d" }}
                />
              </div>
              <div>
                {" "}
                <Skeleton
                  variant="rounded"
                  style={{ backgroundColor: "#4140404d" }}
                  width={159}
                  height={205}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "2rem" }}
                  width={159}
                  style={{ backgroundColor: "#4140404d" }}
                />
              </div>
              <div>
                {" "}
                <Skeleton
                  variant="rounded"
                  style={{ backgroundColor: "#4140404d" }}
                  width={159}
                  height={205}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "2rem" }}
                  width={159}
                  style={{ backgroundColor: "#4140404d" }}
                />
              </div>
              <div>
                {" "}
                <Skeleton
                  variant="rounded"
                  style={{ backgroundColor: "#4140404d" }}
                  width={159}
                  height={205}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "2rem" }}
                  width={159}
                  style={{ backgroundColor: "#4140404d" }}
                />
              </div>
              <div>
                {" "}
                <Skeleton
                  variant="rounded"
                  style={{ backgroundColor: "#4140404d" }}
                  width={159}
                  height={205}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "2rem" }}
                  width={159}
                  style={{ backgroundColor: "#4140404d" }}
                />
              </div>
              <div>
                {" "}
                <Skeleton
                  variant="rounded"
                  style={{ backgroundColor: "#4140404d" }}
                  width={159}
                  height={205}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "2rem" }}
                  width={159}
                  style={{ backgroundColor: "#4140404d" }}
                />
              </div>
              {songData === "Too Many Requests" ? (
                alert(songData,
                alert("please try again after some time"),
                setTimeout(() => {
                  window.location.reload()
                }, 2000))
              ) : (
                ""
              )}
            </div>
          ) : (
            <div>
              <div>
                <Carousel
                  data={songData}
                  renderComponent={(item) => {
                    return (
                      <AlbumCard
                        handleSongToPlay={handleSongToPlay}
                        id={item.id}
                        data={item}
                        type={type}
                      />
                    );
                  }}
                />
              </div>
            </div>
          ))
      }
    </div>
  );
};

export default SongSection;
