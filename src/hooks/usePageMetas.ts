import { useEffect, useRef } from 'react';

export function usePageMetas(title: string, description: string, appName?: string) {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(document.head.querySelector("meta[name='description']")?.getAttribute("content"));

  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${title}${appName ? " • " + appName : ""}`;

    const metaDescription = document.head.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    return () => {
      document.title = prevTitle.current || originalTitle;
      if (metaDescription) {
        metaDescription.setAttribute("content", prevDescription.current || "");
      }
    };
  }, [title, appName]);
}