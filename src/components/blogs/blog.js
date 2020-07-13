import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as blogsApi from "../../api/blogsApi";

import BlogDetalle from "./blogDetalle";

// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()

const Blog = ({ IdGrupo = 0 }) => {
  const [blog, blogSet] = useState([]);

  useEffect(() => {
    console.log("me ejecuté dentro de blog.js", IdGrupo);
    blogsApi.getLast(IdGrupo).then((data) => {
      blogSet(data);
      console.log(" traje el blog", IdGrupo, data);
    });

    return () => {
      console.log("estoy saliendo");
    };
  }, []);

  return (
    <div className="w3-container">
      <BlogDetalle Mensajes={blog} />
    </div>
  );
};

Blog.propTypes = {
  IdGrupo: PropTypes.any.isRequired,
};

export default Blog;
