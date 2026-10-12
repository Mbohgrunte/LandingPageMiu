import { Component } from "solid-js";
import { Registration } from "../../components/registration";

export const ProductItInventoryPage: Component = () => {
	return (
		<>
			<div class="p-12">
				<div class="rounded-lg h-[75dvh] bg-gradient-to-b from-violet-500 flex items-end justify-between to-sky-200 p-12">
					<p class="text-sky-950 text-7xl font-bold">Solusi Cerdas untuk Efisiensi Bisnismu</p>
					<div class="flex gap-4 h-32 ">
						<div class="bg-white w-56 p-4 rounded-lg h-full">C-Fit</div>
						<div class="bg-white w-56 p-4 rounded-lg h-full">C-Fit Exclusive</div>
					</div>
				</div>
			</div>
			<div class="py-12 flex mx-auto text-sky-950 font-semibold items-center flex-col gap-4 max-w-7xl">
				<p class="text-5xl text-center"> IT INVENTORY MIU</p>
				<p class="text-center">
					perangkat lunak manajemen persediaan untuk mencatat seluruh aktivitas stok barang secara otomatis
					dan akurat, terintegrasi dengan proses logistik, produksi, dan akuntansi, serta mengikuti regulasi
					dari Direktorat Jenderal Bea Cukai.
				</p>
			</div>

			<div class="max-w-7xl mx-auto py-12 grid grid-cols-2 gap-8 items-start">
				<div>
					<h2 class="text-5xl font-bold text-sky-950 mb-4">E-CONNOTE</h2>
					<p class="text-sky-950 mb-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
						interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
						nostra, per inceptos himenaeos.
					</p>
					<img
						src="/img/placeholders/no-image.png"
						alt="No Image"
						class="w-full h-[28rem] object-cover rounded-lg shadow-md"
					/>
				</div>
				<div>
					<img
						src="/img/placeholders/no-image.png"
						alt="No Image"
						class="w-full h-[20rem] object-cover rounded-lg shadow-md mb-6"
					/>
					<h3 class="text-4xl font-bold text-sky-950 mb-4">BENEFIT E-CONNOTE</h3>
					<ul class="mb-6 space-y-2 text-sky-950">
						<li class="flex gap-2 items-center">
							<img src="/img/circle-check.png" alt="" />
							<span>
								<b>Real-time: </b> Memantau pergerakan barang secara real-time, mengurangi kesalahan
								pencatatan.
							</span>
						</li>
						<li class="flex gap-2 items-center">
							<img src="/img/circle-check.png" alt="" />
							<span>
								<b>Kepatuhan Regulasi: </b>
								Memenuhi persyaratan pelaporan Bea Cukai.
							</span>
						</li>
						<li class="flex gap-2 items-center">
							<img src="/img/circle-check.png" alt="" />
							<span>
								<b>Efisiensi Operasional: </b> Mengotomatisasi proses inventaris, mengurangi input
								manual.
							</span>
						</li>
						<li class="flex gap-2 items-center">
							<img src="/img/circle-check.png" alt="" />
							<span>
								<b>Kustomisasi Alur Kerja: </b> Dapat disesuaikan dengan alur kerja perusahaan Anda.
							</span>
						</li>
					</ul>
					<a href="#" class="text-sky-950 font-bold flex items-center gap-2">
						Get Offer Here <span aria-hidden="true">↗</span>
					</a>
				</div>
			</div>

			<div class="max-w-7xl mx-auto py-12 grid grid-cols-2 gap-8 items-start">
				<div>
					<h2 class="text-5xl font-bold text-sky-950 mb-4">E-LN APP</h2>
					<p class="text-sky-950 mb-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
						interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
						nostra, per inceptos himenaeos.
					</p>
					<img
						src="/img/placeholders/no-image.png"
						alt="No Image"
						class="w-full h-[28rem] object-cover rounded-lg shadow-md"
					/>
				</div>
				<div>
					<img
						src="/img/placeholders/no-image.png"
						alt="No Image"
						class="w-full h-[20rem] object-cover rounded-lg shadow-md mb-6"
					/>
					<h3 class="text-4xl font-bold text-sky-950 mb-4">BENEFIT E-LN APP</h3>
					<p class="text-sky-950 mb-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
						interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad.
					</p>
					<ul class="mb-6 space-y-2 text-sky-950">
						<li class="flex gap-2 items-center">
							<img src="/img/circle-check.png" alt="" /> Lorem ipsum dolor sit amet, consectetur
							adipiscing
						</li>
						<li class="flex gap-2 items-center">
							<img src="/img/circle-check.png" alt="" /> Lorem ipsum dolor sit amet, consectetur
							adipiscing
						</li>
						<li class="flex gap-2 items-center">
							<img src="/img/circle-check.png" alt="" /> Lorem ipsum dolor sit amet, consectetur
							adipiscing
						</li>
					</ul>
					<a href="#" class="text-sky-950 font-bold flex items-center gap-2">
						Get Offer Here <span aria-hidden="true">↗</span>
					</a>
				</div>
			</div>

			<div class="max-w-7xl mx-auto py-12">
				<h2 class="text-5xl font-bold text-center text-sky-950 mb-10">DIFFERENCE C-FIT &amp; C-FIT BENEFIT</h2>
				<div class="bg-[#f4faff]  rounded-2xl p-10 flex gap-8 justify-between items-start">
					<div class="bg-white flex-1 rounded-2xl shadow p-8 w-[340px] flex flex-col items-start">
						<div class="flex items-center gap-3 mb-4">
							<div class="p-2 rounded bg-sky-100">
								<img src="/img/chip.png" alt="C-Fit Benefit Icon" class="w-10 h-10" />
							</div>
							<span class="text-2xl font-bold text-sky-950">C-Fit</span>
						</div>
						<p class="mb-4 text-sky-950">Layanan untuk memulai bisnis Anda, termasuk:</p>
						<ul class="mb-6 space-y-2 text-sky-950">
							<li class="flex items-center gap-2">
								<img src="/img/circle-check.png" class="w-5 h-5" alt="" />
								<span>Torem ipsum dolor sit amet, Nich ala consectetur adipiscing</span>
							</li>
							<li class="flex items-center gap-2">
								<img src="/img/circle-check.png" class="w-5 h-5" alt="" />
								<span>Torem ipsum dolor sit amet, adipis cing gratum ing sit polorasidas</span>
							</li>
							<li class="flex items-center gap-2">
								<img src="/img/circle-check.png" class="w-5 h-5" alt="" />
								<span>Torem ipsum dolor sit amet</span>
							</li>
							<li class="flex items-center gap-2">
								<img src="/img/circle-check.png" class="w-5 h-5" alt="" />
								<span>Torem ipsum dolor sit amet, adipis cing gratum ing sit polorasidas</span>
							</li>
							<li class="flex items-center gap-2 opacity-50">
								<img src="/img/x-circle.png" class="w-5 h-5" alt="" />
								<span>Torem ipsum dolor sit amet,</span>
							</li>
							<li class="flex items-center gap-2 opacity-50">
								<img src="/img/x-circle.png" class="w-5 h-5" alt="" />
								<span>Torem ipsum dolor sit amet,</span>
							</li>
							<li class="flex items-center gap-2 opacity-50">
								<img src="/img/x-circle.png" class="w-5 h-5" alt="" />
								<span>Torem ipsum dolor sit amet, nirla las gorongodum parsu ikli mendele</span>
							</li>
						</ul>
						<button class="w-full bg-[#dbeafe] text-sky-950 font-bold py-2 rounded-lg">
							Beli sekarang
						</button>
					</div>
					<div class="bg-white flex-1 rounded-2xl shadow p-8 w-[340px] flex flex-col items-start">
						<div class="flex items-center gap-3 mb-4">
							<div class="p-2 rounded bg-sky-100">
								<img src="/img/chip.png" alt="C-Fit Benefit Icon" class="w-10 h-10" />
							</div>
							<span class="text-2xl font-bold text-sky-950">C-Fit Benefit</span>
						</div>
						<p class="mb-4 text-sky-950">Layanan untuk memulai bisnis Anda, termasuk:</p>
						<ul class="mb-6 space-y-2 text-sky-950">
							<li class="flex items-center gap-2">
								<img src="/img/circle-check.png" class="w-5 h-5" alt="" />
								<span>Torem ipsum dolor sit amet, Nich ala consectetur adipiscing</span>
							</li>
							<li class="flex items-center gap-2">
								<img src="/img/circle-check.png" class="w-5 h-5" alt="" />
								<span>Torem ipsum dolor sit amet, adipis cing gratum ing sit polorasidas</span>
							</li>
							<li class="flex items-center gap-2">
								<img src="/img/circle-check.png" class="w-5 h-5" alt="" />
								<span>Torem ipsum dolor sit amet</span>
							</li>
							<li class="flex items-center gap-2">
								<img src="/img/circle-check.png" class="w-5 h-5" alt="" />
								<span>Torem ipsum dolor sit amet, adipis cing gratum ing sit polorasidas</span>
							</li>
							<li class="flex items-center gap-2">
								<img src="/img/circle-check.png" class="w-5 h-5" alt="" />
								<span>Torem ipsum dolor sit amet,</span>
							</li>
							<li class="flex items-center gap-2">
								<img src="/img/circle-check.png" class="w-5 h-5" alt="" />
								<span>Torem ipsum dolor sit amet,</span>
							</li>
							<li class="flex items-center gap-2">
								<img src="/img/circle-check.png" class="w-5 h-5" alt="" />
								<span>Torem ipsum dolor sit amet, nirla las gorongodum parsu ikli mendele</span>
							</li>
						</ul>
						<button class="w-full bg-[#dbeafe] text-sky-950 font-bold py-2 rounded-lg">
							Beli sekarang
						</button>
					</div>
					<div class="flex flex-1 flex-col items-center justify-center bg-[#f4faff] rounded-2xl p-8 w-[340px] h-[480px]">
						<div class="text-3xl font-bold text-sky-950 text-center mb-8">
							TEMUKAN PAKET TERBAIK UNTUK BISNIS ANDA
						</div>
						<div class="bg-[#d9d9d9] rounded-xl w-full h-full flex items-center justify-center">
							<img src="/img/placeholders/no-image.png" alt="No Image" class="h-full w-full opacity-60" />
						</div>
					</div>
				</div>
			</div>
			<Registration />
		</>
	);
};
