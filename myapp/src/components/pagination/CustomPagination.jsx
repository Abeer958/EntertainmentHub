import React from 'react'
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

const CustomPagination = ({setPage, numOfPages = 10}) => {

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0)
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          sx={{
            "& .Mui-selected": {
              color: darkTheme.palette.common.white,
            },
            "& .MuiPaginationItem-page": {
              color: darkTheme.palette.common.white,
            },
          }}
          hideNextButton
          hidePrevButton
          color='primary'
        />
      </ThemeProvider>
    </div>
  );
}

export default CustomPagination