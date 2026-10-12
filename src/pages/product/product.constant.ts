// Type definitions
export interface SuitableFor {
	label: string;
	icon: string;
}

export interface GridContent {
	title: string;
	description: string;
	icon: string;
	suitableFor: SuitableFor[];
	buttonText: string;
	path: string;
}

export interface HeroBlock {
	title: string;
	description: string;
	bgStyle: string;
}

export interface HeroActionBlock {
	title: string;
	bgStyle: string;
}

export interface HeroContent {
	heroVisualImage: string;
	heroPrimaryBlock: HeroBlock;
	heroSecondaryBlock: HeroBlock;
	heroActionBlock: HeroActionBlock;
}

interface BaseProductTab {
	title: string;
	headerType: "center" | "between";
	header: string;
	description: string;
	linkContent: string;
	linkTarget: string;
}

type GridTab = BaseProductTab & {
	layout: "grid";
	contents: GridContent[];
};

type HeroRightTab = BaseProductTab & {
	layout: "hero-right";
	contents: HeroContent;
};

type HeroLeftTab = BaseProductTab & {
	layout: "hero-left";
	contents: HeroContent;
};

export type ProductTab = GridTab | HeroRightTab | HeroLeftTab;

export const ALL_PRODUCTS = [
	{
		title: "IT Inventory",
		description: "Pengembangan Perangkat Lunak dan Manajemen Inventaris IT untuk Pertumbuhan Bisnis Anda",
		icon: "/img/it-inventory-icon.png",
		suitableFor: [
			{ label: "Warehouse", icon: "/img/warehouse.png" },
			{ label: "Logistic", icon: "/img/shipped.png" },
			{ label: "Brands", icon: "/img/brand.png" },
		],
		buttonText: "Learn More",
		path: "/product/it-inventory",
	},
	{
		title: "CN App",
		description: "aplikasi digital untuk pembuatan dan pengelolaan e-consignment note (resi digital).",
		icon: "/img/cn-app-icon.png",
		suitableFor: [
			{ label: "Warehouse", icon: "/img/warehouse.png" },
			{ label: "Logistic", icon: "/img/shipped.png" },
			{ label: "Brands", icon: "/img/brand.png" },
		],
		buttonText: "Learn More",
		path: "/product/cn-app",
	},
	{
		title: "Basic Internal App",
		description:
			"platform yang dirancang untuk mendigitalisasi proses internal perusahaan dan memberikan efisiensi dalam operasional perusahaan Anda",
		icon: "/img/basic-internal-app-icon.png",
		suitableFor: [
			{ label: "Warehouse", icon: "/img/warehouse.png" },
			{ label: "Logistic", icon: "/img/shipped.png" },
			{ label: "Brands", icon: "/img/brand.png" },
		],
		buttonText: "Learn More",
		path: "/product/basic-internal-app",
	},
];

const IT_INVENTORY_APP = {
	heroVisualImage: "",
	heroPrimaryBlock: {
		title: "Asset Lifecycle Automation",
		description:
			"Otomatisasi Create–Assign–Return–Dispose dengan jejak lengkap. Setiap penambahan, pengurangan aset tercatat rapi dan dapat ditelusuri.",
		bgStyle: "bg-gradient-to-br to-90% from-sky-600 to-blue-400/50",
	},
	heroSecondaryBlock: {
		title: "Real-Time Stock & Distribution",
		description:
			"Cycle count & stock-take tanpa mengganggu operasional serta, jika dibutuhkan juga kami mendukung fitur barcode/QR untuk inventaris cepat dan akurat.",
		bgStyle: "bg-gradient-to-b from-blue-400/50 to-slate-200",
	},
	heroActionBlock: {
		title: "Pelajari Lebih Lanjut",
		bgStyle: "bg-blue-400/50",
	},
};

const CN_APP = {
	heroVisualImage: "",
	heroPrimaryBlock: {
		title: "Warehouse & Fulfillment Sync",
		description:
			"Automasi pembaruan status di WMS saat resi dibuat/diubah, serta membantu mengurangi mismatch antara fisik dan dokumen, sehingga status barang dan dokumen selalu sinkron—minim double entry.",
		bgStyle: "bg-gradient-to-br from-sky-200 to-violet-500 text-sky-950",
	},
	heroSecondaryBlock: {
		title: "Logistics Management & Tracking",
		description:
			"Generate e-consignment dalam hitungan detik, lengkap dengan label & QR. Pantau pergerakan barang end-to-end secara real-time.",
		bgStyle: "bg-gradient-to-b from-blue-200 to-slate-200",
	},
	heroActionBlock: {
		title: "Learn More",
		bgStyle: "bg-blue-800/70 text-sky-950",
	},
};

