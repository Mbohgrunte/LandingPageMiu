import { A, useLocation } from "@solidjs/router";
import { createEffect, createSignal, For, onCleanup, onMount, Show, type Component } from "solid-js";

const products = [
	{
		id: "inventory",
		title: "IT Inventory (ERP)",
		description: "Pengembangan perangkat lunak dan manajemen inventaris IT untuk pertumbuhan bisnis Anda.",
		iconPath: "M7 10h26v18H7zM4 31h32M17 15h6m-3-3v6",
	},
	{
		id: "cn-app",
		title: "CN APP",
		description: "Aplikasi digital untuk pembuatan dan pengelolaan e-consignment note (resi digital).",
		iconPath: "M5 10h23v18H5zM10 32h13M16 28v4m15-18h3m-3 5h3m-3 5h3m-3-17h3",
	},
	{
		id: "internal-app",
		title: "Basic Internal App",
		description:
			"Platform yang dirancang untuk mendigitalisasi proses internal perusahaan dan memberikan efisiensi dalam operasional perusahaan Anda.",
		iconPath: "M10 5h20v30H10zM15 10h10m-10 5h10m-10 5h10m-10 5h6",
	},
];

const suitableFor = [
	{ label: "Penerima fasilitas", icon: "/images/fa-solid_warehouse.png" },
	{ label: "Mengejar efisiensi", icon: "/images/ant-design_truck-outlined.png" },
	{ label: "Brands", icon: "/images/fluent-emoji-high-contrast_label.png" },
];

const productDetails = [
	{
		id: "inventory",
		panelId: "product-details-inventory",
		title: "IT Inventory (ERP)",
		subtitle: "(KB, GB, KEK, KITE, PLB)",
		description:
			"Satu dashboard untuk mengelola data perusahaan pengguna fasilitas. IT Inventory App dari MIU memetakan seluruh siklus aset: dari pengadaan, penempatan, peminjaman, hingga disposisi. Mendukung multi-location, barcode/QR, dan integrasi ke ERP/HR. Real-time, akurat, siap audit.",
		features: [
			{
				title: "Centralized Data Management",
				description:
					"Seluruh data — mulai dari absensi, gudang, hingga laporan — tersimpan aman di satu dashboard terpusat. Akses cepat, data konsisten, dan keputusan bisa diambil lebih cepat dengan analitik real-time.",
			},
			{
				title: "Smart Workflow Automation",
				description:
					"Hilangkan proses manual dan spreadsheet yang membingungkan. Sistem kami mengotomatisasi approval, notifikasi, serta pelaporan, sehingga tim Anda bisa fokus pada hal yang lebih strategis.",
			},
		],
		image: "/Video/Demo%20IT%20Inventory.gif",
		imageAlt: "Demo animasi IT Inventory MIU",
		imageClass: "product-details__demo",
	},
	{
		id: "cn-app",
		panelId: "product-details-cn-app",
		title: "Digitalisasi Resi & Dokumen Pengiriman dengan CN App",
		subtitle: "(CEISA 4.0 Ready)",
		description:
			"Satu platform untuk pencatatan, validasi, dan pelacakan e-Consignment Note lebih cepat, akurat, dan terstandardisasi lintas divisi. CN App membantu tim operasional, warehouse, dan compliance bekerja di jalur yang sama.",
		features: [
			{
				title: "Dokumen Pengiriman Digital",
				description:
					"Buat dan kelola e-Consignment Note dalam satu alur digital agar pencatatan serta pencarian dokumen lebih praktis.",
			},
			{
				title: "Validasi & Integrasi",
				description:
					"Dukung validasi proses dan integrasi CEISA 4.0 serta ERP/WMS agar aliran data operasional tetap konsisten.",
			},
		],
	},
	{
		id: "internal-app",
		panelId: "product-details-internal-app",
		title: "Optimalkan Operasional Internal dengan Aplikasi yang Terintegrasi dan Efisien",
		description:
			"Aplikasi internal yang dirancang mengikuti kebutuhan perusahaan untuk membantu koordinasi antar divisi, mempercepat persetujuan, dan meningkatkan transparansi kerja.",
		features: [
			{
				title: "Warehouse & Fulfillment Sync",
				description:
					"Automasi pembaruan status di WMS saat resi dibuat/diubah, serta membantu mengurangi mismatch antara fisik dan dokumen, sehingga status barang dan dokumen selalu sinkron—minim double entry.",
			},
			{
				title: "Logistics Management & Tracking",
				description:
					"Generate e-consignment dalam hitungan detik, lengkap dengan label & QR. Pantau pergerakan barang end-to-end secara real-time.",
			},
		],
		image: "/images/basic-internal-app.webp",
		imageAlt: "Tampilan aplikasi Basic Internal App MIU",
		imageClass: "product-details__image",
	},
];

