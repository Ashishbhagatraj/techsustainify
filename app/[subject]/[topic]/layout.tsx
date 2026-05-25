// app/[subject]/[topic]/layout.tsx  ← nai file banao
import { scanAllParams } from "@/lib/scansitemaptopic";

export async function generateStaticParams() {
  return scanAllParams();
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}