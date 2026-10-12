import { Component } from "solid-js";
import { Features } from "./components";
import { FEATURES } from "./dokumen-barang-kiriman.constant";

export const DokumenBarangKiriman: Component = () => {
	return (
		<>
			<div class="h-screen parallax-background bg-gradient-to-r from-gray-500 to-gray-200">
				<div class="flex flex-col lg:flex-row w-full h-full lg:space-x-8 space-y-8 lg:space-y-0 justify-center items-center bg-slate-900/40 px-4">
					<div class="flex flex-col w-full lg:max-w-2xl space-y-8 text-center">
						<h1 class="text-xl lg:text-2xl font-bold text-blue-500">Efisiensikan Ekspor dan Impor Anda</h1>
						<h1 class="text-2xl lg:text-5xl font-bold text-neutral-100">
							Dokumen Barang Kirim Ekspor dan Impor
						</h1>
					</div>
					<img src="/img/document.png" class="w-[32rem]" alt="" />
				</div>
			</div>

			<div class="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 px-2 lg:px-12 py-8">
				<div class="flex flex-col items-center lg:items-start space-y-8 px-4 lg:px-8">
					<h2 class="text-2xl lg:text-3xl font-semibold text-blue-500">Apa Itu Dokumen Barang Kirim?</h2>
					<div class="w-full max-w-96 border-b-2 border-blue-500" />
					<div class="text-neutral-600">
						Layanan <b>Dokumen Barang Kiriman</b> adalah layanan yang membantu proses administratif dan
						kepatuhan hukum dalam pengiriman barang, terutama untuk <b>ekspor dan impor</b>. Layanan ini
						mencakup pembuatan, pengelolaan, dan pengarsipan dokumen yang diperlukan, seperti faktur
						komersial, Bill of Lading, sertifikat asal (Certificate of Origin), deklarasi pabean, serta
						dokumen bea cukai.
					</div>
					<div>
						<button class="rounded-xl rounded-tl-none bg-gradient-to-br from-blue-500 to-blue-300 px-8 py-3 shadow font-medium text-white">
							Bergabung dengan Kami
						</button>
					</div>
				</div>

				<img
					class="w-full max-w-md xl:max-w-2xl lg:max-w-xl h-auto object-cover rounded-xl"
					src="/img/people_flat.jpg"
				/>
			</div>

			<div class="flex flex-col space-y-8 bg-gradient-to-br from-blue-500 to-blue-400 py-16">
				<h2 class="text-2xl lg:text-3xl font-semibold text-neutral-100 px-6 lg:px-20">
					Keunggulan Memakai Layanan Dokumen Barkir dari MIU
				</h2>

				<div class="flex flex-col space-y-6 bg-white w-full max-w-[85%] rounded-r-3xl px-6 lg:px-20 py-12">
					<p class="font-medium">
						Kami hadir untuk memenuhi kebutuhan perdagangan internasional anda dengan proses yang mudah dan
						profesional. Dengan layanan Dokumen Barang Kiriman dari kami dapat mempermudah anda dalam proses
						Barang Kiriman dengan cepat dan praktis. Selain itu berikut adalah Keunggulan layanan Barang
						Kiriman dari kami;
					</p>
					<div class="border-b-2 border-b-blue-500 w-full max-w-md" />

					<ul class="space-y-1.5">
						<li>Memudahkan Proses Eskpor Impor Anda</li>
						<li>Proses Cepat dan Handal</li>
						<li>Dukungan Layanan 24 jam</li>
					</ul>
				</div>
			</div>

			<div class="flex flex-col w-full items-center justify-center py-12 px-6 space-y-4 bg-neutral-100">
				<h2 class="text-4xl">
					<span class="text-blue-500 font-medium">Fitur yang</span> Kami Tawarkan
				</h2>

				<div class="w-full max-w-32 border-b-4 border-blue-500"></div>

				<div>Berikut beberapa Fitur Unggulan Ekspor Impor Barang Kiriman yang ditawarkan MIU Softwarehouse</div>

				<Features features={FEATURES} />
			</div>
		</>
	);
};
