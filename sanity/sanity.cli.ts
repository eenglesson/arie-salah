import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '8au5v295',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
