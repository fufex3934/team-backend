import {defineField, defineType} from 'sanity'

export default defineType({
    name:"upcomingEvents",
    title:"UpcomingEvents",
    type:"document",
    fields:[
        defineField({
            name: 'upcomingImage',
            title: 'Upcoming image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
          }),
          defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 100,
            },
          }),
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
                    { title: 'Emphasis', value: 'em' },
                  ],
                },
              },
              {
                type: 'image',
                options: { hotspot: true },
              },
            ],
            validation: (Rule) =>
              Rule.required().max(500).error('news must be within 500 characters.'),
          },
          defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime',
          }),
          defineField({
            name: 'place',
            title: 'Place',
            type: 'string',
          }),
    ]
})