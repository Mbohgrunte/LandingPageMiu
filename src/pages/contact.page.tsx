import { Component } from "solid-js";
import { Icon } from "../components/icon";

const Contact: Component = () => {
	return (
		<div class="flex justify-center space-x-8">
			<div class="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[72rem]">
				<div class="flex flex-col space-y-8 bg-blue-500 py-36 px-4 lg:px-8 text-white">
					<h1 class="text-3xl">
						Tentang <span class="font-bold">Kami</span>
					</h1>
					<div class="w-full max-w-32 border-2 border-white" />
					<div>
						MIU dari PT. Mitra Inovasi Unggul adalah Software House yang didirikan untuk menyediakan semua
						jenis Aplikasi Pembantu Perusahaan untuk mendapat Keunggulan Bisnis.
					</div>
				</div>

				<div class="w-full max-w-[32rem] flex flex-col space-y-8 py-36 px-4 lg:px-8">
					<h1 class="text-3xl">
						Hubungi <span class="font-bold">Kami</span>
					</h1>
					<div class="w-full max-w-32 border-2" />

					<ul class="text-sm space-y-4">
						<li class="flex space-x-2.5 items-center">
							<Icon name="location" size="lg" class="shrink-0"></Icon>
							<address>
								Jl. Tanah Abang II No.68A 1, RT.1/RW.5, Petojo Sel., Kecamatan Gambir, Kota Jakarta
								Pusat, Daerah Khusus Ibukota Jakarta 10160
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

					<div class="flex flex-col space-y-6 bg-white rounded-xl py-12 px-8 lg:px-12 text-neutral-700 shadow-xl">
						<h3 class="text-2xl font-bold">Bangun Solusi Digital dengan MIU Softwarehouse</h3>

						<div class="flex flex-col space-y-2">
							<div>Name</div>
							<input class="border border-neutral-300 shadow px-4 py-1 w-full rounded-xl"></input>
							<div>Email</div>
							<input class="border border-neutral-300 shadow px-4 py-1 w-full rounded-xl"></input>
							<div>Phone</div>
							<input class="border border-neutral-300 shadow px-4 py-1 w-full rounded-xl"></input>
							<div>Company</div>
							<input class="border border-neutral-300 shadow px-4 py-1 w-full rounded-xl"></input>
							<div>Message</div>
							<textarea class="border border-neutral-300 shadow px-4 py-1 w-full rounded-xl"></textarea>
							<button class="bg-blue-500 rounded-full px-4 py-2 text-neutral-100 my-4">Submit</button>
						</div>
					</div>
				</div>

				<div class="flex flex-col space-y-8 bg-blue-500 py-36 px-4 lg:px-8 text-white">
					<h1 class="text-3xl">
						Tentang <span class="font-bold">Internship / Magang</span>
					</h1>
					<div class="w-full max-w-32 border-2 border-white" />
					<div>
						Kami Juga Menyediakan Ruang Magang, Internship maupun PKL. Disini Kami akan mendidik anak muda
						yang ingin memperdalam pengalamannya di dunia digital terutama di bidang “Software House”.
					</div>

					<form class="flex flex-col space-y-2 bg-white rounded-xl py-12 px-8 lg:px-12 text-neutral-700 shadow-xl">
						<div>Nama</div>
						<input class="border border-neutral-300 shadow px-4 py-1 w-full rounded-xl"></input>
						<div>Email</div>
						<input class="border border-neutral-300 shadow px-4 py-1 w-full rounded-xl"></input>
						<div>Tanggal</div>
						<input type="date" class="border border-neutral-300 shadow px-4 py-1 w-full rounded-xl"></input>
						<div>Durasi Internship</div>
						<input class="border border-neutral-300 shadow px-4 py-1 w-full rounded-xl"></input>
						<div>Asal Sekolah / Universitas</div>
						<input class="border border-neutral-300 shadow px-4 py-1 w-full rounded-xl"></input>
						<div>Deskripsi</div>
						<textarea class="border border-neutral-300 shadow px-4 py-1 w-full rounded-xl"></textarea>
						<button class="bg-blue-500 rounded-full px-4 py-2 text-neutral-100 my-4">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
