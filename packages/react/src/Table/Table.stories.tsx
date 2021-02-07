import * as React from "react";
import type { Meta, Story } from "@storybook/react";
import { Checkbox } from "../Checkbox";
import { Currency } from "../Currency/Currency";
import { Table } from "./Table";
import { TableBody } from "./TableBody";
import { TableCell } from "./TableCell";
import { TableContainer } from "./TableContainer";
import { TableFooter } from "./TableFooter";
import { TableHead } from "./TableHead";
import { TableProps } from "./Table.types";
import { TableRow } from "./TableRow";
import { Time } from "../Time";

export default {
  component: Table,
  subcomponents: { TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow },
  title: `Components/${Table.displayName}`,
} as Meta;

const Template : Story<TableProps> = (props: TableProps) => (
  <TableContainer>
    <Table {...props}>
      <TableHead>
        <TableRow hover={false} selected={false}>
          <TableCell padding={"checkbox"} scope={"col"}>
            <Checkbox inputProps={{
              "aria-label": "select all requests",
            }} />
          </TableCell>
          <TableCell scope={"col"}>Requested at</TableCell>
          <TableCell scope={"col"}>Employer legal name</TableCell>
          <TableCell align={"right"} scope={"col"}>Employee ID</TableCell>
          <TableCell scope={"col"}>Name</TableCell>
          <TableCell scope={"col"}>Brazilian CPF</TableCell>
          <TableCell align={"right"} scope={"col"}>Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow hover={true} selected={false}>
          <TableCell padding={"checkbox"}>
            <Checkbox defaultChecked={false} inputProps={{
              "aria-label": "select request",
            }} />
          </TableCell>
          <TableCell>
            <Time dateStyle={"short"} timeStyle={"short"}>05/12/2020 10:51</Time>
          </TableCell>
          <TableCell>ACME Corporation</TableCell>
          <TableCell align={"right"}>100</TableCell>
          <TableCell>Luisa Mendes dos Santos</TableCell>
          <TableCell>123.456.789-00</TableCell>
          <TableCell align={"right"}><Currency code={"BRL"}>100.00</Currency></TableCell>
        </TableRow>
        <TableRow hover={true} selected={false}>
          <TableCell padding={"checkbox"}>
            <Checkbox defaultChecked={false} inputProps={{
              "aria-label": "select request",
            }} />
          </TableCell>
          <TableCell>
            <Time dateStyle={"short"} timeStyle={"short"}>05/12/2020 10:51</Time>
          </TableCell>
          <TableCell>ACME Corporation</TableCell>
          <TableCell align={"right"}>100</TableCell>
          <TableCell>Luisa Mendes dos Santos</TableCell>
          <TableCell>123.456.789-00</TableCell>
          <TableCell align={"right"}><Currency code={"BRL"}>100.00</Currency></TableCell>
        </TableRow>
        <TableRow hover={true} selected={true}>
          <TableCell padding={"checkbox"}>
            <Checkbox defaultChecked={true} inputProps={{
              "aria-label": "select request",
            }} />
          </TableCell>
          <TableCell>
            <Time dateStyle={"short"} timeStyle={"short"}>05/12/2020 10:51</Time>
          </TableCell>
          <TableCell>ACME Corporation</TableCell>
          <TableCell align={"right"}>100</TableCell>
          <TableCell>Luisa Mendes dos Santos</TableCell>
          <TableCell>123.456.789-00</TableCell>
          <TableCell align={"right"}><Currency code={"BRL"}>100.00</Currency></TableCell>
        </TableRow>
      </TableBody>
      <TableFooter />
    </Table>
  </TableContainer>
);

export const Playground : Story<TableProps> = Template.bind({});
Playground.args = {

};

export const StickyHeaderDisabled : Story<TableProps> = Template.bind({});
StickyHeaderDisabled.args = {
  stickyHeader: false,
};
