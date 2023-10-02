// Breadcrumbs.js

import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ paths }) => {
  return (
    <div>
      {paths.map((path, index) => (
        <span key={index}>
          <Link to={path.url}>{path.label}</Link>
          {index < paths.length - 1 && <span> > </span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
