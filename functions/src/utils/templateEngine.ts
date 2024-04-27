import { Resume } from "../types/resumeTypes";
import * as fs from "fs";
import * as Handlebars from "handlebars";
import * as path from "path";

export async function populateTemplate(
	data: Resume,
	type: string
): Promise<string> {
	const templatePath = path.join(__dirname, '..', 'templates',`${type}.hbs`);
	const templateSource = fs.readFileSync(
		templatePath,
		"utf8"
	);
	const template = Handlebars.compile(templateSource);
	return template(data);
}
