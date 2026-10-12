import { Component, createSignal, JSX, Show } from "solid-js";
import { GridContent, HeroContent, PRODUCTS_TABS } from "../product.constant";

type ProductShowcaseGridProps = {
	contents: GridContent[];
};

const ProductShowcaseGrid: Component<ProductShowcaseGridProps> = (props) => {
	return (
		<div class="w-full h-full flex justify-center gap-8">
			{props.contents.map((item) => (
				<div class="rounded-2xl  bg-sky-50 shadow p-8 flex flex-col items-start max-w-sm max-h-[28rem]">
					<div class="flex justify-between w-full  mb-4">
						<div class="text-3xl font-bold text-sky-900">{item.title}</div>
						<div class=" bg-sky-100 inset-shadow-sm p-4 rounded-full">
							<img src={item.icon} alt={item.title} class="size-12 object-contain" />
						</div>
					</div>
					<div class="text-gray-600 mb-12 flex-1">{item.description}</div>
					<div class="font-semibold text-gray-700 mb-2">Suitable for:</div>
					<ul class="mb-4">
						{item.suitableFor.map((s) => (
							<li class="flex items-center mb-1">
								<img src={s.icon} alt={s.label} class="w-6 h-6 mr-2" />
								<span class="text-gray-600">{s.label}</span>
							</li>
						))}
					</ul>
					{/* TODO */}
					{/* <A class="w-full" href={item.path}>
						<button class="w-full bg-sky-100 text-sky-900 font-semibold rounded-lg py-3 text-lg hover:bg-sky-200 transition">
							{item.buttonText}
						</button>
					</A> */}
				</div>
			))}
		</div>
	);
};

type ProductShowcaseHeroProps = {
	content: HeroContent;
	type: "hero-right" | "hero-left";
};
const ProductShowcaseHero: Component<ProductShowcaseHeroProps> = (props) => {
	const { heroVisualImage, heroPrimaryBlock, heroSecondaryBlock, heroActionBlock } = props.content;

	return (
		<div class={`w-full h-full flex gap-2 ${props.type === "hero-left" && "flex-row-reverse"}`}>
			{/* Left side: Cards and text */}
			<div class={`flex flex-1 flex-col gap-2 ${props.type === "hero-left" && "flex-col-reverse"}`}>
				<div class="flex flex-1 gap-2 text-white">
					{/* Primary Block */}
					<div
						class={`flex-1 basis-2/3 rounded-2xl  shadow p-8 flex flex-col min-h-[180px] ${heroPrimaryBlock.bgStyle}`}
					>
						<h2 class="text-3xl font-bold mb-4">{heroPrimaryBlock.title}</h2>
						<p class="text-sky-950 text-lg">{heroPrimaryBlock.description}</p>
					</div>
					{/* Action Block */}
					{/* <a
						href="#"
						class={`flex-1 basis-1/3 rounded-2xl  shadow p-6 flex flex-col justify-between items-start relative min-h-[180px] ${heroActionBlock.bgStyle}`}
					>
						<span class="text-2xl font-bold  mb-8">{heroActionBlock.title}</span>
						<span class="absolute bottom-6 right-6 bg-white rounded-full p-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width={1.5}
								stroke="currentColor"
								class="w-6 h-6 text-sky-700"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17.25 6.75L6.75 17.25M17.25 6.75h-7.5M17.25 6.75v7.5"
								/>
							</svg>
						</span>
					</a> */}
				</div>
				{/* Secondary Block */}
				<div
					class={`rounded-2xl flex-1 shadow p-8 flex text-right flex-col items-center min-h-[140px] ${heroSecondaryBlock.bgStyle}`}
				>
					<h3 class="text-3xl font-bold text-sky-900  mb-8">{heroSecondaryBlock.title}</h3>
					<p class="text-gray-600 ">{heroSecondaryBlock.description}</p>
				</div>
			</div>
			{/* Right side: Image */}
			<Show when={heroVisualImage}>
				<div class="flex flex-1 items-center overflow-hidden justify-center bg-gray-100 rounded-2xl min-h-[420px]">
					<img
						src={heroVisualImage || "/img/placeholders/no-image.png"}
						alt="Product"
						class="h-full w-full object-cover rounded  opacity-60"
					/>
				</div>
			</Show>
		</div>
	);
};

