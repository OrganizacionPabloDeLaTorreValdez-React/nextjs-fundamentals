import PostCard from "@/components/PostCard";
import "./posts.css";

async function loadPosts() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.ok ? res.json() : Promise.reject('error'))
    .catch(err => []);

  // await new Promise((resolve) => {
    // setTimeout(resolve, 3000);
  // });
  return data;
}

// RSC (React Server Component)
async function PostsPage() {
  const posts = await loadPosts();

  return (
    <div className="grid">
      {
        posts.map(post =>
          <PostCard 
            key={post.id}
            post={post}
          />
        )
      }
    </div>
  );
}

export default PostsPage;