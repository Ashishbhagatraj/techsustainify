// generateStaticParams yahan se hatao
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ subject: string; topic: string }>;
}) {
  await params;
  return <>{children}</>;
}