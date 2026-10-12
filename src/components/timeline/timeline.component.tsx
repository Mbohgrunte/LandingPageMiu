import { Component, For } from "solid-js";
import sphere from "/img/sphere.png";

type Item = {
	date: string;
	description: string;
};

type Props = {
	items: Item[];
};

export const Timeline: Component<Props> = (props) => {
	return (
		<div class="w-full flex flex-col items-center relative">
			<div class="flex w-full max-w-6xl justify-between relative z-10">
				<For each={props.items}>
					{(item) => (
						<div class="timeline-card bg-[#f2faff] border-[] rounded-xl shadow-md px-8 py-8 flex flex-col items-start min-w-[300px] min-h-[140px] relative">
							<div class="text-lg font-semibold text-sky-900 mb-8 whitespace-pre-line">
								{item.description}
							</div>
							<div class="timeline-year-badge absolute right-6 bottom-6 bg-white rounded-full shadow px-7 py-2 text-xl  font-bold text-sky-900 flex items-center justify-center">
								{item.date}
							</div>
						</div>
					)}
				</For>
			</div>
			{/* Timeline line and indicators */}
			<div class="w-full max-w-6xl relative h-16 mt-6">
				{/* Timeline line */}
				<div
					class="absolute left-0 right-0 top-1/2 h-2 bg-blue-200 rounded-full"
					style="transform: translateY(-50%);"
				></div>
				{/* End circles */}
				<div class="absolute left-0 top-1/2 w-7 h-7 bg-blue-300 rounded-full border-4 border-white -translate-y-1/2 z-20"></div>
				<div class="absolute right-0 top-1/2 w-7 h-7 bg-blue-300 rounded-full border-4 border-white -translate-y-1/2 z-20"></div>
				{/* Indicators under each card */}
				<For each={props.items}>
					{(item, i) => (
						<img
							src={sphere}
							alt="indicator"
							class="absolute z-30 w-6 h-6"
							style={`left: calc(${
								(i() / (props.items.length - 1)) * 100
							}% - 20px); top: 50%; transform: translateY(-50%);`}
						/>
					)}
				</For>
			</div>
			<style>{`
				.timeline-card {
					box-shadow: 0 4px 16px 0 rgba(0, 80, 200, 0.07);
				}
				.timeline-year-badge {
					box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
				}
				@media (max-width: 900px) {
					.timeline-card { min-width: 220px; padding: 1.5rem; }
				}
			`}</style>
		</div>
	);
};
