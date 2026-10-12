import { Component } from "solid-js";
import { Registration } from "../../components/registration";
import { Timeline } from "../../components/timeline";
import { COMMITMENTS, TIMELINES, WE_VALUE, WHY_US } from "./about.constant";

const WhyUs: Component = () => {
	return (
		<div class="w-full bg-white flex flex-col items-center py-16 px-4 md:px-0">
			<h2 class="text-5xl md:text-6xl font-bold text-sky-950 text-center mb-12">WHY US</h2>
			<div class="w-full max-w-6xl flex flex-col">
				{WHY_US.map((item, idx) => (
					<div class="flex flex-row items-start py-8 border-b border-slate-300">
						<div class="w-20 flex-shrink-0 flex items-start justify-center">
							<span class="text-4xl md:text-5xl font-bold text-sky-800 leading-none">
								{String(idx + 1).padStart(2, "0")}
							</span>
						</div>
						<div class="flex-1 flex flex-col">
							<h3 class="text-xl md:text-2xl font-bold text-sky-900 mb-1">{item.title}</h3>
							<p class="text-base md:text-lg text-sky-800">{item.desc}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const WeValue: Component = () => {
	return (
		<div class="w-full flex px-4 flex-col items-center py-24 bg-white">
			<h2 class="text-4xl md:text-6xl font-bold text-sky-950 text-center mb-12">We Value</h2>
			<div class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
				{WE_VALUE.map((item) => (
					<div class="flex flex-col bg-sky-50 rounded-xl p-8 shadow-sm">
						<img src={item.iconPath} alt={item.title} class="h-16 w-16 mb-6" />
						<h3 class="text-2xl font-semibold text-sky-900 mb-2 text-left">{item.title}</h3>
						<p class="text-base text-sky-800 text-left">{item.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export const Commitments: Component = () => {
	return (
		<div class="w-full flex px-4 flex-col md:flex-row items-center justify-center py-20 mx-auto lg:max-w-7xl bg-white">
			<div class="flex-1 items-center flex flex-col gap-16 max-w-2xl">
				{COMMITMENTS.map((item) => (
					<div class="flex flex-row items-start gap-6">
						<img src="/img/sphere.png" alt="dot" class="h-6 w-6 mt-1" />
						<div>
							<h3 class="text-xl md:text-2xl font-bold text-sky-900 mb-2">{item.title}</h3>
							<p class="text-lg md:text-xl text-slate-500 max-w-xl">{item.description}</p>
						</div>
					</div>
				))}
			</div>
			<div class="flex-1 flex flex-col items-center justify-center mt-16 md:mt-0">
				<span class="text-[7rem] md:text-[9rem] font-bold text-sky-900 leading-none">MIU</span>
				<span class="text-4xl md:text-6xl font-bold text-sky-900 leading-none">Commitment</span>
			</div>
		</div>
	);
};

export const About: Component = () => {
	return (
		<>
			<div
				class="flex items-end justify-center md:justify-end w-full h-full min-h-[48rem] relative pt-18 parallax-background"
				style={{ "background-image": "url('/img/background-cloud.png')" }}
			>
				<div class="flex flex-col w-full max-w-5xl px-4 py-12 gap-16 items-center md:items-end justify-center md:justify-end md:pr-24 pb-24">
					<div class="flex flex-col items-center md:items-end h-min text-sky-950">
						<h3 class="text-xl font-semibold text-center md:text-end mb-6">Memberikan dedikasi kami</h3>
						<h1 class="text-4xl md:text-6xl font-bold text-center md:text-end mb-8">
							PT Mitra Inovasi Unggul
						</h1>
						<p class="w-full text-center md:text-end max-w-xl text-lg md:text-xl">
							MIU (PT. Mitra Inovasi Unggul ) adalah software house yang didirikan untuk membantu
							perusahaan mendapatkan Keunggulan dalam Bisnis.
						</p>
					</div>
				</div>
			</div>
			<div class="flex flex-col md:flex-row w-full px-4 md:px-24 py-12 md:py-24 gap-8 md:gap-12">
				<div class="flex-1 flex items-center justify-center md:justify-start mb-8 md:mb-0">
					<h1 class="text-4xl md:text-6xl font-bold text-sky-950 leading-tight text-center md:text-left">
						Let's Transform
						<br />
						and Scale with
						<br />
						MIU
					</h1>
				</div>
				<div class="flex-1 flex flex-col justify-center text-sky-950 text-base md:text-base gap-4 md:gap-6 max-w-2xl mx-auto md:mx-0">
					<p class="text-justify">
						Mitra Inovasi Unggul (MIU) adalah software house yang menyediakan berbagai aplikasi penunjang
						bisnis. Dengan pengalaman dalam menangani kebutuhan Kawasan Berikat, Gudang Berikat, dan Pusat
						Logistik Berikat, MIU menghadirkan sistem yang telah terintegrasi host-to-host dengan CEISA 4.0
					</p>
					<p class="text-justify">
						Dibangun sejak tahun 2016 kami terus mengembangkan dan meningkatkan layanan kami, kami percaya
						bahwa teknologi memiliki kekuatan untuk mengubah bisnis dan menciptakan peluang baru. Dengan
						fokus pada inovasi dan efisiensi sistem, kami menyediakan layanan pengembangan perangkat lunak
						yang dirancang untuk membantu perusahaan meningkatkan produktivitas, efisiensi, dan pertumbuhan.
					</p>
				</div>
			</div>
			{/* Timeline Section */}
			<div class="w-full flex flex-col items-center py-24 bg-white">
				<h2 class="text-4xl md:text-6xl font-bold text-sky-950 text-center mb-4">Our Timeline</h2>
				<p class="text-lg text-sky-950 text-center mb-16">Perjalanan inovasi kami sejak berdiri 2016</p>
				<div class="w-full flex justify-center">
					<div class="max-w-6xl w-full">
						<Timeline
							items={TIMELINES.map((t) => ({
								date: t.year,
								description: t.value,
							}))}
						/>
					</div>
				</div>
			</div>
			<WhyUs />
			<WeValue />
			<Commitments />
			<Registration />
		</>
	);
};
