export default {
    name: 'leaders',
    title: 'Leaders',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required().max(40),
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
        
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
        type: 'text',
       
      },
      {
        name: 'additionalInfo',
        title: 'Additional Info',
        type: 'text',
       
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
       
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
       
      },
      {
        name: 'time',
        title: 'Time',
        type: 'datetime',
      },
    ],
  }
  