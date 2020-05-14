export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebd9eb87c8badd73459d08e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-22-studio',
                  apiId: '9a361f3f-1f6b-47c5-b47f-6ea6711be7fc'
                },
                {
                  buildHookId: '5ebd9eb89cbc3100ceebad23',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-22',
                  apiId: 'b7e628c9-f64e-499c-a08a-f3e65282c5d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evenwestvang/sanity-gatsby-blog-22',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-22.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
