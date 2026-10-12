import { Component } from "solid-js";
import { ContactForm } from "./contact-form.component";

export const Registration: Component = () => {
	return (
		<div
			id="contact"
			class="grid lg:grid-flow-row lg:grid-cols-2 py-8 lg:py-16 px-4 lg:px-16 lg:space-x-12 bg-gradient-to-t from-sky-200 to-white"
		>
			<div class="space-y-8">
				<h2 class="text-2xl lg:text-4xl font-bold space-x-1.5 text-sky-950">Bingung mulai dari mana?</h2>

				<div class="pt-4 pb-8 text-lg text-sky-950">
					Jadwalkan konsultasi bersama kami, temukan solusi terbaik untuk sistem IT bisnis Anda.
				</div>

				<div class="flex flex-row space-x-4 text-sky-950">
					<div class="grow">
						<div class="font-semibold">Email</div>
						<div>ptmitrainovasiunggul@yahoo.com</div>
					</div>

					<div class="grow">
						<div class="font-semibold">Phone</div>
						<div>+62 858 1440 9262</div>
					</div>
				</div>

				<div class="text-sky-950">
					<div class="font-semibold">Our Office</div>
					<div>
						Jl. Tanah Abang II No.68A 1, RT.1/RW.5, Petojo Sel., Kecamatan Gambir, Kota Jakarta Pusat,
						Daerah Khusus Ibukota Jakarta 10160
					</div>
				</div>

				<div>
					<img src="/img/map.png" class="h-64 w-full object-cover" alt="" />
				</div>
			</div>

			<ContactForm title="Daftar sekarang" />
		</div>
	);
};
