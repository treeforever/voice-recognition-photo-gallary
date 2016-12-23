const defaultState = {}

export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case 'HELLO': {
      return {
        ...state
      }
    }

    case 'SHOW_A_PHOTO': {
      return {
        ...state
      }
    }

    case 'SHOW_PHOTOS': {
      return {
        ...state
      }
    }

    case 'HANDLE_SEARCH_FULFILLED': {
      console.log('handle search request succeeded')
      return {
        ...state
      }
    }

    case 'FLICKR_GET_PUBLIC_PHOTOS': {
      // const flickrOptions = {
      //   api_key: process.env.FLICKR_API_KEY,
      //   secret: process.env.FLICKR_SECRET
      // }
      //
      // console.log('inside reducer')
      // Flickr.authenticate(flickrOptions, (error, flickr) => {
      //   // we can now use "flickr" as our API object
      //   console.log('inside Flickr')
      //   flickr.people.getPublicPhotos({
      //     user_id: '122593843@N04',
      //     page: 1,
      //     per_page: 20
      //   }, (err, result) => {
      //     if (err) {
      //       throw new Error('error from flickr.people.getPublicPhotos')
      //     }
      //     console.log('response from flickr:', result)
      //   })
      // })

      return {

      }
    }

    default:
      return state
  }
}
