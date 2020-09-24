import React from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

import DirectionMenu from './styles';
import MenuItem from '../menuItem/menuItem.component.jsx';



const Directory = ({ sections }) => (
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

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
