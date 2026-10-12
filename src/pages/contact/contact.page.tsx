import { Component } from "solid-js";
import { Icon } from "../../components/icon";
import { ContactForm } from "../../components/registration/contact-form.component";

export const Contact: Component = () => {
	return (
		<>
			<div
				class="flex  justify-center  w-full h-full min-h-[24rem] relative pt-18 object-cover"
				style={{ "background-image": "url('/img/background-contact.png')" }}
			>
				<div class="flex flex-col w-full max-w-5xl gap-16 items-center  justify-center">
					<p class="text-5xl md:text-7xl font-bold text-center mb-8 text-sky-950">
						CONTACT US
					</p>
				</div>
			</div>

			<div class="py-16 max-w-7xl gap-8 mx-auto flex flex-col lg:flex-row px-8 lg:px-0 relative">
				<div class="flex flex-1 justify-center text-center lg:text-left items-start flex-col z-10 text-sky-950 gap-4">
					<p class="text-5xl font-bold">
						Konsultasikan solusi yang anda butuhkan
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur. Tempus egestas adipiscing
						sociis aliquam. Habitant sit faucibus pharetra lobortis varius.
						Vitae congue ultricies amet vitae. Eu ac felis si
					</p>
				</div>
				<div class="flex-1 z-10">
					<ContactForm title="Get in Touch" />
				</div>

				<div class="absolute inset-0  justify-center items-center flex z-0">
					<div class="w-1/2 aspect-square bg-radial from-sky-200  rounded-full blur-3xl"></div>
				</div>
			</div>

			<div class="py-16  bg-sky-200/50">
				<div class="max-w-7xl mx-auto flex-col lg:flex-row lg:gap-0 gap-12 flex justify-evenly">
					<div class=" flex flex-col items-center text-sky-950">
						<div class="rounded-full mb-4 p-4 shadow-md aspect-square bg-white flex items-center justify-center">
							<Icon name="email" size="3xl" class="shrink-0"></Icon>
						</div>
						<p class="font-bold">Email</p>
						<p>ptmitrainovasiunggul@yahoo.com</p>
					</div>
					<div class=" flex flex-col items-center text-sky-950">
						<div class="rounded-full mb-4 p-4 shadow-md aspect-square bg-white flex items-center justify-center">
							<Icon name="location" size="3xl" class="shrink-0"></Icon>
						</div>
						<p class="font-bold">Our Office</p>
						<p class="max-w-xl text-center">
							Jl. Tanah Abang II No.68A 1, RT.1/RW.5, Petojo Sel., Kecamatan
							Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10160
						</p>
					</div>
					<div class=" flex flex-col items-center text-sky-950">
						<div class="rounded-full mb-4 p-4 shadow-md aspect-square bg-white flex items-center justify-center">
							<Icon name="phone" size="3xl" class="shrink-0"></Icon>
						</div>
						<p class="font-bold">Phone</p>
						<p>+62 858 1440 9262</p>
					</div>
				</div>
			</div>

			<div class="w-full bg-gradient-to-t from-sky-200/50">
				<div class="max-w-7xl mx-auto py-16 xl:px-0 px-8">
					<p class="text-5xl mb-12 text-center font-bold">Support</p>
					<div class="grid md:grid-cols-2 xl:grid-cols-3 w-full  ">
						<div class="py-8 md:p-16 text-sky-950 border-b md:border-r border-sky-800">
							<div class="p-3  mb-2 rounded bg-sky-200/40 shadow-inner w-fit ">
								<img
									class="size-14"
									src="/img/information-request.png"
									alt=""
								/>
							</div>
							<p class="text-2xl mb-2 font-semibold">Information Request</p>
							<p class="mb-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
							<a class="text-blue-500" href="">
								Request more information <span aria-hidden="true">↗</span>
							</a>
						</div>
						<div class="py-8 md:p-16 text-sky-950 border-b xl:border-r border-sky-800">
							<div class="p-3  mb-2 rounded bg-sky-200/40 shadow-inner w-fit ">
								<img class="size-14" src="/img/complaint.png" alt="" />
							</div>
							<p class="text-2xl mb-2 font-semibold">Complaint</p>
							<p class="mb-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
							<a class="text-blue-500" href="">
								Make a Complaint <span aria-hidden="true">↗</span>
							</a>
						</div>
						<div class="py-8 md:p-16 text-sky-950 border-b md:border-r xl:border-r-0 border-sky-800">
							<div class="p-3  mb-2 rounded bg-sky-200/40 shadow-inner w-fit ">
								<img class="size-14" src="/img/fraud-alert.png" alt="" />
							</div>
							<p class="text-2xl mb-2 font-semibold">FAQ</p>
							<p class="mb-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
							<a class="text-blue-500" href="">
								Report a Fraud <span aria-hidden="true">↗</span>
							</a>
						</div>
						<div class="py-8 md:p-16 text-sky-950 border-sky-800 border-b xl:border-b-0 xl:border-r">
							<div class="p-3  mb-2 rounded bg-sky-200/40 shadow-inner w-fit ">
								<img class="size-14" src="/img/critique.png" alt="" />
							</div>
							<p class="text-2xl mb-2 font-semibold">Critique</p>
							<p class="mb-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
							<a class="text-blue-500" href="">
								Make a Critique <span aria-hidden="true">↗</span>
							</a>
						</div>
						<div class="py-8 md:p-16 text-sky-950 md:border-r border-b md:border-b-0 border-sky-800">
							<div class="p-3  mb-2 rounded bg-sky-200/40 shadow-inner w-fit ">
								<img class="size-14" src="/img/pin-location.png" alt="" />
							</div>
							<p class="text-2xl mb-2 font-semibold">Location</p>
							<p class="mb-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
							<a class="text-blue-500" href="">
								Our Location <span aria-hidden="true">↗</span>
							</a>
						</div>
						<div class="py-8 md:p-16 text-sky-950">
							<div class="p-3  mb-2 rounded bg-sky-200/40 shadow-inner w-fit ">
								<img class="size-14" src="/img/technical-support.png" alt="" />
							</div>
							<p class="text-2xl mb-2 font-semibold">Technical Support</p>
							<p class="mb-4">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
							<a class="text-blue-500" href="">
								Report technical issue <span aria-hidden="true">↗</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
