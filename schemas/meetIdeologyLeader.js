import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'meetLeader',
  title: 'MeetLeaders',
  type: 'document',
  fields: [
    defineField({
      name: 'descriptionOne',
      title: 'Description One',
      type: 'text',
      validation: (Rule) =>
        Rule.max(200).error('The maximum length of description one should be 200 characters.'),
    }),
    defineField({
      name: 'descriptionTwo',
      title: 'Description Two',
      type: 'text',
      validation: (Rule) =>
        Rule.max(200).error('The maximum length of description two should be 200 characters.'),
    }),
    defineField({
      name: 'leaderImage',
      title: 'Leader image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
      validation:(Rule)=>Rule.max(100).error('The maximum length of quote should be 60 characters'),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
});
