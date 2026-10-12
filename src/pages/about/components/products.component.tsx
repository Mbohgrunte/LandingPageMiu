import { Component, For } from "solid-js";

type Props = {
	products: {
		title: string;
		items: string[];
	}[];
};

export const Product: Component<Props> = (props) => {
	return (
		<div class="w-full max-w-[64rem] flex flex-col lg:flex-row justify-between bg-neutral-100 rounded-lg py-8 px-4 lg:px-12 space-x-8 space-y-8 lg:space-y-0">
			<For each={props.products}>
				{(product) => (
					<div class="flex-1">
						<h2 class="text-2xl font-bold">{product.title}</h2>
						<div class="w-full max-w-16 border-b-4 border-blue-500 mt-4 mb-6" />
						<ul class="list-disc pl-8 space-y-2">
							<For each={product.items}>{(item) => <li>{item}</li>}</For>
						</ul>
					</div>
				)}
			</For>
		</div>
	);
};
