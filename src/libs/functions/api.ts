import axios from 'axios'

export function getApiErrorMessage(error: unknown) {
  let errorMessage = null

  if (axios.isAxiosError(error) && error.response) {
    const { data } = error.response
    errorMessage = data.message || error.message
  }

  if (!axios.isAxiosError(error) && error instanceof Error) {
    errorMessage = error.message
  }

  return (
    errorMessage ||
    'Oops, algo deu errado, por favor tente novamente mais tarde.'
  )
}
