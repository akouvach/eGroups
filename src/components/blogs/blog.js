import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as blogsApi from "../../api/blogsApi";

import BlogDetalle from "./blogDetalle";
import Loading from "../intermedio/loading";

// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()

const Blog = ({ IdGrupo = 0 }) => {
  const [blog, blogSet] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    blogsApi.getLast(IdGrupo).then((data) => {
      blogSet(data);
      setIsLoading(false);
    });

    return () => {
      console.log("estoy saliendo");
    };
  }, []);

  return (
    <div className="w3-container">
      <Loading isLoading={isLoading} />
      <BlogDetalle Mensajes={blog} />
    </div>
  );
};

Blog.propTypes = {
  IdGrupo: PropTypes.any.isRequired,
};

export default Blog;
