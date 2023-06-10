import database from '@/lib/db';
import { ObjectId } from 'mongodb';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const tech = url.searchParams.get('tech');
	let query = {};

	if (tech) {
		query = { tech: { $in: [tech] } };
	}

	const projects = await database.collection('projects').find(query).toArray();
	const formattedProjects = projects.map((project) => {
		return {
			_id: project._id.toString(),
            name: project.name,
            description: project.description,
            content: project.content,
            tech: project.tech,
            links: project.links
		};
	});

	return {
		projects: formattedProjects
	};
}
