import type { CollectionEntry } from "astro:content";
import { SITE } from "@/config";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  const pubDatetime = dayjs(data.pubDatetime).tz(
    data.timezone || SITE.timezone
  );

  const isPublishTimePassed =
    dayjs().tz(SITE.timezone).valueOf() >
    pubDatetime.valueOf() - SITE.scheduledPostMargin;
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
};

export default postFilter;
