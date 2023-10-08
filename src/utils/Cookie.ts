import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const setCookie = (key: string, value: any) => {
  return cookies.set(key, value, { sameSite: 'none', secure: true })
}

export const getCookie = (key: string) => {
  return cookies.get(key)
}

export const removeCookie = (key: string) => {
  return cookies.remove(key, { sameSite: 'none', secure: true });
}

