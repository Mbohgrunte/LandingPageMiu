import { A, useLocation } from "@solidjs/router";
import { createEffect, createSignal, For, onCleanup, onMount, type ParentComponent } from "solid-js";

const navigation = [
	{
		label: "About Us",
		href: "/about",
		links: [
			{ label: "Our Timeline", href: "/about#timeline-title" },
			{ label: "Why Us", href: "/about#why-title" },
			{ label: "Our commitment", href: "/about#commitment" },
		],
	},
	{
		label: "Home",
		href: "/",
		links: [
			{ label: "Services", href: "/#solutions-title" },
			{ label: "Capabilities", href: "/#support-title" },
			{ label: "FAQ", href: "/#faq-title" },
		],
	},
	{
		label: "Product",
		href: "/product",
		links: [
			{ label: "All Product", href: "/product#product" },
			{ label: "IT Inventory (ERP)", href: "/product#product-details-inventory" },
			{ label: "CN App", href: "/product#product-details-cn-app" },
			{ label: "Basic Internal App", href: "/product#product-details-internal-app" },
		],
	},
];

const pageMetadata: Record<string, { title: string; description: string }> = {
	"/": {
		title: "Home | Mitra Inovasi Unggul",
		description:
			"Mitra Inovasi Unggul menghadirkan solusi teknologi informasi, IT Inventory, dan aplikasi digital untuk bisnis yang lebih efisien.",
	},
	"/about": {
		title: "About Us | Mitra Inovasi Unggul",
		description:
			"Kenali Mitra Inovasi Unggul, perjalanan, nilai, dan komitmen kami dalam menghadirkan solusi digital industri.",
	},
	"/product": {
		title: "Mitra Inovasi Unggul | Solusi Digital Industri",
		description: "Solusi digital dan IT Inventory untuk pabrik serta kawasan berikat dari Mitra Inovasi Unggul.",
	},
	"/contact": {
		title: "Contact Us | Mitra Inovasi Unggul",
		description:
			"Hubungi Mitra Inovasi Unggul untuk berkonsultasi tentang aplikasi bisnis, IT Inventory, dan integrasi CEISA 4.0.",
	},
};

