import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'blog',
  projectId: 'fnahgdt9', // Replace with your actual project ID from the Sanity dashboard
  dataset: 'production', // Replace with your dataset name
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
