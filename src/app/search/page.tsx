import PostList from "@/components/posts/post-list";
import PostShowLoading from "@/components/posts/posts-show-loading";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div>
      <h1 className="text-xl">Search by: {term}</h1>
      <Suspense fallback={<PostShowLoading></PostShowLoading>}>
        <PostList fetchData={() => fetchPostsBySearchTerm(term)}></PostList>
      </Suspense>
    </div>
  );
}
