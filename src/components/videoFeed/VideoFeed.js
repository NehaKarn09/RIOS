import React from "react";
import { backendURL } from "../../utils/backendURL";
import { useParams, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const VideoFeed = () => {
  //   const { id } = useParams();
  const query = useQuery();
  const type = query.get("type");

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h3 className="font-bold text-2xl text-center">Live Video Feed</h3>
          <img
            src={`${backendURL}/video_feed${
              type === "florios" ? "_florios" : ""
            }/`}
            controls
            style={{ width: "40rem", height: "50rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoFeed;
