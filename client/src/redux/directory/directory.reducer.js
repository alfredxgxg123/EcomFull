const INITAL_STATE = {
  sections: [
     {
      title: 'hats',
      imageUrl: 'https://pcituress.s3-us-west-1.amazonaws.com/woman-in-summer-fashion.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'shirts',
      imageUrl: 'https://pcituress.s3-us-west-1.amazonaws.com/t-shirt-store.jpg',
      id: 2,
      linkUrl: 'shop/shirts',
    },
    {
      title: 'shoes',
      imageUrl: 'https://pcituress.s3-us-west-1.amazonaws.com/loafers-leaning-along-white-wall.jpg',
      id: 3,
      linkUrl: 'shop/shoes',
    },
    {
      title: 'womens',
      imageUrl: 'https://pcituress.s3-us-west-1.amazonaws.com/ali-pazani-NufctI2NGJQ-unsplash.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://pcituress.s3-us-west-1.amazonaws.com/fashionable-man-in-hat.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ]
}

const directoryReducer = (state = INITAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;