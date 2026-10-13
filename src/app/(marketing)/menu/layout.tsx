import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/menu");

export default function PageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
