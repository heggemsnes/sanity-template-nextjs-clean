// import page from "./page";
import {defineType} from 'sanity'

export const schemaTypes = [
  defineType({
    name: 'externalLink',
    type: 'url',
    title: 'External Link',
  }),

  defineType({
    name: 'pageWithExternalLink',
    type: 'document',
    title: 'Page With External Link',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'link',
        type: 'externalLink',
        title: 'External Link',
      },
    ],
  }),
]
