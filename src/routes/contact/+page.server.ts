import { fail } from '@sveltejs/kit';

import type { Actions } from './$types';

const CONTACT_DESTINATION = 'camlc@proton.me';
const CONTACT_SENDER = 'contact@camlc.dev';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactFields = {
	name: string;
	email: string;
	message: string;
};

type ContactEmailBinding = {
	send: (message: {
		from: string;
		to: string | string[];
		subject: string;
		replyTo?: string;
		text?: string;
		html?: string;
	}) => Promise<void>;
};

function getField(formData: FormData, key: keyof ContactFields, maxLength: number) {
	const value = formData.get(key);
	return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function buildPlainTextEmail(fields: ContactFields) {
	return [
		'You received a new message from the contact form on camlc.dev.',
		'',
		`Name: ${fields.name}`,
		`Email: ${fields.email}`,
		'',
		'Message:',
		fields.message
	].join('\r\n');
}

export const actions = {
	default: async ({ request, platform }) => {
		const formData = await request.formData();

		if (typeof formData.get('company') === 'string' && formData.get('company')?.toString().trim()) {
			return { success: true, message: 'Message sent.' };
		}

		const values = {
			name: getField(formData, 'name', 120),
			email: getField(formData, 'email', 320),
			message: getField(formData, 'message', 5000)
		} satisfies ContactFields;

		if (!values.name || !values.email || !values.message) {
			return fail(400, {
				error: 'Please fill in your name, email, and message.',
				values
			});
		}

		if (!EMAIL_PATTERN.test(values.email)) {
			return fail(400, {
				error: 'Please enter a valid email address.',
				values
			});
		}

		if (values.message.length < 10) {
			return fail(400, {
				error: 'Please add a bit more detail so I know what you are reaching out about.',
				values
			});
		}

		const emailBinding = (platform?.env as { CONTACT_EMAIL?: ContactEmailBinding } | undefined)
			?.CONTACT_EMAIL;

		if (!emailBinding) {
			console.error('CONTACT_EMAIL binding is not configured.');

			return fail(500, {
				error: 'The contact form is not configured on the server yet.',
				values
			});
		}

		try {
			await emailBinding.send({
				from: CONTACT_SENDER,
				to: CONTACT_DESTINATION,
				subject: 'New contact form submission from camlc.dev',
				replyTo: values.email,
				text: buildPlainTextEmail(values)
			});

			return {
				success: true,
				message: "Message sent. I'll reply from camlc@proton.me.",
				values: {
					name: '',
					email: '',
					message: ''
				}
			};
		} catch (error) {
			console.error('Failed to send contact form email.', error);

			return fail(500, {
				error: 'Something went wrong while sending your message. Please try again.',
				values
			});
		}
	}
} satisfies Actions;
