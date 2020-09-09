import React, { createContext, useState } from 'react';

export const TabContext = createContext();

export const TabContextProvider = (props)=> {
  const {
    initialValue,
    className = '',
    children,
    ...restProps
  } = props;

  const [activeTab, changeTab] = useState(initialValue);
  const tabProviderValue = { activeTab, changeTab };

  const classNames = `${className}`;

  return (
    <TabContext.Provider value={tabProviderValue}>
      <div className={classNames} {...restProps}>
        {children}
      </div>
    </TabContext.Provider>
  );
}

export default TabContextProvider; 