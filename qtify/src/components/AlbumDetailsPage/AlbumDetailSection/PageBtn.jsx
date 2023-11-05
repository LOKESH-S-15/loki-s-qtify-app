import React from "react";
import { IconButton } from "@mui/material";
const PageBtn = ({ page, selected,handlePage }) => {
  return (
    <div>
      {selected === page ? (
        <IconButton
          sx={{
            height: 22,
            width: 22,
            backgroundColor: "green",
            fontSize: "14px",
          }}
          onClick={()=>{handlePage(page,"num")}}
        >
          {page}
        </IconButton>
      ) : (
        <IconButton
          sx={{
            height: 22,
            width: 22,
            backgroundColor: "white",
            fontSize: "14px",
          }}
          onClick={()=>{handlePage(page,"num")}}
        >
          {page}
        </IconButton>
      )}
      
    </div>
  );
};

export default PageBtn;
