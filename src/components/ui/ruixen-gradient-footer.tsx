"use client";

import {
  type CSSProperties,
  type ReactNode,
} from "react";

type Stop = { offset: number; color: string };

export interface RuixenGradientFooterProps {
  children?: ReactNode;
  gradientHeight?: string;
  minReveal?: number;
  bars?: number;
  blur?: number;
  peak?: number;
  valley?: number;
  stops?: Stop[];
  className?: string;
  style?: CSSProperties;
  retractRatio?: number;
}

export { RuixenGradientFooter as default, RuixenGradientFooter } from "./ruixen-gradient-footer.jsx";
