export type Trip = {
  id: string
  name: string
  startDate: string
  endDate: string
  destinations: string[]
  status: string
}

export type ApiStatus = 'init' | 'loading' | 'success' | 'fail'
