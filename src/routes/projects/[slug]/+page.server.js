import database from '@/lib/db';
import { ObjectId } from 'mongodb';

import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */

export async function load({ params }) {
	const slug = params.slug;
	const project = await database.collection('projects').findOne({ _id: new ObjectId(slug) });

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project: {
			...project,
			_id: project._id.toString()
		}
	};
}
