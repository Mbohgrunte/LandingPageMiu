import { Component } from "solid-js";
import { Registration } from "../../components/registration";
import { ProductShowcase } from "./components";

export const Products: Component = () => {
	return (
		<>
			<div
				class="flex items-end justify-center w-full h-full min-h-[48rem] relative pt-18 bg-no-repeat bg-cover bg-center"
				style={{
					"background-image": "url('/img/background-product-page.png')",
				}}
			>
				<div class="flex flex-col w-full max-w-5xl px-4 py-12 gap-18 items-center justify-center">
					<div class="flex flex-col items-center h-min gap-4 text-white">
						<p class="text-5xl md:text-7xl font-bold text-center ">Temukan Solusimu</p>
						<p class="w-full text-center  max-w-xl text-lg md:text-xl">
							MIU adalah Mitra Terpercaya dalam Pengembangan Perangkat Lunak dan Manajemen Inventaris IT
							untuk Pertumbuhan Bisnis Anda
						</p>
					</div>
					<button class="cursor-pointer flex-col flex gap-2 items-center text-white hover:translate-y-8 transition-all duration-300">
						<p class="text-xl">Selengkapnya</p>
						<img src="/img/double-chevron-down.png" alt="double chevron down" />
					</button>
				</div>
			</div>
			<ProductShowcase />
			<Registration />
		</>
	);
};
