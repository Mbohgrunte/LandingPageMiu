import { For, type Component } from "solid-js";
import { COMMITMENTS, TIMELINES, WE_VALUE, WHY_US } from "./about.constant";

export const About: Component = () => {
	return (
		<>
			<header id="about-home">
				<section class="about-hero" aria-labelledby="about-title">
					<div class="about-hero__content" data-reveal="up">
						<p>Memberikan dedikasi kami</p>
						<h1 id="about-title">PT Mitra Inovasi Unggul</h1>
						<p class="about-hero__summary">
							MIU (PT. Mitra Inovasi Unggul) adalah software house yang didirikan untuk membantu perusahaan
							mendapatkan keunggulan dalam bisnis.
						</p>
					</div>
				</section>
			</header>

			<main>
				<section class="about-intro" aria-labelledby="about-intro-title">
					<div class="about-intro__brand" data-reveal="left">
						<img
							src="/images/Logo%20MIU.png"
							alt="Logo Mitra Inovasi Unggul"
							width="180"
							height="180"
						/>
						<h2 id="about-intro-title">Let's Transform and Scale with MIU</h2>
					</div>
					<div class="about-intro__copy" data-reveal="right">
						<p>
							Mitra Inovasi Unggul (MIU) adalah software house yang menyediakan berbagai aplikasi
							penunjang bisnis. Dengan pengalaman dalam menangani kebutuhan Kawasan Berikat, Gudang
							Berikat, dan Pusat Logistik Berikat, MIU menghadirkan sistem yang telah terintegrasi
							host-to-host dengan CEISA 4.0.
						</p>
						<p>
							Dibangun sejak tahun 2016, kami terus mengembangkan dan meningkatkan layanan kami. Kami
							percaya teknologi memiliki kekuatan untuk mengubah bisnis dan menciptakan peluang baru.
							Dengan fokus pada inovasi dan efisiensi sistem, kami menyediakan layanan pengembangan
							perangkat lunak yang dirancang untuk membantu perusahaan meningkatkan produktivitas,
							efisiensi, dan pertumbuhan.
						</p>
					</div>
				</section>

				<section class="about-timeline" aria-labelledby="timeline-title">
					<div class="about-section-heading" data-reveal="up">
						<h2 id="timeline-title">Our Timeline</h2>
						<p>Perjalanan inovasi kami sejak berdiri 2016</p>
					</div>
					<div class="about-timeline__items">
						<For each={TIMELINES}>
							{(timeline) => (
								<article class="about-timeline__item" data-reveal="up">
									<h3>{timeline.value}</h3>
									<span>{timeline.year}</span>
								</article>
							)}
						</For>
					</div>
					<div class="about-timeline__track" aria-hidden="true">
						<For each={TIMELINES}>{() => <span />}</For>
					</div>
				</section>

				<section class="about-why" aria-labelledby="why-title">
					<div class="about-section-heading" data-reveal="up">
						<h2 id="why-title">Why Us</h2>
					</div>
					<div class="about-why__list">
						<For each={WHY_US}>
							{(item, index) => (
								<article
									class="about-why__item"
									data-reveal={index() % 2 === 0 ? "left" : "right"}
								>
									<span class="about-why__number" aria-hidden="true">
										{String(index() + 1).padStart(2, "0")}
									</span>
									<div>
										<h3>{item.title}</h3>
										<p>{item.desc}</p>
									</div>
								</article>
							)}
						</For>
					</div>
				</section>

				<section class="about-values" aria-labelledby="values-title">
					<div class="about-section-heading" data-reveal="up">
						<h2 id="values-title">We Value</h2>
					</div>
					<div class="about-values__grid">
						<For each={WE_VALUE}>
							{(value, index) => (
								<article
									class="about-value"
									data-reveal={index() === 0 ? "left" : index() === 1 ? "up" : "right"}
								>
									<img src={value.iconPath} alt="" width="52" height="52" loading="lazy" />
									<h3>{value.title}</h3>
									<p>{value.desc}</p>
								</article>
							)}
						</For>
					</div>
				</section>

				<section class="about-commitment" id="commitment" aria-label="Komitmen layanan MIU">
					<div class="about-commitment__copy">
						<For each={COMMITMENTS}>
							{(commitment) => (
								<article data-reveal="left">
									<h2>{commitment.title}</h2>
									<p>{commitment.description}</p>
								</article>
							)}
						</For>
					</div>
					<div class="about-commitment__mark" data-reveal="right">
						<strong>MIU</strong>
						<span>Commitment</span>
					</div>
				</section>
			</main>
		</>
	);
};

export default About;
