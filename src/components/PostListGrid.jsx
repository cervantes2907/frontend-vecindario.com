import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Api } from "../services/Api";
//import posts from "./post.json";
import styles from "./PostListGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const PostListGrid = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);


  useEffect(() => {
    Api.get(`/posts?limit=10&page=${page}`)
      .then((response) => {
        setPosts((prevPosts) => prevPosts.concat(response.data.results));
        setHasMore(response.data.page < response.data.total_pages)
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={posts.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.PostListGrid}>
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default PostListGrid;
