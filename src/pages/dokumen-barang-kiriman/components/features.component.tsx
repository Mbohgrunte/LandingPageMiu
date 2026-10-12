import { Component, For } from "solid-js";
import { Icon, Icons } from "../../../components/icon";

type Props = {
	features: {
		icon: Icons;
		title: string;
		description: string;
	}[];
};

export const Features: Component<Props> = (props) => {
	return (
		<div class="flex flex-col lg:flex-row max-w-[84rem] space-y-6 lg:space-y-0 lg:space-x-8 pt-12 text-center">
			<For each={props.features}>
				{(feature) => (
					<div class="flex-1 flex flex-col items-center space-y-6 px-4 lg:px-8 py-8 bg-white rounded-4xl shadow">
						<Icon name={feature.icon} class="text-7xl text-neutral-600" />

						<div class="text-blue-500 font-bold text-lg py-2 rounded-lg">{feature.title}</div>

						<p>{feature.description}</p>
					</div>
				)}
			</For>
		</div>
	);
};
