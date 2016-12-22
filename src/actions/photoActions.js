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
