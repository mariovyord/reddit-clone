import PostList from "@/components/posts/post-list";
import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import { fetchTopPosts } from "@/db/queries/posts";
import { Divider } from "@nextui-org/react";

export default async function Home() {
  return (
    <main className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top posts</h1>
        <PostList fetchData={fetchTopPosts}></PostList>
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreateForm></TopicCreateForm>
        <Divider className="my-2"></Divider>
        <h3 className="text-lg mb-2">Topics</h3>
        <TopicList></TopicList>
      </div>
    </main>
  );
}
