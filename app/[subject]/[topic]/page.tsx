
// import { notFound } from "next/navigation";
// import { allTopicData } from "@/lib/scansitemaptopic";
// import ClientPage from "./clientpage";
// import { TopicData } from "@/lib/types";

// // ✅ Yahan hona chahiye, layout mein nahi
// export async function generateStaticParams() {
//   return Object.keys(allTopicData).map((key) => {
//     const [subject, topic] = key.split("/");
//     return { subject, topic };
//   });
// }

// interface Props {
//   params: Promise<{ subject: string; topic: string }>;
// }

// export default async function Page({ params }: Props) {
//   const { subject, topic } = await params;
//   const raw = allTopicData[`${subject}/${topic}`];
//   if (!raw) notFound();
//   return <ClientPage data={raw as TopicData} subject={subject} topic={topic} />;
// }
import { notFound } from "next/navigation";
import { allTopicData } from "@/lib/scansitemaptopic";
import ClientPage from "./clientpage";
import { TopicData } from "@/lib/types";

interface Props {
  params: Promise<{ subject: string; topic: string }>;
}

// ✅ Static generation
export async function generateStaticParams() {
  return Object.keys(allTopicData).map((key) => {
    const [subject, topic] = key.split("/");
    return { subject, topic };
  });
}

// ✅ SEO metadata
export async function generateMetadata({ params }: Props) {
  const { subject, topic } = await params;

  const raw = allTopicData[`${subject}/${topic}`];

  if (!raw) {
    return {};
  }

  return {
    title: raw.meta?.title,
    description: raw.meta?.description,
    alternates: {
      canonical: `https://techsustainify.com/${subject}/${topic}`,
    },
  };
}

// ✅ Page rendering
export default async function Page({ params }: Props) {
  const { subject, topic } = await params;

  const raw = allTopicData[`${subject}/${topic}`];

  if (!raw) notFound();

  return (
    <ClientPage
      data={raw as TopicData}
      subject={subject}
      topic={topic}
    />
  );
}