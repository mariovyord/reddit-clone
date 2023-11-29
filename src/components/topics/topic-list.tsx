import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/paths";
import Link from "next/link";
import { Topic } from "@prisma/client";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {topics.map((topic) => (
        <TopicCard key={topic.id} topic={topic}></TopicCard>
      ))}
    </div>
  );
}

function TopicCard({ topic }: { topic: Topic }) {
  return (
    <div>
      <Link href={paths.topicShow(topic.slug)}>
        <Chip color="warning" variant="shadow">
          {topic.slug}
        </Chip>
      </Link>
    </div>
  );
}
