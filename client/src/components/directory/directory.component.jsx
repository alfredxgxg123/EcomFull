import React, { useState } from 'react';
import DirectionMenu from './styles';
import MenuItem from '../menuItem/menuItem.component.jsx';


const Directory = () => {
  const [sections, setSection] = useState([
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
  ]);

  return (
    <DirectionMenu>
      {
        sections.map(({
          title, imageUrl, id, size, linkUrl,
        }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        ))
      }
    </DirectionMenu>

  );
};

export default Directory;
