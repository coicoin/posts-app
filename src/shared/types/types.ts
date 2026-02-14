import type { themes } from "@/shared/constants/constants";
import type { ReactNode } from "react";

export type Theme = (typeof themes)[keyof typeof themes];

export type Children = { children: ReactNode };

export type Filter = { lenght: number };
