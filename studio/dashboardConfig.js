export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '615e24fd7f6fa8103cdd0c1e',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-h52cs6pg',
                  apiId: 'fc31980f-7faa-48bd-992b-2b71c5ad3728'
                },
                {
                  buildHookId: '615e24feeed7d80cd7bc436e',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-5mkaibwz',
                  apiId: 'b0491719-c104-44b6-a9a3-1a8d941db121'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dustykeyboard/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-5mkaibwz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
