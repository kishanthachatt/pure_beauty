import * as React from "react";

import { Title } from "../../Components/Title";
import { BlogCard } from "./BlogCard";
import { BlogsProps as Props } from "./Blogs.interface";
import { fetchAllBlogs } from "../../API/Blogs";

import cn from "./Blogs.module.scss";
import { generateAlignment } from "./Blogs.utils";
import { BlogsCover } from "./BlogsCover";
import Loader from "../../Components/Loader";

export function Blogs(props: Props) {
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    const response = await fetchAllBlogs();
    if (response.status == 200) {
      setBlogs(response.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const renderBlogs = () => {
    return blogs.map((item: any, index: number) => {
      return (
        <BlogCard
          id={item.id}
          title={item.title.rendered}
          type={item.type}
          photoLeftAlign={generateAlignment(index)}
          image={item._embedded["wp:featuredmedia"][0].source_url}
        />
      );
    });
  };
  return (
    <div>
      <Title title="Blogs" />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={cn.cardsContainer}>{renderBlogs()}</div>
          <BlogsCover />
        </>
      )}
    </div>
  );
}