type ProductShowcaseHeaderProps = {
	type: "center" | "between";
	header: string;
	description: string;
	linkContent: string;
	linkTarget: string;
};
const ProductShowcaseHeader: Component<ProductShowcaseHeaderProps> = (props) => {
	const centeredHeader: JSX.Element = (
		<div class="flex flex-col items-center justify-center">
			<p class="text-6xl text-sky-950 font-bold">{props.header}</p>
			<p class="text-lg text-gray-500 max-w-3xl text-center">{props.description}</p>
			<p class="flex items-center justify-center">
				<a href={props.linkTarget} class="text-blue-500">
					{props.linkContent}
				</a>
			</p>
		</div>
	);

	const betweenHeader: JSX.Element = (
		<div class="flex justify-between gap-8 items-end">
			<p class="text-6xl/18 text-sky-950 font-bold max-w-2xl">{props.header}</p>
			<div class="max-w-md">
				<p class="text-lg text-gray-500 mb-6">{props.description}</p>
				{/* <a href={props.linkTarget} class="text-blue-500">
					{props.linkContent}
				</a> */}
			</div>
		</div>
	);

	return <>{props.type === "center" ? centeredHeader : betweenHeader}</>;
};

export const ProductShowcase: Component = () => {
	const visibleCount = 5;
	const half = Math.floor(visibleCount / 2);
	const [selectedIdx, setSelectedIdx] = createSignal(0); // default to 4th tab as before

	const getVisibleTabs = () => {
		const tabs = [];
		for (let i = -half; i <= half; i++) {
			const idx = (selectedIdx() + i + PRODUCTS_TABS.length) % PRODUCTS_TABS.length;
			tabs.push({ ...PRODUCTS_TABS[idx], idx });
		}
		return tabs;
	};

	return (
		<div class="w-full flex min-h-[100dvh]">
			<div class="min-w-96 bg-sky-100 px-4 flex items-center justify-end">
				<div class="flex flex-col gap-2">
					{getVisibleTabs().map((tab, i) => (
						<button
							onClick={() => setSelectedIdx(tab.idx)}
							class={`text-sky-950 text-start p-1 w-full min-w-44 rounded
								${i === half ? "font-bold bg-blue-500/25" : ""}
								${i === 0 || i === visibleCount - 1 ? "opacity-30" : ""}
								${i === 1 || i === visibleCount - 2 ? "opacity-60" : ""}
							`}
						>
							{tab.title}
						</button>
					))}
				</div>
			</div>
			<div class="flex-1 flex flex-col py-12 px-12 gap-14">
				<ProductShowcaseHeader
					type={PRODUCTS_TABS[selectedIdx()].headerType}
					header={PRODUCTS_TABS[selectedIdx()].header}
					description={PRODUCTS_TABS[selectedIdx()].description}
					linkContent={PRODUCTS_TABS[selectedIdx()].linkContent}
					linkTarget={PRODUCTS_TABS[selectedIdx()].linkTarget}
				/>
				{PRODUCTS_TABS[selectedIdx()].layout === "grid" && (
					<ProductShowcaseGrid contents={PRODUCTS_TABS[selectedIdx()].contents as GridContent[]} />
				)}
				{["hero-left", "hero-right"].includes(PRODUCTS_TABS[selectedIdx()].layout) && (
					<ProductShowcaseHero
						type={PRODUCTS_TABS[selectedIdx()].layout as "hero-right" | "hero-left"}
						content={PRODUCTS_TABS[selectedIdx()].contents as HeroContent}
					/>
				)}
			</div>
		</div>
	);
};
