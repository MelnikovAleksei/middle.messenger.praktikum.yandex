import { BASE_URL, RESOURSES_END_POINT } from '../HTTPTransport/consts'

export function getAvatarSrc (avatarRelativePath: string): string | null {
  if (avatarRelativePath) {
    return `${BASE_URL}${RESOURSES_END_POINT}${avatarRelativePath}`
  } else {
    return null
  }
}
