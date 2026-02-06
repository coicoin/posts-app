import type { themes } from "@/shared/constants/constants";

export type Theme = (typeof themes)[keyof typeof themes];
