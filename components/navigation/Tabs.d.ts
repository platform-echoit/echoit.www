import * as React from "react";

export interface TabItem {
  value: string;
  label: string;
  icon?: string;
}

/** Material 3 primary tabs. */
export interface TabsProps {
  tabs: TabItem[];
  value: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Tabs(props: TabsProps): JSX.Element;
