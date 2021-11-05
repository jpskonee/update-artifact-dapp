import React from "react";
import { Grid } from "@material-ui/core";

function BlogPost({ title, post, link, img }) {
  return (
    <a href={link} target="_blank">
      <Grid container>
        <Grid className="blog-card" item xs={11}>
          <img
            className="blog-img"
            src={`/images/blog/${img}`}
            alt="blog pics"
          />
          <div className="blog-title">{title}</div>
          <div className="blog-post">
            {post.slice(0, 120)}...
            <a href={link} target="_blank">
              Read more.
            </a>
          </div>
        </Grid>
      </Grid>
    </a>
  );
}

export default BlogPost;
