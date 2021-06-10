export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c23353c3bc2500de73f77a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-b1642qcm",
                  apiId: "5a1f0fd5-ceec-4b46-9083-434a575b92cb",
                },
                {
                  buildHookId: "60c233546dec470fdb563f12",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-n5qggagv",
                  apiId: "2498d97a-a1f4-4f57-b949-e095f046b4c0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/simonachkar/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-n5qggagv.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
