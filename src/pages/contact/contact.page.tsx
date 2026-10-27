import { type Component } from "solid-js";
import { ContactForm } from "../../components/registration/contact-form.component";

export const Contact: Component = () => {
	return (
		<main class="contact-page">
			<section class="contact-hero" aria-labelledby="contact-title">
				<h1 id="contact-title" data-reveal="up">
					Contact Us
				</h1>
			</section>

			<div class="contact-content">
				<section class="contact-intro" aria-labelledby="contact-heading">
					<div class="contact-intro__copy" data-reveal="left">
						<p class="eyebrow">Mari bertumbuh bersama</p>
						<h2 id="contact-heading">Konsultasikan solusi yang Anda butuhkan</h2>
						<p>
							Setiap perusahaan memiliki alur kerja yang berbeda. Hubungi kami untuk berkonsultasi
							mengenai pembuatan aplikasi custom, kelancaran integrasi CEISA 4.0, atau transformasi
							operasional berbasis digital yang lebih modern dan aman.
						</p>
					</div>

					<div data-reveal="right">
						<ContactForm title="Hubungi Kami" />
					</div>
				</section>

				<section class="contact-map" aria-label="Lokasi kantor kami" data-reveal="up">
					<iframe
						title="Peta lokasi kantor Mitra Inovasi Unggul"
						src="https://maps.google.com/maps?q=Jl.%20Tanah%20Abang%20II%20No.68A%2C%20Jakarta%20Pusat&t=&z=16&ie=UTF8&iwloc=&output=embed"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					/>
				</section>

				<section class="contact-details" aria-label="Informasi kontak">
					<a class="contact-detail" href="mailto:ptmitrainovasinggul@yahoo.com" data-reveal="left">
						<span class="contact-detail__icon" aria-hidden="true">
							<svg viewBox="0 0 24 24">
								<path d="M3 5h18v14H3V5Zm1.5 1.5 7.5 6 7.5-6" />
							</svg>
						</span>
						<span class="contact-detail__title">Email</span>
						<span>ptmitrainovasinggul@yahoo.com</span>
					</a>
					<div class="contact-detail" data-reveal="up">
						<span class="contact-detail__icon" aria-hidden="true">
							<svg viewBox="0 0 24 24">
								<path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
								<circle cx="12" cy="9" r="2.2" />
							</svg>
						</span>
						<span class="contact-detail__title">Our Office</span>
						<span>
							Jl. Tanah Abang II No.68A, RT.1/RW.5, Petojo Selatan, Kecamatan Gambir, Kota Jakarta Pusat,
							Daerah Khusus Ibukota Jakarta 10160
						</span>
					</div>
					<a class="contact-detail" href="tel:+6285814409262" data-reveal="right">
						<span class="contact-detail__icon" aria-hidden="true">
							<svg viewBox="0 0 24 24">
								<path d="m7.2 3.5 3 4.2-2 2a14.4 14.4 0 0 0 6.1 6.1l2-2 4.2 3-.9 3.2c-.2.7-.9 1.1-1.6 1C9.1 19.7 4.3 14.9 3 8c-.1-.7.3-1.4 1-1.6l3.2-.9Z" />
							</svg>
						</span>
						<span class="contact-detail__title">Phone</span>
						<span>+62 858 1440 9262</span>
					</a>
				</section>

				<section class="support-section" aria-labelledby="support-title">
					<p class="eyebrow" data-reveal="up">
						Kami siap membantu
					</p>
					<h2 id="support-title" data-reveal="up">
						Support
					</h2>
					<div class="support-grid">
						<article class="support-card" data-reveal="left">
							<span class="support-card__icon" aria-hidden="true">
								<svg viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="9" />
									<path d="M12 11v5m0-8h.01" />
								</svg>
							</span>
							<h3>Information Request</h3>
							<p>
								Ingin tahu lebih dalam tentang solusi digitalisasi kami? Ajukan pertanyaan seputar layanan
								dan kemitraan di sini.
							</p>
							<a href="mailto:ptmitrainovasinggul@yahoo.com?subject=Information%20Request">
								Request more information <span aria-hidden="true">→</span>
							</a>
						</article>
						<article class="support-card" data-reveal="up">
							<span class="support-card__icon" aria-hidden="true">
								<svg viewBox="0 0 24 24">
									<path d="M4 4h16v13H9l-5 4V4Zm4 5h8m-8 4h5" />
								</svg>
							</span>
							<h3>Critique &amp; Complaint</h3>
							<p>
								Kami sangat menghargai masukan Anda. Berikan kritik dan saran agar kami bisa terus
								berinovasi bagi bisnis Anda.
							</p>
							<a href="mailto:ptmitrainovasinggul@yahoo.com?subject=Critique%20and%20Complaint">
								Make a complaint or critique <span aria-hidden="true">→</span>
							</a>
						</article>
						<article class="support-card" data-reveal="right">
							<span class="support-card__icon" aria-hidden="true">
								<svg viewBox="0 0 24 24">
									<path d="M4 13v-2a8 8 0 0 1 16 0v2M4 12H2v6h5v-6H4Zm16 0h2v6h-5v-6h3Zm-3 7a5 5 0 0 1-5 3" />
								</svg>
							</span>
							<h3>Technical Support</h3>
							<p>
								Mengalami kendala teknis pada sistem? Hubungi tim support kami untuk bantuan teknis dan
								perbaikan bug secara cepat.
							</p>
							<a href="mailto:ptmitrainovasinggul@yahoo.com?subject=Technical%20Support">
								Request technical issue <span aria-hidden="true">→</span>
							</a>
						</article>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Contact;
