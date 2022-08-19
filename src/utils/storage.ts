import type { UserInfo } from '@/store/types'

export const tokenStorage = useStorage<string>('token', '')

export const userStorage = useStorage<UserInfo>('userInfo', {})