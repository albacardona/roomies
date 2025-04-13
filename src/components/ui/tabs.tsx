import { tabs } from '@/assets/tabs';
import clsx from 'clsx';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
}

export const Tabs = ({ className, children }: React.PropsWithChildren<Props>) => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentLocation = useMemo(() => {
    if (location) {
      return location.pathname;
    }
  }, [location]);

  return (
    <section className={`size-full ${className}`}>
      <div className="flex items-center p-6 gap-6">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            className={clsx({
              'm-0 py-3 w-40 bg-bg-secondary rounded-full text-lg font-semibold first-letter:capitalize': true,
              'border-2 border-bd-primary': currentLocation === tab.path,
            })}
            onClick={() => navigate(tab.path)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="h-[calc(100vh-6.5rem)] pb-6 px-6 overflow-auto">{children}</div>
    </section>
  );
};
