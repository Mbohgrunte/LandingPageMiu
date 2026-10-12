import { Component } from "solid-js";
import { createStore } from "solid-js/store";
import { Api } from "../../api";

type ContactFormProps = {
	title: string;
};

export const ContactForm: Component<ContactFormProps> = (props) => {
	const api = new Api();

	const [data, setData] = createStore({
		name: "",
		email: "",
		address: "",
		description: "",
	});

	const onSubmit = async (e: Event) => {
		e.preventDefault();
		try {
			await api.contactUsSubmission(data);
			alert("Pesan berhasil terkirim, kami akan segera menghubungi Anda!");
		} catch {
			// TODO handle
		}
	};

	return (
		<div class="flex flex-col grow space-y-4 py-12 text-sky-950">
			<form onSubmit={onSubmit} class="flex flex-col space-y-6 bg-white p-8 rounded shadow-xl">
				<h3 class="text-xl lg:text-2xl font-bold space-x-1.5">{props.title}</h3>

				<div class="space-y-2">
					<div>Name</div>
					<input
						type="text"
						class="bg-sky-700/25 px-4 py-2.5 w-full rounded"
						onInput={(e) => setData("name", e.currentTarget.value)}
						minLength={3}
						maxLength={50}
						placeholder="Lorem"
					/>
				</div>

				<div class="space-y-2">
					<div>Mail</div>
					<input
						type="email"
						class="bg-sky-700/25 px-4 py-2.5 w-full rounded"
						onInput={(e) => setData("email", e.currentTarget.value)}
						placeholder="johndoe@mail.net"
					/>
				</div>

				<div class="space-y-2">
					<div>Address</div>
					<input
						type="text"
						class="bg-sky-700/25 px-4 py-2.5 w-full rounded"
						minLength={3}
						maxLength={250}
						onInput={(e) => setData("address", e.currentTarget.value)}
						placeholder="Capitol, ID"
					/>
				</div>

				<div class="space-y-2">
					<div>Description</div>
					<textarea
						minLength={10}
						maxLength={1000}
						class="bg-sky-700/25 px-4 py-2.5 min-h-12 h-32 w-full rounded"
						onInput={(e) => setData("description", e.currentTarget.value)}
					/>
				</div>

				<button type="submit" class="w-full text-white bg-sky-900 p-4 rounded">
					Send Message
				</button>
			</form>
		</div>
	);
};
