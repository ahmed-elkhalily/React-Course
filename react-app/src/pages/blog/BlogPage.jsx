import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router";

const BLOGS = {
  1: {
    title: "Blog No 1",
    content: "Blog No 1 Content",
  },
  2: {
    title: "Blog No 2",
    content: "Blog No 2 Content",
  },
  3: {
    title: "Blog No 3",
    content: "Blog No 3 Content",
  },
};

export default function BlogPage() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setBlog(() => {
      //3
      return BLOGS[blogId];
    });
  }, []);
  if (!blog) {
    return <div>Blog Not Found</div>;
  }

  return (
    <div>
      <div>
        <h2>{blog?.title}</h2>
        <p>{blog?.content}</p>
      </div>
      <NavLink to="/about-us">back to about-us page</NavLink>
    </div>
  );
}
