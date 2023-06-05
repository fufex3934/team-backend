import {defineField, defineType} from 'sanity'

export default defineType({
    name:"cityCouncil",
    title:"CityCouncil",
    type:"document",
    fields:[
        defineField({
            name: 'councilImage',
            title: 'Council image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
          }),
          defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
          }),
          defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
          }),
          defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
          }),
    ]
})