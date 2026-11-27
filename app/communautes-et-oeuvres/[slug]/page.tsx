import { notFound } from "next/navigation";
import { siteContent } from "@/data/site-content";
import CommunityDetailClient from "@/components/pages/CommunityDetailClient";

interface CommunityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return siteContent.communities.map((c) => ({
    slug: c.slug,
  }));
}

export default async function CommunityDetailPage({ params }: CommunityPageProps) {
  const { slug } = await params;
  const community = siteContent.communities.find((c) => c.slug === slug);

  if (!community) {
    notFound();
  }

  return <CommunityDetailClient slug={slug} />;
}
