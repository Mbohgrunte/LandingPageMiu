import { Component } from "solid-js";

type Props = {
	title: string;
	description: string;
};

export const CoreValue: Component<Props> = (props) => {
	return (
		<div class="flex-1 flex flex-col space-y-6 px-4 lg:px-12 py-8 border-4 border-blue-500 rounded-lg shadow-md shadow-blue-300">
			<div class="bg-blue-500 px-4 py-2 text-white rounded-lg w-min mx-auto">{props.title}</div>

			<div class="w-full border-b"></div>

			<p>{props.description}</p>
		</div>
	);
};
