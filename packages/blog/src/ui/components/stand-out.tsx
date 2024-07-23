import type { FC, PropsWithChildren } from "react";
import { cn } from "../utils/cn.js";
import { Card, type CardProps } from "./card.js";

export const StandOut: FC<PropsWithChildren<StandOutProps>> = ({
	className,
	children,
}) => <Card className={cn("mx-3", className)}>{children}</Card>;

export interface StandOutProps extends Pick<CardProps, "className"> {}
