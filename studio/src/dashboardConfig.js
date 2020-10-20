export default {
  widgets: [
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
                  buildHookId: '5f8f3139dcf4512a6e0574fa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-katesfavoritedrinks-studio',
                  apiId: '9516b0d9-f03c-4265-b163-4dc26596880d'
                },
                {
                  buildHookId: '5f8f313987207a2d7b4b516c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-katesfavoritedrinks',
                  apiId: 'dd903e90-c5c9-4db2-a144-7cda08af7801'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KateDK/sanity-gatsby-katesFavoriteDrinks',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-katesfavoritedrinks.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent drink posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
