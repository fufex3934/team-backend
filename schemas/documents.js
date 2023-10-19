export default {
  name: 'pdfDocument',
  title: 'PDF Document',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [{ type: 'file', options: { accept: '.pdf' } }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'time',
      title: 'Time',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
  ],
};