const BASIC_INTERNAL_APP = {
	heroVisualImage: "/img/basic-internal-app.jpg",
	heroPrimaryBlock: {
		title: "Centralized Data Management",
		description:
			"Seluruh data — mulai dari absensi, gudang, hingga laporan — tersimpan aman di satu dashboard terpusat. Akses cepat, data konsisten, dan keputusan bisa diambil lebih cepat dengan analitik real-time.",
		bgStyle: "bg-gradient-to-br from-sky-700/25 to-slate-400 text-sky-950",
	},
	heroSecondaryBlock: {
		title: "Smart Workflow Automation",
		description:
			"Hilangkan proses manual dan spreadsheet yang membingungkan. Sistem kami mengotomatisasi approval, notifikasi, serta pelaporan, sehingga tim Anda bisa fokus pada hal yang lebih strategis.",
		bgStyle: "bg-gradient-to-b from-slate-400 via-sky-700/25 to-slate-100",
	},
	heroActionBlock: {
		title: "Learn More",
		bgStyle: "bg-sky-700/25 text-sky-950",
	},
};

export const PRODUCTS_TABS: ProductTab[] = [
	{
		title: "ALL PRODUCT",
		headerType: "center",
		header: "Semua Produk MIU",
		description:
			"Kami menyediakan layanan untuk mempermudah sistem dibisnis anda. Temukan layanan yang cocok bisnismu Hubungi kami.",
		linkContent: "Hubungi Kami",
		linkTarget: "/",
		layout: "grid",
		contents: ALL_PRODUCTS,
	},
	{
		title: "IT Inventory App",
		layout: "hero-right",
		headerType: "between",
		header: "IT Inventory App (KB,GB,KEK,KITE,PLB)",
		description:
			"Satu dashboard untuk mengelola Data untuk perusahaan pengguna fasilitas. IT Inventory App dari MIU memetakan seluruh siklus aset: dari pengadaan, penempatan, peminjaman, hingga disposisi. Mendukung multi-location, barcode/QR, dan integrasi ke ERP/HR. Real-time, akurat, siap audit",
		linkContent: "Lihat Selengkapnya",
		linkTarget: "/product/it-inventory",
		contents: IT_INVENTORY_APP,
	},
	{
		title: "CN App",
		layout: "hero-left",
		headerType: "between",
		header: "Digitalkan Resi & Dokumen Pengiriman dengan CN App (CEISA 4.0 Ready)",
		description:
			"Satu platform untuk pencatatan, validasi, dan pelacakan e-Consignment Note lebih cepat, akurat, dan terstandarisasi lintas divisi. CN App membantu tim operasional, warehouse, dan compliance bekerja di jalur yang sama: input sekali, terpakai di semua proses. Mendukung CEISA 4.0, audit trail lengkap, dan integrasi ke ERP/WMS agar aliran data tetap mulus.",
		linkContent: "Lihat Selengkapnya",
		linkTarget: "/product/cn-app",
		contents: CN_APP,
	},
	{
		title: "Basic Internal App",
		layout: "hero-right",
		headerType: "between",
		header: "Optimalkan Operasional Internal Anda dengan Aplikasi yang Terintegrasi dan Efisien",
		description:
			"Aplikasi internal yang kami buatkan untuk Anda, dirancang untuk memudahkan koordinasi antar divisi, mempercepat persetujuan, dan meningkatkan transparansi kerja dalam setiap level organisasi. (dapat diperbesar fontnya)",
		linkContent: "Lihat Selengkapnya",
		linkTarget: "/product/basic-internal-app",
		contents: BASIC_INTERNAL_APP,
	},
];

