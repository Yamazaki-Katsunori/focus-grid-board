import type { FocusMainTabId } from '@app-types/tabs/FocusMainTabId';
import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { getTabIdFromPath } from '../presentation';
import { TAB_ROUTE_MAP } from '../focusMainTabData';

export function useFocusMainTabs() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab: FocusMainTabId = useMemo(
    () => getTabIdFromPath(location.pathname),
    [location.pathname],
  );

  const handleChange = useCallback(
    (id: string) => {
      const tabId = id as FocusMainTabId;
      const to = TAB_ROUTE_MAP[tabId];

      if (!to) return;

      navigate(to);
    },
    [navigate],
  );

  return { activeTab, handleChange };
}