const capabilities = [
	{
		id: "purchasing",
		label: "Purchasing",
		kicker: "Purchasing",
		title: "Kelola pembelian dari pemesanan hingga pembayaran",
		description:
			"Catat pembelian material, sparepart, dan minyak; lanjutkan prosesnya melalui penerimaan barang, pembayaran, penyesuaian, hingga retur ke supplier.",
		features: [
			{
				title: "Pemesanan dan penerimaan barang",
				description:
					"Catat Purchase Order untuk material dan sparepart, Purchase Advice untuk minyak, serta penerimaan barang dari supplier.",
			},
			{
				title: "Faktur dan pembayaran supplier",
				description:
					"Kelola Purchase Invoice, pembayaran melalui kas/bank, serta pencatatan panjar atau DP kepada supplier.",
			},
			{
				title: "Penyesuaian harga dan retur",
				description:
					"Catat penyesuaian harga, refund, barang reject, rencana retur, dan pengeluaran barang untuk dikembalikan ke supplier.",
			},
			{
				title: "Laporan dan traceability",
				description:
					"Tinjau jurnal transaksi, laporan internal, mutasi barang IT Inventory, dan riwayat pergerakan barang.",
			},
		],
	},
	{
		id: "production",
		label: "Production",
		kicker: "Production",
		title: "Rencanakan produksi dan kendalikan pergerakan material",
		description:
			"Hubungkan rencana kerja, permintaan dan pengeluaran material, hasil produksi, hingga pencatatan sisa produksi dan proses subkontrak.",
		features: [
			{
				title: "Mutasi dan permintaan material",
				description:
					"Catat perpindahan barang antar gudang, transfer ke area produksi, serta permintaan dan pengeluaran material untuk produksi.",
			},
			{
				title: "Work Order dan hasil produksi",
				description:
					"Rencanakan pekerjaan melalui Work Order, lalu catat barang jadi yang masuk dari proses produksi.",
			},
			{
				title: "Produk sampingan dan sisa material",
				description:
					"Catat hasil sampingan produksi, termasuk alur khusus Byprod SB, serta penerimaan kembali material sisa produksi.",
			},
			{
				title: "Subkontrak dan laporan",
				description:
					"Catat pengiriman ke subkontraktor dan hasil yang diterima kembali, beserta laporan transaksi, mutasi, dan traceability.",
			},
		],
	},
	{
		id: "sales",
		label: "Sales",
		kicker: "Sales",
		title: "Kelola dokumen penjualan hingga pembayaran customer",
		description:
			"Catat rencana pengeluaran barang, dokumen penjualan lokal maupun ekspor, pengiriman ke customer, dan penerimaan pembayaran dalam rangkaian transaksi yang saling terkait.",
		features: [
			{
				title: "Work Order sebagai acuan penjualan",
				description: "Work Order menjadi acuan rencana produksi dan proses penjualan.",
			},
			{
				title: "Packing list lokal dan ekspor",
				description: "Catat rencana pengeluaran barang yang akan dikirim kepada customer lokal maupun ekspor.",
			},
			{
				title: "Faktur dan pengiriman ke customer",
				description:
					"Catat Sales Invoice lokal/ekspor serta pengeluaran barang untuk memenuhi pengiriman penjualan.",
			},
			{
				title: "Penerimaan pembayaran dan laporan",
				description:
					"Catat Sales Receipt dan tinjau jurnal transaksi, laporan internal, mutasi barang IT Inventory, serta traceability.",
			},
		],
	},
	{
		id: "ceisa",
		label: "Host to Host (CEISA 4.0)",
		kicker: "Host to Host",
		title: "Integrasi proses kepabeanan dengan CEISA 4.0",
		description:
			"Bantu pengguna mengelola dokumen dan data kepabeanan dari sistem MIU, mengurangi input berulang, serta memantau respons dokumen tanpa perlu berpindah-pindah proses.",
		features: [
			{
				title: "Pembuatan dokumen BC 2.0 / BC 3.0",
				description: "Buat dokumen dengan mengunggah data entry melalui format Excel yang telah disiapkan.",
			},
			{
				title: "Master data dan salin data",
				description:
					"Gunakan data referensi, salin data AJU beserta detailnya, atau gunakan kembali data barang untuk mengurangi input ulang.",
			},
			{
				title: "Sinkronisasi kurs dan perhitungan tarif",
				description:
					"Sinkronkan kurs mata uang dan hitung tarif sesuai HS code detail barang saat menyusun draft dokumen.",
			},
			{
				title: "Unduh respons dan dokumen PDF",
				description:
					"Tarik status respons, unduh PDF respons atau ekspor dokumen BUP/BUE, dan cetak dokumen tanpa membuka portal CEISA 4.0.",
			},
			{
				title: "Perbaikan dan pembaruan dokumen",
				description: "Lakukan nota pembetulan (NOTUL) BC 3.0 atau ubah nomor AJU sesuai kebutuhan.",
			},
			{
				title: "Sinkronisasi BC 1.1",
				description:
					"Sinkronkan data manifest BC 1.1 untuk melengkapi informasi pada saat pembuatan draft dokumen.",
			},
		],
	},
];

