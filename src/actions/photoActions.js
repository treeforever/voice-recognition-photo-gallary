import axios from 'axios'

export function hello () {
  return {
    type: 'HELLO'
  }
}

export function showAPhoto () {
  return {
    type: 'SHOW_A_PHOTO'
  }
}

export function showPhotos () {
  return {
    type: 'SHOW_PHOTOS'
  }
}

export function flickrPublicPhotos () {
  return {
    type: 'FLICKR_GET_PUBLIC_PHOTOS'
  }
}

export function handleSearch () {
  const url = 'http://localhost:3000/flickr'
  const request = axios.post(url, {
    searchKeyword: 'unknown'
  })
  return {
    type: 'HANDLE_SEARCH',
    payload: request
  }
}
