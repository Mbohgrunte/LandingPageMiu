import { Component, For } from "solid-js";

type Props = {
	standard: {
		title: string;
		description: string;
	}[];
};

export const Standard: Component<Props> = (props) => {
	return (
		<div class="flex flex-col lg:flex-row max-w-[72rem] space-y-8 lg:space-y-0 lg:space-x-8 pt-12 px-4 text-center">
			<For each={props.standard}>
				{(item) => (
					<div class="flex-1 flex flex-col space-y-6 px-4 lg:px-12 py-8 bg-neutral-100 rounded-tl-4xl rounded-br-4xl shadow">
						<div class="text-blue-500 font-bold px-4 py-2 rounded-lg">{item.title}</div>

						<div class="w-full border-b"></div>

						<p>{item.description}</p>
					</div>
				)}
			</For>
		</div>
	);
};
