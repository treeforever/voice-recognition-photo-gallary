export default function (photoData) {
  return photoData.map((photo) => {
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
  })
}
