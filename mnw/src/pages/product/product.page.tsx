import { useParams } from "@solidjs/router";
import { Component, For } from "solid-js";
import { Registration } from "../../components/registration";
import { PRODUCTS } from "./product.constant";

export const Product: Component = () => {
	const params = useParams();

	const product = PRODUCTS[params.product as keyof typeof PRODUCTS];

	return (
		<>
			<div class="md:p-12 bg-gradient-to-b from-violet-300 to-white">
				<div class="rounded-lg h-[75dvh] bg-gradient-to-b from-violet-500 flex md:flex-row flex-col md:items-end items-center md:justify-between justify-center md:space-y-0 space-y-8 md:space-x-8 space-x-0 to-sky-200 p-12">
					<p class="text-sky-950 text-7xl font-bold max-w-3xl">{product.hero.title}</p>
				</div>
			</div>
			<div class="py-12 flex mx-auto text-sky-950 font-semibold items-center flex-col gap-4 max-w-7xl">
				<p class="text-5xl text-center">{product.sectionTitle}</p>
				<p class="text-center">{product.sectionDescription}</p>
			</div>

			<For each={product.sections}>
				{(item) => (
					<>
						<div class="max-w-7xl mx-auto py-12 grid px-8 md:grid-cols-2 grid-cols-1 gap-8 items-start">
							<div>
								<h2 class="text-5xl font-bold text-sky-950 mb-4">{item.title}</h2>
								<p class="text-sky-950 mb-8">{item.description}</p>
								<img
									src={item.image}
									alt="No Image"
									class="w-full h-[28rem] object-cover rounded-lg shadow-md"
								/>
							</div>
							<div>
								<img
									src={item.benefitImage}
									alt="No Image"
									class="w-full h-[20rem] object-cover rounded-lg shadow-md mb-6"
								/>
								<h3 class="text-4xl font-bold text-sky-950 mb-4">BENEFIT {item.title}</h3>
								<ul class="mb-6 space-y-2 text-sky-950">
									<For each={item.benefits}>
										{(benefit) => (
											<li class="flex gap-2 items-center">
												<img src="/img/circle-check.png" alt="" />
												<div innerHTML={benefit}></div>
											</li>
										)}
									</For>
								</ul>
								<a href="#" class="text-sky-950 font-bold flex items-center gap-2">
									{item.cta} <span aria-hidden="true">↗</span>
								</a>
							</div>
						</div>
					</>
				)}
			</For>

			<div class="max-w-7xl mx-auto py-12">
				<h2 class="text-5xl font-bold text-center text-sky-950 mb-10">{product.difference.title}</h2>
				<div class="bg-[#f4faff]  rounded-2xl p-10 flex md:flex-row flex-col gap-8 justify-between items-center">
					<For each={product.difference.columns}>
						{(column) => (
							<div class="bg-white flex-1 rounded-2xl shadow p-8 md:w-[340px] w-full flex flex-col items-start">
								<div class="flex items-center gap-3 mb-4">
									<div class="p-2 rounded bg-sky-100">
										<img src={column.image} alt="C-Fit Benefit Icon" class="w-10 h-10" />
									</div>
									<span class="text-2xl font-bold text-sky-950">{column.title}</span>
								</div>
								<p class="mb-4 text-sky-950">Layanan untuk memulai bisnis Anda, termasuk:</p>
								<ul class="mb-6 space-y-2 text-sky-950">
									<For each={column.features}>
										{(feature) => (
											<li class="flex items-center gap-2">
												<img src="/img/circle-check.png" class="w-5 h-5" alt="" />
												<span>{feature}</span>
											</li>
										)}
									</For>
								</ul>
								<button class="w-full bg-[#dbeafe] text-sky-950 font-bold py-2 rounded-lg">
									{column.cta}
								</button>
							</div>
						)}
					</For>

					<div class="flex flex-1 flex-col items-center justify-center bg-[#f4faff] rounded-2xl p-8 w-[340px] h-[480px]">
						<div class="text-3xl font-bold text-sky-950 text-end mb-8">{product.difference.cta}</div>
						<div class="bg-[#d9d9d9] rounded-xl w-full h-full flex items-center justify-center">
							<img src={product.difference.image} alt="No Image" class="h-full w-full opacity-60" />
						</div>
					</div>
				</div>
			</div>
			<Registration />
		</>
	);
};
