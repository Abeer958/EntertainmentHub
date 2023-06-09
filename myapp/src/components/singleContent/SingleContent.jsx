import React from 'react'
import './singlecontent.css'
import { img_300, unavailable } from '../../config/config'
import Badge from "@mui/material/Badge";
import ContentModal from '../contentModal/ContentModal'

const SingleContent = ({ id, poster, title, date, media_type, vote_average }) => {
    return (
      <ContentModal media_type={media_type} id={id}>
        <Badge
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <img
          className="poster"
          src={poster ? `${img_300}/${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <div className="subtitle">
          <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
          <span>{date}</span>
        </div>
      </ContentModal>
    );
}

export default SingleContent