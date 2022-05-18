import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb as BBreadcrumb } from 'react-bootstrap';

const { Item } = BBreadcrumb;

const Breadcrumb = ({ data, onClick, ...props }) => {
  const size = data.length - 1;
  const handleOnClick = (item) => (e) => {
    onClick(item, e);
  }
  return (
    <BBreadcrumb {...props}>
      {
        data.map((item, index) => (
          <Item
            key={`id-${index}`}
            href={item.href}
            active={index === size}
            onClick={handleOnClick(item)}
          >
            {item.title}
          </Item>
        ))
      }
    </BBreadcrumb>
  );
};

Breadcrumb.defaultProps = {
  data: [],
  onClick: () => { }
};

Breadcrumb.propTypes = {
  data: PropTypes.arrayOf(Object),
  onClick: PropTypes.func
};

export default Breadcrumb;
export { Breadcrumb };