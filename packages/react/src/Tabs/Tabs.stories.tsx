import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Tab } from "./Tab";
import { TabPanel } from "./TabPanel";
import { Tabs } from "./Tabs";
import { TabsProps } from "./Tabs.types";

export default {
  component: Tabs,
  subcomponents: { Tab, TabPanel },
  title: "Components/Tabs",
} as Meta;

const Template : Story<TabsProps> = (props: TabsProps) => {
  const tabsEnum : Record<string, number> = {
    PENDING_TRANSACTIONS: 0,
    TRANSACTIONS_HISTORY: 1,
  };

  const {
    value: defaultValue = tabsEnum.PENDING_TRANSACTIONS,
    ...otherProps
  } = props;

  const [currentValue, setCurrentValue] = React.useState<number>(defaultValue);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentValue(newValue);
  };

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Tabs {...otherProps} onChange={handleChange} value={currentValue}>
        <Tab
          id={"pending-transactions-tab"}
          aria-controls={"pending-transactions-panel"}
          label={"Operações pendentes"} />
        <Tab
          id={"transactions-history-tab"}
          arial-controls={"transactions-history-panel"}
          label={"Histórico"} />
      </Tabs>
      <TabPanel
        id={"pending-transactions-panel"}
        aria-labelledby={"pending-transactions-tab"}
        hidden={currentValue !== tabsEnum.PENDING_TRANSACTIONS}>
        Operações pendentes
      </TabPanel>
      <TabPanel
        id={"transactions-history-panel"}
        aria-labelledby={"transactions-history-tab"}
        hidden={currentValue !== tabsEnum.TRANSACTIONS_HISTORY}>
        Histórico
      </TabPanel>
    </>
  );
};

export const Playground : Story<TabsProps> = Template.bind({});
Playground.args = {
  "aria-label": "Playground tabs example",
};
