/* eslint-disable no-shadow */
import * as React from "react";
import type { Meta, Story } from "@storybook/react";

import { Tab } from "./Tab";
import { TabPanel } from "./TabPanel";

import { Tabs } from "./Tabs";
import type { TabsProps } from "./Tabs.types";

export default {
  component: Tabs,
  subcomponents: { Tab, TabPanel },
  title: "Components/Tabs",
} as Meta;

const Template : Story<TabsProps> = (props: TabsProps) => {
  enum TabsEnum {
    FirstTab,
    SecondTab
  }

  const {
    value: defaultValue = TabsEnum.FirstTab,
    ...otherProps
  } = props;

  const [currentValue, setCurrentValue] = React.useState<number>(defaultValue);

  const handleChange = React.useCallback<TabsProps["onChange"]>(
    (event, newValue?: number) => {
      if (typeof newValue !== "undefined") {
        setCurrentValue(newValue);
      }
    },
    [],
  );

  return (
    <>
      <Tabs {...otherProps} onChange={handleChange} value={currentValue}>
        <Tab id={"first-tab"}
          aria-controls={"first-panel"}
          label={"Operações"} />
        <Tab id={"second-tab"}
          aria-controls={"second-panel"}
          label={"Pessoas"} />
      </Tabs>
      <TabPanel id={"first-panel"}
        aria-labelledby={"first-tab"}
        hidden={currentValue !== TabsEnum.FirstTab}>
        Conteúdo do painel de operações
      </TabPanel>
      <TabPanel id={"second-panel"}
        aria-labelledby={"second-tab"}
        hidden={currentValue !== TabsEnum.SecondTab}>
        Conteúdo do painel de pessoas
      </TabPanel>
    </>
  );
};

export const Playground : Story<TabsProps> = Template.bind({});
Playground.args = {
  "aria-label": "Playground tabs example",
};
