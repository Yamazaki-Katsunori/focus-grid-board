import { BaseTabs } from '@base/tabs/BaseTabs';
import { MAIN_TABS } from '@domain/focusGrid/focusMainTab/focusMainTabData';
import { useFocusMainTabs } from '@domain/focusGrid/focusMainTab/hooks/useFocusMainTabs';

export function FocusMainTabs() {
  const { activeTab, handleChange } = useFocusMainTabs();

  return (
    <div>
      <BaseTabs
        items={MAIN_TABS}
        value={activeTab}
        onChange={handleChange}
        aria-label="メインコンテンツの切り替え"
      />
    </div>
  );
}