export const PRODUCTS = {
	"it-inventory": {
		hero: {
			title: "Solusi Cerdas untuk Efisiensi Bisnismu",
			cta: ["C-FIT", "C-FIT Exclusive"],
		},
		sectionTitle: "IT INVENTORY MIU",
		sectionDescription:
			"Perangkat lunak manajemen persediaan untuk mencatat seluruh aktivitas barang secara otomatis dan akurat, terintegrasi dengan proses logistik, produksi, dan akuntansi, serta mengikuti regulasi dari Direktorat Jenderal Bea Cukai.",
		sections: [
			{
				title: "C-FIT",
				description:
					"Singkatan dari Customers Flow IT Inventory, program C-FIT ini akan melangkapi & memenuhi IT Inventory flow yang diinginkan dari Bea Cukai (Customs) dan Pelanggan (Customers), dan biasa digunakan untuk KPLB, GB, & KITE Kemudahan Impor Tujuan Ekspor.",
				image: "/img/placeholders/no-image.png",
				benefitImage: "/img/placeholders/no-image.png",
				benefits: [
					"<b>Real-time: </b> Memantau pergerakan barang secara real-time, mengurangi kesalahan pencatatan.",
					"<b>Kepatuhan Regulasi: </b> Memenuhi persyaratan pelaporan Bea Cukai.",
					"<b>Efisiensi Operasional: </b> Mengotomatiskan proses inventaris, mengurangi input manual.",
				],
				cta: "Get Offer Here",
			},
			{
				title: "C-FIT EXCLUSIVE",
				description:
					"mencakup semua fitur C-FIT, dengan tambahan fitur dan laporan lain yang lebih exclusive terhadap setiap Customer.",
				image: "/img/placeholders/no-image.png",
				benefitImage: "/img/placeholders/no-image.png",
				benefits: [
					"<b>Real-time: </b> Memantau pergerakan barang secara real-time, mengurangi kesalahan pencatatan.",
					"<b>Kepatuhan Regulasi: </b> Memenuhi persyaratan pelaporan Bea Cukai.",
					"<b>Efisiensi Operasional: </b> Mengotomatiskan proses inventaris, mengurangi input manual.",
					"<b>Kustomisasi Laporan Khusus: </b> Dapat disesuaikan dengan alur kerja perusahaan Anda.",
					"<b>Laporan Eksklusif: </b> Fitur pelaporan yang lebih eksklusif, lengkap, dan terintegrasi.",
				],
				cta: "Get Offer Here",
			},
		],
		difference: {
			title: "DIFFERENCE C-FIT & C-FIT BENEFIT",
			image: "/img/placeholders/no-image.png",
			columns: [
				{
					title: "C-FIT",
					image: "/img/chip.png",
					features: [
						"Layanan untuk memantau bisnis Anda, termasuk:",
						"Tersusun untuk alur standar, Nah abis itu...",
						"Tersusun untuk alur standar, adaptasi minimum, simple, cepat implementasi.",
						"Cocok untuk perusahaan yang ingin go digital, tapi belum punya sistem.",
						"Sistem yang sudah teruji di perusahaan besar.",
						"Bisa digunakan untuk perusahaan kecil, menengah, dan besar.",
						"Sudah termasuk pelaporan regulasi pemerintah & bea cukai.",
					],
					cta: "Beli sekarang",
				},
				{
					title: "C-FIT Benefit",
					image: "/img/chip.png",
					features: [
						"Layanan untuk memantau bisnis Anda, termasuk:",
						"Tersusun untuk alur standar, Nah abis itu...",
						"Tersusun untuk alur standar, adaptasi minimum, simple, cepat implementasi.",
						"Cocok untuk perusahaan yang ingin go digital, tapi belum punya sistem.",
						"Sistem yang sudah teruji di perusahaan besar.",
						"Bisa digunakan untuk perusahaan kecil, menengah, dan besar.",
						"Sudah termasuk pelaporan regulasi pemerintah & bea cukai.",
					],
					cta: "Beli sekarang",
				},
			],
			cta: "TEMUKAN PAKET TERBAIK UNTUK BISNIS ANDA",
		},
	},
	"cn-app": {
		hero: {
			title: "Inovasi Digital untuk Riset dan Pengiriman Efisien",
			cta: ["E-LN", "E-Connote"],
		},
		sectionTitle: "TENTANG CN APP",
		sectionDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		sections: [
			{
				title: "E-CONNOTE",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
				image: "/img/placeholders/no-image.png",
				benefitImage: "/img/placeholders/no-image.png",
				benefits: [
					"<b>Real-time:</b> Memantau pengiriman barang secara real-time, mengurangi kesalahan pencatatan.",
					"<b>Kepatuhan Regulasi:</b> Memenuhi persyaratan pelayanan Bea Cukai.",
					"<b>Efisiensi Operasional:</b> Mengotomatiskan proses resi, mengurangi input manual.",
				],
				cta: "Get Offer Here",
			},
			{
				title: "E-LN APP",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
				image: "/img/placeholders/no-image.png",
				benefitImage: "/img/placeholders/no-image.png",
				benefits: [
					"<b>Real-time:</b> Memantau pengiriman barang secara real-time, mengurangi kesalahan pencatatan.",
					"<b>Kepatuhan Regulasi:</b> Memenuhi persyaratan pelayanan Bea Cukai.",
					"<b>Efisiensi Operasional:</b> Mengotomatiskan proses resi, mengurangi input manual.",
				],
				cta: "Get Offer Here",
			},
		],
		difference: {
			title: "DIFFERENCE E-LN & E-CONNOTE",
			image: "/img/placeholders/no-image.png",
			columns: [
				{
					title: "E-LN App",
					image: "/img/chip.png",
					features: [
						"Layanan untuk memantau bisnis Anda, termasuk:",
						"Toam lorem akurat dan efisien, adaptasi minimum, simple, cepat implementasi.",
						"Cocok untuk perusahaan yang ingin go digital, tapi belum punya sistem.",
						"Sistem yang sudah teruji di perusahaan besar.",
						"Bisa digunakan untuk perusahaan kecil, menengah, dan besar.",
						"Sudah termasuk pelaporan regulasi pemerintah & bea cukai.",
					],
					cta: "Beli sekarang",
				},
				{
					title: "E-Connote",
					image: "/img/chip.png",
					features: [
						"Layanan untuk memantau bisnis Anda, termasuk:",
						"Toam lorem akurat dan efisien, adaptasi minimum, simple, cepat implementasi.",
						"Cocok untuk perusahaan yang ingin go digital, tapi belum punya sistem.",
						"Sistem yang sudah teruji di perusahaan besar.",
						"Bisa digunakan untuk perusahaan kecil, menengah, dan besar.",
						"Sudah termasuk pelaporan regulasi pemerintah & bea cukai.",
					],
					cta: "Beli sekarang",
				},
			],
			cta: "TEMUKAN PAKET TERBAIK UNTUK BISNIS ANDA",
		},
	},
	"basic-internal-app": {
		hero: {
			title: "Digital Manajemen Gudang dan Logistik yang Efisien",
			cta: ["Manajemen Gudang", "Logistic Management"],
		},
		sectionTitle: "TENTANG BASIC INTERNAL APP",
		sectionDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
		sections: [
			{
				title: "WAREHOUSE MANAGEMENT",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
				image: "/img/placeholders/no-image.png",
				benefitImage: "/img/placeholders/no-image.png",
				benefits: [
					"<b>Real-time:</b> Memantau pergerakan barang secara real-time, mengurangi kesalahan pencatatan.",
					"<b>Kepatuhan Regulasi:</b> Memenuhi persyaratan pelaporan Bea Cukai.",
					"<b>Efisiensi Operasional:</b> Mengotomatiskan proses inventaris, mengurangi input manual.",
					"<b>Kustomisasi Alur Kerja:</b> Dapat disesuaikan dengan alur kerja perusahaan Anda.",
				],
				cta: "Get Offer Here",
			},
			{
				title: "LOGISTIC MANAGEMENT",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
				image: "/img/placeholders/no-image.png",
				benefitImage: "/img/placeholders/no-image.png",
				benefits: [
					"<b>Real-time:</b> Memantau pergerakan barang secara real-time, mengurangi kesalahan pencatatan.",
					"<b>Kepatuhan Regulasi:</b> Memenuhi persyaratan pelaporan Bea Cukai.",
					"<b>Efisiensi Operasional:</b> Mengotomatiskan proses logistik, mengurangi input manual.",
				],
				cta: "Get Offer Here",
			},
		],
		difference: {
			title: "DIFFERENCE WAREHOUSE & LOGISTIC MANAGEMENT",
			image: "/img/placeholders/no-image.png",
			columns: [
				{
					title: "C-Fit",
					image: "/img/chip.png",
					features: [
						"Layanan untuk memantau bisnis Anda, termasuk:",
						"Toam lorem akurat dan efisien, adaptasi minimum, simple, cepat implementasi.",
						"Cocok untuk perusahaan yang ingin go digital, tapi belum punya sistem.",
						"Sistem yang sudah teruji di perusahaan besar.",
						"Bisa digunakan untuk perusahaan kecil, menengah, dan besar.",
						"Sudah termasuk pelaporan regulasi pemerintah & bea cukai.",
					],
					cta: "Beli sekarang",
				},
				{
					title: "C-Fit Benefit",
					image: "/img/chip.png",
					features: [
						"Layanan untuk memantau bisnis Anda, termasuk:",
						"Toam lorem akurat dan efisien, adaptasi minimum, simple, cepat implementasi.",
						"Cocok untuk perusahaan yang ingin go digital, tapi belum punya sistem.",
						"Sistem yang sudah teruji di perusahaan besar.",
						"Bisa digunakan untuk perusahaan kecil, menengah, dan besar.",
						"Sudah termasuk pelaporan regulasi pemerintah & bea cukai.",
					],
					cta: "Beli sekarang",
				},
			],
			cta: "TEMUKAN PAKET TERBAIK UNTUK BISNIS ANDA",
		},
	},
};
