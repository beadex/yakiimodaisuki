import type { EntryFieldTypes, EntrySys } from "contentful";

export type DailyJournal = {
  contentTypeId: "daily-journal";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    date: EntryFieldTypes.Date;
    description: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
  };
};
