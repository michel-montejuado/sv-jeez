export type PageContent = {
  type: "title" | "paragraph" | "list" | "list-item" | "cta";
  content: string;
  cta?: {
    text: string;
    url: string;
  };
};
