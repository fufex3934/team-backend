export default{
    name: 'home',
    title: 'Home News',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [],
            lists: [],
            marks: {
              decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' }
              ]
            }
          },
          {
            type: 'image',
            options: { hotspot: true }
          }
        ]
      }
      ,
      {
        name: 'time',
        title: 'Time',
        type: 'datetime',
        // validation: (Rule) => Rule.required(),
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        validation: (Rule) => Rule.required(),
        options: {
          list: [
            { title: 'Harari News', value: 'Harari' },
            { title: 'National News', value: 'National' },
            { title: 'Africa News', value: 'Africa' },
            { title: 'International News', value: 'International' },
          ],
        },
      },
    ],
  }