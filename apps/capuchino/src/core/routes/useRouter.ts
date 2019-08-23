import { useState, useEffect, useMemo, Component } from 'react';
import UniversalRouter from 'universal-router';

import { useLocation } from './useLocation';

export const useRouter = (routes: any, history: any) => {
  const location = useLocation(history);
  const router = useMemo(() => new UniversalRouter(routes), [routes]);
  const [Component, setComponent] = useState();

  useEffect(() => {
    router.resolve(location.pathname).then((Component: any) => {
      setComponent(Component);
    });
  }, [location]);

  return Component;
};
