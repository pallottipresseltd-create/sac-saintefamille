import { notFound } from "next/navigation";
import { siteContent } from "@/data/site-content";
import ArticleDetailClient from "@/components/pages/ArticleDetailClient";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return siteContent.articles.map((a) => ({
    slug: a.slug,
  }));
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = siteContent.articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailClient slug={slug} />;
}
