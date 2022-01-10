export default {
  tripListItem: {
    name: (name: string): string => `name: ${name}`,
    startDate: (startDate: string): string => `start-date: ${startDate}`,
    endDate: (endDate: string): string => `end-date: ${endDate}`,
    destination: (destination: string[]): string => `destination: ${destination.join(', ')} `,
    status: (status: string) => {
      switch (status) {
        case 'NOT_STARTED':
          return 'Status: Not Started'

        case 'STARTED':
          return 'Status: Started'

        case 'FINISHED':
          return 'Status: Finished'
        default:
          return ''
      }
    },
  },
}
