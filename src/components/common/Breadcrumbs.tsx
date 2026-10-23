import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-xs text-charcoal-500 py-3 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-navy transition-colors shrink-0"
      >
        <Home size={13} className="text-charcoal-400" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight size={12} className="text-charcoal-300 shrink-0" />
            {isLast || !item.path ? (
              <span className="font-medium text-navy truncate" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-navy transition-colors truncate"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
