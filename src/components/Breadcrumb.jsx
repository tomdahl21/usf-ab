import React from 'react';

export default function Breadcrumb() {
  const breadcrumbs = [
    { label: 'Home', href: '#' },
    { label: 'Browse Products', href: '#' },
    { label: 'Dairy & Eggs', href: '#' },
    { label: 'Cheese', href: '#', active: true },
  ];

  return (
    <div className="bg-white px-4 py-3" style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: '1px' }}>
      <div className="max-w-7xl mx-auto flex gap-2 text-sm">
        {breadcrumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <span style={{ color: '#717073' }}>›</span>}
            {crumb.active ? (
              <span className="font-medium" style={{ color: '#717073' }}>{crumb.label}</span>
            ) : (
              <a href={crumb.href} className="hover:underline" style={{ color: '#5C8727' }}>
                {crumb.label}
              </a>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
