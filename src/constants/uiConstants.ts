export default {
  tripListItem: {
    fontSize: {
      name: 20,
      startDate: 16,
      endDate: 16,
      destinations: 12,
      status: 12,
    },
    fontWeight: {
      name: '700' as FontWeight,
      status: '700' as FontWeight,
    },
  },
}

type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined
