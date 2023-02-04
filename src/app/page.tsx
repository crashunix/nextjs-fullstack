import PostForm from "./PostForm";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if(!res.ok) {
    console.log(res);
    // throw new Error('Failed to fetch');
  }
  return res.json();
}

export default async function Home() {
  
  const posts = await getPosts();

  return (
    <main>
      <h2 className='text-blue-200'>Hello, Next 13 🔥</h2>
      <PostForm></PostForm>
      {posts.map((post: {id: number, title: string}) => (
        <div key={post.id}>Post - {post.title}</div>
      ))}
    </main>
  )
}