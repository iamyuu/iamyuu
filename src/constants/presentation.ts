type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "yusuf@iamyuu.dev",
  title: "Hey, I’m Yusuf 👋",
  // profile: "/profile.webp",
  description:
    "Bonjour, I'm a *frontend developer* with over *4 years* of web experience. I'm currently working with *React*. Outside of work I do some sports and watch movie and learning *Flutter* and *Jetpack Compose*.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/iamyuu027",
    },
    {
      label: "GitHub",
      link: "https://github.com/iamyuu",
    },
    {
      label: "Telegram",
      link: "https://t.me/iamyuu027",
    },
  ],
};

export default presentation;
