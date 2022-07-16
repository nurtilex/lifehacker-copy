import { ReactNode } from "react";

export interface IProps {
  children?: ReactNode;
}

export interface ITopic {
  label: string;
  path: string;
}

export interface INavBarItem {
  label: string;
  path: string;
}

export interface ILink {
  label: string;
  path: string;
}