const clients = [
	"PT. Medan Tropical Canning",
	"PT. Medan Tropical Canning",
	"PT. Daisen Wood Frame",
	"PT. Xinfung Industry Indonesia",
];

const testimonials = [
	{
		image: "/images/foto-mr-ck.png",
		name: "Mr. CK",
		role: "VP Information Technology - Mitra Logistik Multinasional",
		quote:
			"Sistem IT Inventory MIU adalah penyelamat tim compliance kami. Rekonsiliasi dokumen BC 2.3 dan laporan mutasi barang jadi selalu akurat setiap hari secara real-time.",
		direction: "left",
	},
	{
		image: "/images/foto-snoop-dog.png",
		name: "Snoop Dog",
		role: "Head of Logistics & Customs - Manufaktur Surabaya",
		quote:
			"Dukungan tim technical support MIU luar biasa responsif saat integrasi API CEISA 4.0 Bea Cukai versi terbaru. Sangat kami rekomendasikan untuk Kawasan Berikat.",
		direction: "right",
	},
	{
		image: "/images/foto-napoleon.png",
		name: "Napoleon",
		role: "GM Supply Chain - Kawasan Berikat Prancis",
		quote:
			"Sejak migrasi ke MIU, audit tahunan Bea Cukai kami selesai dalam dua jam tanpa ada selisih konversi bahan baku. Integrasi CEISA 4.0 sangat mulus dan stabil.",
		direction: "left",
	},
];

