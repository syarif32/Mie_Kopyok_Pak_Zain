import type { ReactNode } from "react";
import { pageMetadata, restaurantSchema } from "@/lib/seo";

export const metadata = pageMetadata("/contact");

export default function PageLayout({ children }: { children: ReactNode }) {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema).replace(/</g, "\\u003c") }} />
    {children}</>;
}
