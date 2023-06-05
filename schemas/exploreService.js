import {defineField, defineType} from 'sanity'

export default defineType({
    name:"exploreService",
    title:"ExploreService",
    type:"document",
    fields:[
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
      }),
        defineField({
            name: 'exploreImage',
            title: 'Explore image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          
    ]
})