const ProductDetails: Component<{ selectedProduct: string }> = (props) => {
	return (
		<div class="product-details" aria-live="polite" aria-atomic="true">
			<For each={productDetails}>
				{(detail) => (
					<Show when={props.selectedProduct === detail.id}>
						<section
							class="product-details__panel"
							id={detail.panelId}
							aria-labelledby={`${detail.panelId}-title`}
							data-product-details={detail.id}
						>
							<div class="product-details__intro">
								<h2 id={`${detail.panelId}-title`}>
									{detail.title} <Show when={detail.subtitle}><span>{detail.subtitle}</span></Show>
								</h2>
								<p>{detail.description}</p>
							</div>
							<div classList={{ "product-details__showcase-layout": !!detail.image }}>
								<div class="product-details__features">
									<For each={detail.features}>
										{(feature) => (
											<article>
												<h3>{feature.title}</h3>
												<p>{feature.description}</p>
											</article>
										)}
									</For>
								</div>
								<Show when={detail.image}>
									<img
										class={detail.imageClass}
										src={detail.image}
										alt={detail.imageAlt}
										loading="lazy"
									/>
								</Show>
							</div>
							<A class="product-details__contact" href="/contact">
								Konsultasikan kebutuhan Anda <span aria-hidden="true">→</span>
							</A>
						</section>
					</Show>
				)}
			</For>
		</div>
	);
};

