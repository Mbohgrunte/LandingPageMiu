import { A } from "@solidjs/router";
import { For, type Component } from "solid-js";

const solutions = [
	{
		title: "IT Inventory App (ERP)",
		image: "/images/home-it-inventory.png",
		alt: "Ilustrasi dashboard IT Inventory",
		description:
			"Kami percaya efisiensi bukan hanya soal angka, tapi tentang bagaimana teknologi mempermudah manusia. Melalui IT Inventory App, perusahaan dapat memantau seluruh perangkat, lisensi, dan aset digital secara real-time — tanpa lagi laporan manual yang memakan waktu.",
	},
	{
		title: "CN App",
		image: "/images/home-cn-app.png",
		alt: "Ilustrasi pengiriman dan dokumen digital",
		description:
			"Dalam dunia bisnis yang serba cepat, komunikasi internal yang efisien adalah segalanya. Dengan CN App berbasis CEISA 4.0, kami membantu perusahaan menyatukan data lintas departemen melalui sistem yang aman dan mudah diakses.",
	},
	{
		title: "Basic Internal App",
		image: "/images/home-basic-app.png",
		alt: "Ilustrasi aplikasi bisnis dan pelacakan barang",
		description:
			"Bagi banyak perusahaan kecil dan menengah, digitalisasi sering terdengar mahal dan rumit. Kami ingin mengubah pandangan itu. Melalui Internal App, kami membantu tim Anda beralih dari proses manual ke sistem digital yang sederhana namun efektif — mulai dari pengajuan approval, absensi, hingga manajemen gudang.",
	},
];

const projects = [
	{
		title: "Regional",
		image: "/images/home-city.png",
		alt: "Panorama kawasan perkotaan",
		description:
			"Dari Pulau Jawa hingga Pulau Sumatera, kami telah berkolaborasi dengan lebih dari 30 perusahaan dalam mengembangkan aplikasi digital yang meningkatkan efisiensi operasional dan keandalan data. Setiap proyek kami dirancang dengan pendekatan profesional, hasil nyata, dan teknologi terkini untuk mendorong pertumbuhan bisnis klien kami.",
	},
	{
		title: "CEISA Professional",
		image: "/images/home-ceisa.png",
		alt: "CEISA 4.0, Customs-Excise Information System and Automation",
		description:
			"Kami turut berkontribusi dalam pengembangan sistem CEISA 4.0 dengan mendukung digitalisasi proses ekspor-impor Indonesia melalui platform yang aman, modern, dan terintegrasi dengan kebutuhan industri. Solusi IT Inventory kami membantu perusahaan menyiapkan, mengirim, dan memantau dokumen kepabeanan yang terhubung dengan CEISA 4.0 secara lebih mudah, cepat, dan efisien, sekaligus meningkatkan transparansi alur kerja dan data antar lembaga.",
	},
	{
		title: "Widely Diverse Partners",
		image: "/images/home-team.png",
		alt: "Tim profesional berdiskusi bersama",
		description:
			"Mulai dari sistem inventaris IT, aplikasi internal kantor, hingga platform CN App (CEISA 4.0), kami membantu perusahaan meningkatkan efisiensi, akurasi, dan pertumbuhan bisnis melalui teknologi yang andal dan terukur. Fleksibilitas kami dalam menyesuaikan sistem membuat setiap aplikasi menjadi relevan, scalable, dan mudah diadopsi oleh tim internal klien.",
	},
];

const faqs = [
	{
		question: "Apa itu IT Inventory App dan bagaimana manfaatnya bagi bisnis?",
		answer:
			"IT Inventory App cocok untuk perusahaan yang ingin mendapatkan fasilitas seperti KB, GB, KEK, KITE, dll. App ini memberikan kemudahan untuk user dalam penginputan dan pelaporan fasilitas tersebut.",
	},
	{
		question: "Apa keunggulan CN App (CEISA 4.0)?",
		answer:
			"CN App yang kami sediakan mengikuti standar CEISA 4.0 (Customs-Excise Information System and Automation) dan mendukung pengelolaan e-consignment note (resi digital) secara aman, cepat, dan terintegrasi, sehingga cocok untuk perusahaan logistik, ekspor-impor, atau distribusi.",
	},
	{
		question: "Apa itu Basic Internal App dan siapa yang cocok menggunakannya?",
		answer:
			"Basic Internal App merupakan solusi digital untuk otomatisasi pekerjaan internal, seperti manajemen gudang, absensi, approval, dan pelaporan. Ideal bagi UMKM atau perusahaan yang ingin digitalisasi tanpa biaya tinggi.",
	},
	{
		question: "Apakah solusi yang ditawarkan bisa disesuaikan (custom) dengan kebutuhan perusahaan kami?",
		answer:
			"Tentu bisa. Setiap proyek kami mulai dengan analisis kebutuhan bisnis untuk memastikan desain, fitur, dan workflow benar-benar sesuai tujuan perusahaan Anda.",
	},
	{
		question: "Apakah tersedia layanan after-sales dan maintenance?",
		answer:
			"Tersedia. Kami menyediakan layanan maintenance berkala, bug fixing, update fitur, dan technical support dari tim MIU agar aplikasi Anda selalu optimal dan aman digunakan.",
	},
	{
		question: "Apakah data perusahaan kami akan aman?",
		answer:
			"Keamanan adalah prioritas utama kami. Setiap sistem yang kami bangun dilengkapi dengan enkripsi, role-based access, dan sistem autentikasi.",
	},
];

