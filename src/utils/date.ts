import type { CollectionEntry } from "astro:content";
import { siteConfig } from "@/site.config";

export function getFormattedDate(
	date: Date | undefined,
	options?: Intl.DateTimeFormatOptions,
): string {
	if (date === undefined) {
		return "Invalid Date";
	}

	return new Intl.DateTimeFormat(siteConfig.date.locale, {
		...(siteConfig.date.options as Intl.DateTimeFormatOptions),
		...options,
	}).format(date);
}

export function collectionDateSort(
	a: CollectionEntry<"post" | "note">,
	b: CollectionEntry<"post" | "note">,
) {
	return b.data.publishDate.getTime() - a.data.publishDate.getTime();
}


export function getAge() {
	const today = new Date();
	const birth = new Date("2004-12-04");

	let age = today.getFullYear() - birth.getFullYear();

	const hasHadBirthdayThisYear =
		today.getMonth() > birth.getMonth() ||
		(today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

	if (!hasHadBirthdayThisYear) {
		age--;
	}

	return age;
}