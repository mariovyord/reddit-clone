import CommentCreateForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";
import PostShow from "@/components/posts/post-show";
import PostShowLoading from "@/components/posts/posts-show-loading";
import paths from "@/paths";
import Link from "next/link";
import { Suspense } from "react";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <Suspense fallback={<PostShowLoading></PostShowLoading>}>
        <PostShow postId={postId}></PostShow>
        <CommentCreateForm postId={postId}></CommentCreateForm>
      </Suspense>
      <Suspense fallback={<PostShowLoading></PostShowLoading>}>
        <CommentList postId={postId}></CommentList>
      </Suspense>
    </div>
  );
}
