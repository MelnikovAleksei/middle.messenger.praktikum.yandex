import { httpRequest } from './core'

httpRequest.get({
  url: 'http://api.repetit.ru/public/searchSubjects',
  options: {
    searchQueryParams: {
      Max: '10',
      Pattern: 'алгебра'
    }
  }
}).then((res) => {
  if (res.ok) {
    const response = res.json()

    console.log(response)
  }
}).catch((error) => {
  console.error(error)
})
