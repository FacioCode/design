import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { LinearProgress } from "./LinearProgress";
import { LinearProgressProps } from "./LinearProgress.types";

export default {
  component: LinearProgress,
  title: "Components/Linear Progress",
} as Meta;

const Template : Story<LinearProgressProps> = (props: LinearProgressProps) => (
  <>
    <LinearProgress
      {...props}
      id={"linear-progress"}
      aria-label={"progress bar for region being loaded"} />
    <div
      id={"region-being-loaded"}
      aria-busy={true}
      aria-describedby={"linear-progress"}
    >Region being loaded</div>
  </>
);

export const Playground : Story<LinearProgressProps> = Template.bind({});
Playground.args = {

};
