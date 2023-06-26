import * as React from "react";
import { useParams } from "react-router";

import { fetchBlog } from "../../../API/Blogs";
import { CoverImage } from "./CoverImage/CoverImage";

import cn from "./BlogDetail.module.scss";
import { Title } from "../../../Components/Title";
import { Content } from "./Content";
import Loader from "../../../Components/Loader";

export function BlogDetail() {
  const params: any = useParams();
  const [blogDetail, setBlogDetail]: any = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchBlogDetails(params.id);
  }, [params.id]);

  const fetchBlogDetails = async (id: number) => {
    setLoading(true);
    const response = await fetchBlog(id);
    if (response.status == 200) {
      setBlogDetail(response.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  return (
    <div className={cn.blogDetail}>
      {loading ? (
        <Loader />
      ) : (
        blogDetail.length !== 0 && (
          <>
            <Title title={blogDetail.title.rendered ?? ""} />
            <div className={cn.coverImage}>
              <CoverImage
                image={blogDetail._embedded["wp:featuredmedia"][0].source_url}
              />
            </div>
            <div className={cn.content}>
              <Content data={blogDetail.content.rendered} />
            </div>
          </>
        )
      )}
    </div>
  );
}
