import type { FC } from "react";

import { ButtonLink } from "../../ui/components/button-link.js";
import { Caption } from "../../ui/components/caption.js";
import { CardOverlay } from "../../ui/components/card-overlay.js";
import { Card } from "../../ui/components/card.js";
import { Divider } from "../../ui/components/divider.js";
import { Icon } from "../../ui/components/icon.js";
import { Link } from "../../ui/components/link.js";
import { Text } from "../../ui/components/text.js";
import { Title } from "../../ui/components/title.js";
import { cn } from "../../ui/utils/cn.js";
import type { ChangelogModel } from "../models/changelog.model.js";
import type { ProjectModel } from "../models/project.model.js";
import { Version } from "./version.js";

export const ProjectTiledListItem: FC<ProjectTiledListItemProps> = ({
	project,
	changelogs,
}) => (
	<Card
		style={{
			"--bg-image-url": `url(${project.matter.logoImage})`,
			"--bg-image-dark-url": `url(${project.matter.darkLogoImage})`,
		}}
		className={cn(
			"flex-1 flex-col bg-[image:var(--bg-image-url)] dark:bg-[image:var(--bg-image-dark-url)] bg-right bg-no-repeat bg-[length:auto_200%]",
		)}
		overlay={
			<CardOverlay
				className={cn(
					"bg-gradient-to-l from-transparent to-60% to-slate-50 dark:to-slate-900",
				)}
			/>
		}
	>
		<div className="flex gap-2 items-center z-10">
			<Link href={project.path}>
				<Title
					base="h6"
					className={cn("hover:text-inherit")}
				>
					{project.matter.name}
				</Title>
			</Link>
			<span>•</span>
			<Version
				status={project.matter.status}
				showStatus={true}
			>
				{project.matter.version}
			</Version>
		</div>

		<Caption className={cn("z-10")}>{project.matter.slogan}</Caption>

		<div className="grid grid-cols-2 z-10">
			<div className="flex flex-col">
				<Divider isLeft={false}>
					<Text base="span">Latest Changes</Text>
				</Divider>
				<menu
					className={cn(
						"flex flex-col divide-y divide-dashed divide-slate-300 dark:divide-slate-600",
					)}
				>
					{changelogs.map((changelog) => (
						<li
							className={cn("flex flex-col py-1")}
							key={changelog.id}
						>
							<Link
								size="sm"
								href={changelog.path}
							>
								{changelog.matter.version}
							</Link>
						</li>
					))}
				</menu>
			</div>

			<div className="flex flex-col gap-2 items-end justify-end self-end">
				{project.matter.productionUrl && (
					<ButtonLink
						size="sm"
						target="_blank"
						href={project.matter.productionUrl}
						variant={"outlined"}
						className={cn(
							"bg-slate-50 dark:bg-slate-900 p-2 flex gap-1.5 items-center",
						)}
					>
						<Icon glyph="globe" />
						Production
					</ButtonLink>
				)}

				<ButtonLink
					size="sm"
					target="_blank"
					href={project.matter.sourceCodeUrl}
					variant={"outlined"}
					className={cn(
						"bg-slate-50 dark:bg-slate-900 p-2 flex gap-1.5 items-center",
					)}
				>
					<Icon glyph="github" />
					Source
				</ButtonLink>
			</div>
		</div>
	</Card>
);

export interface ProjectTiledListItemProps {
	project: ProjectModel;
	changelogs: ChangelogModel[];
}
