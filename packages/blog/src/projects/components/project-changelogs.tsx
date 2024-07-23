import { format } from "date-fns";
import type { FC } from "react";
import { ArchiveListItem } from "../../ui/components/archive-list-item.js";
import { ArchiveList } from "../../ui/components/archive-list.js";
import type { ChangelogModel } from "../models/changelog.model.js";
import { publishedAtFormat } from "../../content/globals/published-at-format.js";

export const ProjectChangelogs: FC<ProjectChangelogsProps> = ({
	changelogs,
}) => (
	<ArchiveList title={"Changelogs"}>
		{changelogs.map((changelog) => (
			<ArchiveListItem
				key={changelog.id}
				left={changelog.matter.version}
				right={format(changelog.matter.publishedAt, publishedAtFormat.short)}
				href={changelog.path}
			/>
		))}
	</ArchiveList>
);

export interface ProjectChangelogsProps {
	changelogs: ChangelogModel[];
}
