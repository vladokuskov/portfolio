import { StringRule, defineField } from "sanity";

const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
        validation: (rule: StringRule) => rule.required(),
      },
    },
    {
      name: "description",
      title: "Project description",
      type: "string",
    },
    {
      name: "live",
      title: "Live URL",
      type: "url",
    },
    {
      name: "github",
      title: "GitHub URL",
      type: "url",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
