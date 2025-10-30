import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NavMenuHeader({ routes, isHovered = true, isMobile = false }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col lg:flex-row items-center gap-6">
      {routes.map((route, idx) => {
        if (route.divider) return <div key={`divider-${idx}`} className="w-px h-6 bg-white/40" />;
        if (route.visible === false) return null;

        const isActive = route.path && location.pathname.startsWith(route.path);

        return (
          <button
            key={route.path || `action-${idx}`}
            onClick={() => route.path && navigate(route.path)}
            className={`flex items-center text-(--pink-strong) transition duration-300 hover:scale-105 ${
              isActive ? 'font-bold text-glow' : ''
            }`}
            type="button"
          >
            {(isHovered || isMobile) && (
              <span className="text-lg font-semibold">{route.title}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
