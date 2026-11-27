"use client";

import { useEffect } from "react";
import { LocaleProvider, useLocale } from "@/contexts/LocaleContext";

function HtmlLangSync({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <>{children}</>;
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <HtmlLangSync>{children}</HtmlLangSync>
    </LocaleProvider>
  );
}
