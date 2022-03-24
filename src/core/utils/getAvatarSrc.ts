import { BASE_URL, RESOURSES_END_POINT } from '../HTTPTransport/consts'

export function getAvatarSrc (avatarRelativePath: string): string | null {
  if (avatarRelativePath) {
    return `https://${BASE_URL}/api/v2${RESOURSES_END_POINT}${avatarRelativePath}`
  } else {
    return null
  }
}