const Home: Component = () => {
	return (
		<>
			<header class="home-header">
				<section class="home-hero" aria-labelledby="home-title">
					<div class="home-hero__inner">
						<div class="home-hero__brand" data-reveal="left">
							<img
								src="/images/Logo%20MIU.webp"
								alt="Logo Mitra Inovasi Unggul"
								width="180"
								height="180"
							/>
						</div>
						<div class="home-hero__content" data-reveal="right">
							<p class="home-eyebrow">Mitra Inovasi Unggul</p>
							<h1 id="home-title">Trusted IT Solutions for Faster Business Operations</h1>
							<p class="home-hero__summary">
								Tingkatkan efisiensi operasional dengan solusi teknologi yang dirancang untuk kebutuhan
								bisnis Anda.
							</p>
							<div class="home-hero__actions">
								<A class="home-button home-button--primary" href="/contact">
									Schedule Free Consultation
								</A>
								<A class="home-button home-button--light" href="/about">
									Learn More
								</A>
							</div>
						</div>
					</div>
				</section>
			</header>

			<main>
				<section class="home-section home-solutions" aria-labelledby="solutions-title">
					<div class="home-container">
						<div class="home-section__heading" data-reveal="up">
							<h2 id="solutions-title">Solution for your Business</h2>
							<p>
								Teknologi yang tepat membantu bisnis bergerak lebih cepat, tertata, dan siap berkembang.
							</p>
						</div>

						<div class="home-solutions__grid">
							<For each={solutions}>
								{(solution) => (
									<article class="home-solution-card" data-reveal="up">
										<img
											src={solution.image}
											alt={solution.alt}
											width="160"
											height="130"
											loading="lazy"
										/>
										<div>
											<h3>{solution.title}</h3>
											<p>{solution.description}</p>
											<A href="/product">
												Selengkapnya <span aria-hidden="true">→</span>
											</A>
										</div>
									</article>
								)}
							</For>
						</div>
					</div>
				</section>

				<section class="home-support" aria-labelledby="support-title">
					<div class="home-container home-support__inner">
						<img
							src="/images/indonesia-removebg-preview%201.png"
							alt="Ilustrasi peta kepulauan Indonesia"
							width="440"
							height="240"
							loading="lazy"
							data-reveal="left"
						/>
						<div data-reveal="right">
							<h2 id="support-title">24/7 Support</h2>
							<p>Melayani client di seluruh Indonesia</p>
						</div>
					</div>
				</section>

				<section class="home-section home-work" aria-labelledby="work-title">
					<div class="home-container">
						<div class="home-section__heading" data-reveal="up">
							<h2 id="work-title">Our Work</h2>
						</div>
						<div class="home-work__list">
							<For each={projects}>
								{(project) => (
									<article class="home-work-card" data-reveal="up">
										<img src={project.image} alt={project.alt} width="300" height="170" loading="lazy" />
										<div>
											<h3>{project.title}</h3>
											<p>{project.description}</p>
										</div>
									</article>
								)}
							</For>
						</div>
					</div>
				</section>

				<section class="home-section home-faq" aria-labelledby="faq-title">
					<div class="home-container home-faq__container">
						<div class="home-section__heading" data-reveal="up">
							<p class="home-eyebrow">FAQ</p>
							<h2 id="faq-title">Most Asked Question</h2>
							<p>Didn’t find what you’re looking for? Let us know, We’ve got real humans ready to answer.</p>
						</div>
						<div class="home-faq__list" data-reveal="up">
							<For each={faqs}>
								{(faq) => (
									<details>
										<summary>{faq.question}</summary>
										<div class="home-faq__answer">
											<p>{faq.answer}</p>
										</div>
									</details>
								)}
							</For>
						</div>
					</div>
				</section>

				<section class="home-location" aria-labelledby="location-title">
					<div class="home-container home-location__inner">
						<div class="home-section__heading" data-reveal="up">
							<p class="home-eyebrow">Mari mulai percakapan</p>
							<h2 id="location-title">Bingung mulai dari mana?</h2>
							<p>Jadwalkan konsultasi bersama tim kami dan temukan solusi untuk bisnis Anda.</p>
							<A class="home-button home-button--primary" href="/contact">
								Contact Us
							</A>
						</div>
						<div class="home-location__map" data-reveal="up">
							<iframe
								title="Peta lokasi kantor Mitra Inovasi Unggul"
								src="https://maps.google.com/maps?q=Jl.%20Tanah%20Abang%20II%20No.68A%2C%20Jakarta%20Pusat&t=&z=16&ie=UTF8&iwloc=&output=embed"
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							/>
						</div>
						<address>
							<strong>Our Office</strong>
							<br />
							Jl. Tanah Abang II No.68A, RT.1/RW.5, Petojo Selatan, Kecamatan Gambir, Kota Jakarta Pusat,
							Daerah Khusus Ibukota Jakarta 10160
						</address>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
