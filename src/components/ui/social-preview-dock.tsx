"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import "./social-preview-dock.css";

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface SocialProfile {
  username?: string;
  xHandle?: string;
  name?: string;
  avatar?: string;
  bio?: string;
  headline?: string;
  location?: string;
  contributions?: number;
  levels?: string;
  cover?: string;
  links?: { github?: string; linkedin?: string; x?: string };
}

export interface SocialPreviewItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  card: React.ReactNode;
}

export interface SocialPreviewDockProps {
  profile?: SocialProfile;
  items?: SocialPreviewItem[];
  email?: string;
  live?: boolean;
  bannerColors?: { linkedin: string[]; x: string[] };
  className?: string;
}

export { SocialPreviewDock as default, SocialPreviewDock } from "./social-preview-dock.jsx";
