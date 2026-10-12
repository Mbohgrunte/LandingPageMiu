import { A, useLocation } from "@solidjs/router";
import { createEffect, createSignal, Show, type ParentComponent } from "solid-js";
import { Icon } from "./components/icon";

const App: ParentComponent = (props) => {
	const currentYear = new Date().getFullYear();

	const location = useLocation();
	const [isMenuShown, setIsMenuShown] = createSignal(false);

	createEffect(() => {
		if (location.pathname) setIsMenuShown(false);
	});

	return (
		<>
			<div class="z-50 fixed top-0 left-0 flex flex-col justify-center w-full py-2 px-8 min-h-16 max-h-max backdrop-blur-3xl bg-black/25 text-neutral-100">
				<div class="flex justify-between items-center w-full">
					<img src="/img/miu.png" class="w-12 h-12" alt="" />

					<div class="hidden lg:block flex space-x-16 font-medium">
						<A
							href="/about"
							class="hover:text-blue-500 outline-2 outline-transparent hover:outline-blue-500 px-2.5 py-1 transition-colors"
						>
							About Us
						</A>

						<A
							href="/"
							class="hover:text-blue-500 outline-2 outline-transparent hover:outline-blue-500 px-2.5 py-1 transition-colors"
						>
							Home
						</A>

						<A
							href="/product"
							class="hover:text-blue-500 outline-2 outline-transparent hover:outline-blue-500 px-2.5 py-1 transition-colors"
						>
							Product
						</A>
					</div>

					<A
						href="/contact"
						class="hidden lg:block bg-white px-4 py-1.5 rounded-xl text-neutral-700 font-bold"
					>
						Contact Us
					</A>

					<button onClick={() => setIsMenuShown((v) => !v)} class="block lg:hidden p-2.5">
						<Icon name="menu" size="xl"></Icon>
					</button>
				</div>
				<Show when={isMenuShown()}>
					<div class="visible lg:hidden py-8">
						<ul class="space-y-4">
							<li>
								<a class="hover:text-yellow-400 transition-colors" href="/about">
									About Us
								</a>
							</li>
							<li>
								<a class="hover:text-yellow-400 transition-colors" href="/">
									Home
								</a>
							</li>
							<li>
								<a class="hover:text-yellow-400 transition-colors" href="/about#product">
									Product
								</a>
							</li>
							<li class="py-2">
								<A href="/contact" class="bg-white px-4 py-1.5 rounded-xl text-neutral-700 font-bold">
									Contact Us
								</A>
							</li>
						</ul>
					</div>
				</Show>
			</div>

			{props.children}

			<div class="flex items-center justify-center py-12 px-4">
				<div class="flex flex-col">
					<div class="flex lg:flex-row flex-col w-full max-w-[72rem] space-x-12 space-y-12">
						<div class="flex flex-col space-x-4 space-y-4">
							<div class="flex flex-row items-center space-x-4">
								<img src="/img/miu.png" class="w-12 h-12" alt="" />
								<div class="font-medium text-xl text-sky-950">Mitra Inovasi Unggul</div>
							</div>
							<p class="text-sm text-neutral-600">
								MIU dari PT. Mitra Inovasi Unggul adalah Software House yang didirikan untuk menyediakan
								semua jenis Aplikasi Pembantu Perusahaan untuk mendapat Keunggulan Bisnis.
							</p>
						</div>

						<div class="flex flex-col shrink-0 min-w-48 space-y-4">
							<div class="font-medium text-xl text-sky-950">Informasi</div>
							<ul class="space-y-4 text-sm text-neutral-600">
								<li>
									<a class="hover:text-yellow-400 transition-colors" href="/about">
										About Us
									</a>
								</li>
								<li>
									<a class="hover:text-yellow-400 transition-colors" href="/#faq">
										FAQ
									</a>
								</li>
								<li>
									<a class="hover:text-yellow-400 transition-colors" href="/about#product">
										Career
									</a>
								</li>
								<li>
									<a class="hover:text-yellow-400 transition-colors" href="/">
										Blog
									</a>
								</li>
							</ul>
						</div>

						<div class="flex flex-col space-y-4">
							<div class="font-medium text-xl text-sky-950">Contact MIU</div>
							<ul class="text-sm space-y-4 text-neutral-600">
								<li class="flex space-x-2.5 items-center">
									<Icon name="location" size="lg" class="shrink-0"></Icon>
									<address>
										Jl. Tanah Abang II No.68A 1, RT.1/RW.5, Petojo Sel., Kecamatan Gambir, Kota
										Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160
									</address>
								</li>
								<li class="flex space-x-2.5 items-center">
									<Icon name="phone" size="lg" class="shrink-0"></Icon>
									<a
										class="hover:text-yellow-400 transition-colors"
										target="_blank"
										href="https://api.whatsapp.com/send?phone=6285814409262"
									>
										+62 858 1440 9262
									</a>
								</li>
								<li class="flex space-x-2.5 items-center">
									<Icon name="email" size="lg" class="shrink-0"></Icon>
									<a
										class="hover:text-yellow-400 transition-colors"
										href="mailto:ptmitrainovasiunggul@yahoo.com"
									>
										ptmitrainovasiunggul@yahoo.com
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="flex items-center h-16 text-neutral-400">
						Copyright &#169; {currentYear} PT.Mitra Inovasi Unggul
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
