import {defineField, defineType} from 'sanity'

export default defineType({
    name:"welcomePage",
    title:"WelcomePage",
    type:"document",
    fields:[
        defineField({
            name: 'welcomeImage',
            title: 'Welcome image',
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
            name: 'detail',
            title: 'Details',
            type: 'string',
          }),
    ]
})