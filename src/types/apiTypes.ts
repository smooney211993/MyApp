export type Country = 'New Zealand' | 'Malaysia' | 'Japan'
export type City = 'Bali'
export type TripStatus = 'FINISHED' | 'NOT_STARTED' | 'STARTED'

export type Trip = {
  id: number
  name: string
  startDate: string
  endDate: string
  destination: (Country | City)[]
}
