export const SITE = {
  website: "https://devosfera.vercel.app/",
  author: "iamyuu",
  profile: "https://github.com/iamyuu",
  desc: "A software engineer based in Indonesia",
  title: "iamyuu.dev",
  ogImage: "devosfera-og.webp", // Located in the public folder
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showBackButton: true, // Show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit this post",
    // https://github.com/iamyuu/iamyuu/edit/main/apps/web/src/data/blog/css-moderno-2026.md
    url: "https://github.com/iamyuu/iamyuu/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Jakarta", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