export const Products: Component = () => {
	const location = useLocation();
	const [selectedProduct, setSelectedProduct] = createSignal("inventory");
	const [selectedCapability, setSelectedCapability] = createSignal("purchasing");
	const desktopLayout = window.matchMedia("(min-width: 640px)");
	const [isDesktopLayout, setIsDesktopLayout] = createSignal(desktopLayout.matches);

	onMount(() => {
		const updateLayout = () => setIsDesktopLayout(desktopLayout.matches);
		desktopLayout.addEventListener("change", updateLayout);
		onCleanup(() => desktopLayout.removeEventListener("change", updateLayout));
	});

	createEffect(() => {
		const panel = productDetails.find((detail) => detail.panelId === location.hash.slice(1));
		if (!panel) return;

		setSelectedProduct(panel.id);
		requestAnimationFrame(() => {
			document.getElementById(panel.panelId)?.scrollIntoView({
				behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
			});
		});
	});

	const getOrderedProducts = () => {
		const selected = products.find((product) => product.id === selectedProduct()) ?? products[0];
		const otherProducts = products.filter((product) => product.id !== selected.id);

		return isDesktopLayout()
			? [otherProducts[0], selected, otherProducts[1]]
			: [selected, ...otherProducts];
	};

	const selectCapabilityByKey = (event: KeyboardEvent, index: number) => {
		let nextIndex: number;
		switch (event.key) {
			case "ArrowRight":
			case "ArrowDown":
				nextIndex = (index + 1) % capabilities.length;
				break;
			case "ArrowLeft":
			case "ArrowUp":
				nextIndex = (index - 1 + capabilities.length) % capabilities.length;
				break;
			case "Home":
				nextIndex = 0;
				break;
			case "End":
				nextIndex = capabilities.length - 1;
				break;
			default:
				return;
		}

		event.preventDefault();
		setSelectedCapability(capabilities[nextIndex].id);
		document.getElementById(`solution-tab-${capabilities[nextIndex].id}`)?.focus();
	};

	return (
		<main>
			<section
				id="product"
				class="bg-gradient-to-b from-[#eaf2ff] via-[#f7faff] to-white px-5 py-14 sm:px-8 sm:py-16 lg:py-20"
				aria-labelledby="product-title"
			>
				<div class="mx-auto max-w-6xl">
					<h1
						id="product-title"
						class="mx-auto mb-9 max-w-2xl text-center text-2xl font-bold leading-tight tracking-tight text-[#103e7d] sm:mb-11 sm:text-3xl"
						data-reveal="up"
					>
						Pilihan Solusi Sesuai Kebutuhan Pabrik &amp; Kawasan Berikat.
					</h1>

					<div class="product-card-grid grid grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-8" data-product-card-grid>
						<For each={getOrderedProducts()}>
							{(product) => (
								<article
									class={`product-card flex h-full flex-col rounded-xl border border-[#d2e0eb] bg-[#f5faff] p-5 shadow-sm transition-all duration-500 ease-in-out sm:p-6${selectedProduct() === product.id ? " is-selected" : ""}`}
									data-product-card={product.id}
									data-reveal="up"
									data-product-select={product.id}
								>
									<div class="flex min-h-14 items-start justify-between gap-4">
										<h2 class="text-lg font-bold leading-tight text-[#4f7f9d]">{product.title}</h2>
										<svg
											class="h-9 w-9 shrink-0 text-[#4f7f9d]"
											viewBox="0 0 40 40"
											fill="none"
											aria-hidden="true"
										>
											<path
												d={product.iconPath}
												stroke="currentColor"
												stroke-width="1.8"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
									<p class="mt-3 min-h-16 text-sm leading-relaxed text-slate-600">
										{product.description}
									</p>
									<div class="mt-5">
										<h3 class="text-xs font-bold text-slate-800">Suitable for:</h3>
										<ul class="mt-2 flex flex-col gap-1.5 text-sm text-slate-700">
											<For each={suitableFor}>
												{(item) => (
													<li class="flex items-center gap-2">
														<img
															class="h-4 w-4 shrink-0 object-contain"
															src={item.icon}
															alt=""
															aria-hidden="true"
															width="16"
															height="16"
															loading="lazy"
														/>
														{item.label}
													</li>
												)}
											</For>
										</ul>
									</div>
									<button
										type="button"
										class="product-card__button mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#dceefa] px-4 py-2 text-sm font-semibold text-[#3d7599] transition-all duration-500 ease-in-out hover:bg-[#b8ddf4] hover:text-[#174d79] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3984bf]"
										aria-controls={`product-details-${product.id}`}
										aria-pressed={selectedProduct() === product.id}
										onClick={() => setSelectedProduct(product.id)}
									>
										Selengkapnya
									</button>
								</article>
							)}
						</For>
					</div>

					<ProductDetails selectedProduct={selectedProduct()} />
				</div>
			</section>

			<section
				class="solution-capabilities"
				aria-labelledby="solution-capabilities-title"
				data-solution-features
			>
				<div class="solution-capabilities__inner">
					<header class="solution-capabilities__heading" data-reveal="up">
						<p class="solution-capabilities__eyebrow">Solusi MIU</p>
						<h2 id="solution-capabilities-title">Fitur untuk Setiap Proses Bisnis</h2>
						<p>Pilih area solusi untuk melihat bagaimana MIU membantu proses operasional bisnis Anda.</p>
					</header>

					<div class="solution-capabilities__tabs" role="tablist" aria-label="Kategori fitur solusi">
						<For each={capabilities}>
							{(capability, index) => (
								<button
									id={`solution-tab-${capability.id}`}
									type="button"
									role="tab"
									aria-controls={`solution-panel-${capability.id}`}
									aria-selected={selectedCapability() === capability.id}
									tabIndex={selectedCapability() === capability.id ? 0 : -1}
									onClick={() => setSelectedCapability(capability.id)}
									onKeyDown={(event) => selectCapabilityByKey(event, index())}
								>
									{capability.label}
								</button>
							)}
						</For>
					</div>

					<div class="solution-capabilities__panels">
						<For each={capabilities}>
							{(capability) => (
								<Show when={selectedCapability() === capability.id}>
									<section
										id={`solution-panel-${capability.id}`}
										class="solution-capabilities__panel"
										role="tabpanel"
										aria-labelledby={`solution-tab-${capability.id}`}
										tabIndex="0"
									>
										<div class="solution-capabilities__intro">
											<p>{capability.kicker}</p>
											<h3>{capability.title}</h3>
											<span>{capability.description}</span>
										</div>
										<ul class="solution-capabilities__features">
											<For each={capability.features}>
												{(feature) => (
													<li>
														<span aria-hidden="true">✓</span>
														<div>
															<h4>{feature.title}</h4>
															<p>{feature.description}</p>
														</div>
													</li>
												)}
											</For>
										</ul>
									</section>
								</Show>
							)}
						</For>
					</div>
				</div>
			</section>

			<section id="ecosystem" class="bg-[#f4f4f5] px-5 py-12 sm:px-8 sm:py-16" aria-labelledby="ecosystem-title">
				<div class="mx-auto max-w-6xl">
					<div class="grid gap-5 md:grid-cols-[1fr_0.72fr] md:items-end md:justify-between">
						<div data-reveal="left">
							<p class="mb-2 text-sm font-bold text-[#0871c4]">Ekosistem MIU</p>
							<h2
								id="ecosystem-title"
								class="text-2xl font-bold tracking-tight text-[#103e7d] sm:text-3xl"
							>
								Dipercaya oleh Bisnis Terbaik
							</h2>
						</div>
						<p class="max-w-lg text-sm leading-relaxed text-slate-600 md:justify-self-end" data-reveal="right">
							Diimplementasikan pada lini manufaktur berikat terdepan, logistik multinasional, dan
							konglomerasi industri Indonesia.
						</p>
					</div>

					<ul
						class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4"
						aria-label="Mitra dan klien"
					>
						<For each={clients}>
							{(client, index) => (
								<li class={index() === 3 ? "sm:col-start-2 lg:col-start-auto" : ""} data-reveal="up">
									<span class="flex min-h-12 items-center justify-center rounded-full border border-[#a9c9df] bg-[#d2edff] px-5 text-center text-sm font-medium text-slate-800 shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#bee5ff] hover:shadow-md">
										{client}
									</span>
								</li>
							)}
						</For>
					</ul>
				</div>
			</section>

			<section class="bg-white px-5 py-12 sm:px-8 sm:py-16" aria-labelledby="testimonial-title">
				<div class="mx-auto max-w-6xl">
					<p class="mb-1 text-sm font-bold text-[#0871c4]" data-reveal="up">
						Testimonial Eksekutif
					</p>
					<h2
						id="testimonial-title"
						class="max-w-3xl text-2xl font-bold leading-tight tracking-tight text-[#103e7d] sm:text-3xl"
						data-reveal="up"
					>
						Dukungan Nyata dari Para Pemimpin Industri
					</h2>

					<div class="mt-7 flex flex-col gap-5 sm:mt-8">
						<For each={testimonials}>
							{(testimonial) => (
								<article
									class={`rounded-2xl border border-[#c6d8e4] bg-[#eff9ff] p-5 shadow-sm transition-all duration-300 ease-in-out hover:border-[#8dbbda] hover:shadow-lg sm:p-7`}
									data-reveal={testimonial.direction}
								>
									<div class="flex flex-wrap items-center gap-4">
										<img
											class="h-10 w-10 rounded-full object-cover"
											src={testimonial.image}
											alt={`Foto ${testimonial.name}`}
											width="40"
											height="40"
											loading="lazy"
										/>
										<div
											class="flex gap-1 text-2xl leading-none text-[#e6e900]"
											role="img"
											aria-label="5 dari 5 bintang"
										>
											<For each={[1, 2, 3, 4, 5]}>
												{() => <span aria-hidden="true">★</span>}
											</For>
										</div>
									</div>
									<blockquote class="mt-4 text-base leading-relaxed text-slate-700">
										“{testimonial.quote}”
									</blockquote>
									<p class="mt-3 font-semibold text-slate-900">{testimonial.name}</p>
									<p class="text-sm text-[#3984ff]">{testimonial.role}</p>
								</article>
							)}
						</For>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Products;
