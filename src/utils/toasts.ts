import { Theme } from 'contexts/ThemeContext'
import { toast } from 'react-toastify'

export type ToastTypes = 'success' | 'error' | 'info' | 'warning'

export const showToast = (theme: Theme, msg: string) => {
  toast(msg, {
    theme: theme
  })
}

export const showToastSuccess = (theme: Theme, msg: string) => {
  toast.success(msg, {
    theme: theme === 'light' ? 'colored' : 'dark'
  })
}

export const showToastError = (theme: Theme, msg: string) => {
  toast.error(msg, {
    theme: theme === 'light' ? 'colored' : 'dark'
  })
}

export const showToastInfo = (theme: Theme, msg: string) => {
  toast.info(msg, {
    theme: theme === 'light' ? 'colored' : 'dark'
  })
}

export const showToastWarning = (theme: Theme, msg: string) => {
  toast.warning(msg, {
    theme: theme === 'light' ? 'colored' : 'dark'
  })
}

export const showToastLoading = (
  theme: Theme,
  msg: string,
  type: ToastTypes
) => {
  const id = toast.loading('Carregando...', {
    theme: theme === 'light' ? 'colored' : 'dark'
  })

  setTimeout(() => {
    toast.update(id, {
      render: msg,
      type: type,
      isLoading: false,
      autoClose: 3000
    })
  }, 2000)
}
