import PostsPage from "../page";
import PostCard from "@/components/PostCard";
import { Suspense } from "react";

async function loadPost(postId) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.ok ? res.json() : Promise.reject('error'))
    .catch(err => []);

  return data;
}

async function PostPage({params}) {
  const post = await loadPost(params.postId);

  return (
    <div>
      <PostCard 
        post={post}
      />
      <hr />
      <h3>Otras publicaciones</h3>

      <Suspense fallback={
        <div>Cargando publicaciones</div>
      }>
        <PostsPage />
      </Suspense>
    </div>
  );
}

export default PostPage;