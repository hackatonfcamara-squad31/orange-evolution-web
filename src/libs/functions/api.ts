import axios from 'axios'

export function getApiErrorMessage(error: unknown) {
  let errorMessage = ''

  if (axios.isAxiosError(error)) {
    const { data } = error.response
    errorMessage = data.message || error.message
  }

  if (!axios.isAxiosError(error) && error instanceof Error) {
    errorMessage = error.message
  }

  return errorMessage
}
