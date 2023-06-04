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
              maxLength: 96,
            },
          }),
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