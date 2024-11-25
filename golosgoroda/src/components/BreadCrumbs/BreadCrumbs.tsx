import React from 'react';
import { Link } from 'react-router-dom';
import './BreadCrumbs.css'

interface BreadcrumbsProps {
    paths: { label: string; path: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ paths }) => {
    return (
        <div className="breadcrumbs">
            {paths.map((item, index) => (
                <span key={index}>
          <Link to={item.path} className="breadcrumb-item">
            {item.label}
          </Link>
                    {index < paths.length - 1 && <span className="breadcrumb-separator"> / </span>}
        </span>
            ))}
        </div>
    );
};

export default Breadcrumbs;