const App: ParentComponent = (props) => {
	const currentYear = new Date().getFullYear();
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = createSignal(false);
	const [openSubmenu, setOpenSubmenu] = createSignal("");

	createEffect(() => {
		if (location.pathname) {
			setIsMenuOpen(false);
			setOpenSubmenu("");

			const metadata = pageMetadata[location.pathname] ?? pageMetadata["/"];
			document.title = metadata.title;
			document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
		}
	});

	createEffect(() => {
		if (
			!location.pathname ||
			!("IntersectionObserver" in window) ||
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		) {
			return;
		}

		document.documentElement.classList.add("has-scroll-reveal");
		const observer = new IntersectionObserver(
			(entries, currentObserver) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						currentObserver.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
		);
		const frame = requestAnimationFrame(() => {
			document.querySelectorAll("[data-reveal]").forEach((element) => {
				element.classList.add("will-reveal");
				observer.observe(element);
			});
		});

		onCleanup(() => {
			cancelAnimationFrame(frame);
			observer.disconnect();
		});
	});

	onMount(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") closeNavigation();
		};

		document.addEventListener("keydown", handleEscape);
		onCleanup(() => document.removeEventListener("keydown", handleEscape));
	});

	const closeNavigation = () => {
		setIsMenuOpen(false);
		setOpenSubmenu("");
	};

	const handleNavigationClick = (event: MouseEvent, label: string) => {
		if (window.matchMedia("(max-width: 900px)").matches && openSubmenu() !== label) {
			event.preventDefault();
			setOpenSubmenu(label);
			return;
		}

		closeNavigation();
	};

	return (
		<>
			<nav class="site-nav" aria-label="Navigasi utama">
				<A class="site-nav__brand" href="/" aria-label="Mitra Inovasi Unggul - Home">
					<img src="/images/Logo%20MIU.webp" alt="" width="42" height="42" />
					<span>Mitra Inovasi Unggul</span>
				</A>

				<button
					class="site-nav__toggle"
					type="button"
					aria-label={isMenuOpen() ? "Tutup navigasi" : "Buka navigasi"}
					aria-controls="primary-navigation"
					aria-expanded={isMenuOpen()}
					onClick={() => {
						setIsMenuOpen((isOpen) => !isOpen);
						setOpenSubmenu("");
					}}
				>
					<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path
							d="M4 6h16M4 12h16M4 18h16"
							stroke="currentColor"
							stroke-width="1.8"
							stroke-linecap="round"
						/>
					</svg>
				</button>

				<div
					class={`site-nav__links${isMenuOpen() ? " is-open" : ""}`}
					id="primary-navigation"
				>
					<For each={navigation}>
						{(item) => {
							const isActive = () =>
								item.href === "/" ? location.pathname === "/" : location.pathname.startsWith(item.href);

							return (
								<div
									class={`site-nav__item${openSubmenu() === item.label ? " is-open" : ""}`}
									onPointerEnter={(event) => {
										if (event.pointerType !== "touch") setOpenSubmenu(item.label);
									}}
									onPointerLeave={(event) => {
										if (event.pointerType !== "touch") setOpenSubmenu("");
									}}
								>
									<A
										href={item.href}
										classList={{ "is-active": isActive() }}
										aria-controls={`${item.label.toLowerCase().replaceAll(" ", "-")}-submenu`}
										aria-expanded={openSubmenu() === item.label}
										aria-current={isActive() ? "page" : undefined}
										onClick={(event) => handleNavigationClick(event, item.label)}
									>
										{item.label}
									</A>
									<ul
										class="site-nav__submenu"
										id={`${item.label.toLowerCase().replaceAll(" ", "-")}-submenu`}
									>
										<For each={item.links}>
											{(link) => (
												<li>
													<A href={link.href} onClick={closeNavigation}>
														{link.label}
													</A>
												</li>
											)}
										</For>
									</ul>
								</div>
							);
						}}
					</For>
					<A
						href="/contact"
						classList={{ "is-active": location.pathname.startsWith("/contact") }}
						aria-current={location.pathname.startsWith("/contact") ? "page" : undefined}
						onClick={closeNavigation}
					>
						Contact
					</A>
				</div>
			</nav>

			{props.children}

			<footer class="site-footer">
				<div class="site-footer__inner">
					<section class="site-footer__about" aria-labelledby="footer-brand">
						<A class="site-footer__brand" href="/" id="footer-brand">
							<img src="/images/Logo%20MIU.webp" alt="" width="40" height="40" loading="lazy" />
							<span>Mitra Inovasi Unggul</span>
						</A>
						<p>
							MIU dari PT. Mitra Inovasi Unggul adalah Software House yang didirikan untuk menyediakan
							semua jenis Aplikasi Pembantu Perusahaan untuk mendapatkan Keunggulan Bisnis.
						</p>
					</section>

					<nav class="site-footer__information" aria-label="Informasi">
						<h2>Informasi</h2>
						<A href="/about">About Us</A>
						<A href="/#faq-title">FAQs</A>
						<A href="/contact">Contact Us</A>
					</nav>

					<nav class="site-footer__products" aria-label="Product">
						<h2>Product</h2>
						<A href="/product#product-details-inventory">IT Inventory (ERP)</A>
						<A href="/product#product-details-cn-app">CN App</A>
						<A href="/product#product-details-internal-app">Basic Internal App</A>
					</nav>

					<section class="site-footer__contact" aria-labelledby="footer-contact-title">
						<h2 id="footer-contact-title">Contact MIU</h2>
						<address>
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M12 22s8-7.1 8-14A8 8 0 1 0 4 8c0 6.9 8 14 8 14Z" />
								<circle cx="12" cy="8" r="2.5" />
							</svg>
							<span>
								Jl. Tanah Abang II No.68A, RT.1/RW.5, Petojo Selatan, Kecamatan Gambir, Kota Jakarta
								Pusat, Daerah Khusus Ibukota Jakarta 10160
							</span>
						</address>
						<a href="tel:+6285814409262">
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="m7.2 3.5 3 4.2-2 2a14.4 14.4 0 0 0 6.1 6.1l2-2 4.2 3-.9 3.2c-.2.7-.9 1.1-1.6 1C9.1 19.7 4.3 14.9 3 8c-.1-.7.3-1.4 1-1.6l3.2-.9Z" />
							</svg>
							<span>+62 858 1440 9262</span>
						</a>
						<a href="mailto:ptmitrainovasinggul@yahoo.com">
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M3 5h18v14H3V5Zm1.5 1.5 7.5 6 7.5-6" />
							</svg>
							<span>ptmitrainovasinggul@yahoo.com</span>
						</a>
					</section>

					<p class="site-footer__copyright">
						Copyright &copy; {currentYear} PT. Mitra Inovasi Unggul
					</p>
				</div>
			</footer>

			<A class="floating-contact" href="/contact">
				<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path
						d="M7 4.75h10A2.25 2.25 0 0 1 19.25 7v7A2.25 2.25 0 0 1 17 16.25h-5.5L7 20v-3.75A2.25 2.25 0 0 1 4.75 14V7A2.25 2.25 0 0 1 7 4.75Z"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M8 9h8M8 12h5"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
					/>
				</svg>
				<span>Contact us</span>
			</A>
		</>
	);
};

export default App;
