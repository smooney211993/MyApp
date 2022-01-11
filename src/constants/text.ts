export default {
  tripListItem: {
    getTripLength: (startDate: string, endDate: string) => `${startDate} - ${endDate}`,
    formatTripStatus: (status: string) => {
      switch (status) {
        case 'NOT_STARTED':
          return 'Not Started'
        case 'STARTED':
          return 'Started'
        case 'FINISHED':
          return 'Finished'
        default:
          return ''
      }
    },
  },
}
