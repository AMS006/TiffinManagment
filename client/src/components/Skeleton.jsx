import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={'100%'}
      height={'100%'}
      backgroundColor="#e1dbdb"
      foregroundColor="#ecebeb"
      className='rounded-lg'
    >
      <rect width="100%" height="100%" />
    </ContentLoader>
  )
}

export default Skeleton