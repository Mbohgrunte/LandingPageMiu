import { Component, createSignal, Show } from "solid-js";
import { Icon } from "../components/icon";
import { Registration } from "../components/registration";

type ProductProps = {
	title: string;
	description: string;
	imageUrl: string;
};

const Product: Component<ProductProps> = (props) => {
	return (
		<div class="relative flex flex-col space-y-6 justify-center bg-white rounded-xl py-12 px-6 text-sky-950 pr-48">
			<img class="absolute w-48 h-auto top-[-25%] right-0" src={props.imageUrl}></img>

			<h3 class="text-2xl font-bold">{props.title}</h3>
			<div class="">{props.description}</div>
			{/* TODO */}
			{/* <button class="rounded bg-sky-700/75 px-4 py-2 max-w-max font-medium cursor-pointer">Learn More</button> */}
		</div>
	);
};

const Insight: Component<{
	title: string;
	description: string;
	imageUrl: string;
}> = (props) => {
	return (
		<div class="flex flex-col space-y-4 bg-gray-100 p-4 rounded-xl text-sky-950">
			<img src={props.imageUrl} class="max-h-64 rounded-xl object-cover" />
			<div class="px-2 py-4 space-y-2.5">
				<h3 class="text-lg font-semibold">{props.title}</h3>
				<div>{props.description}</div>
			</div>
		</div>
	);
};

const Faq: Component<{
	title: string;
	description: string;
}> = (props) => {
	const [isShown, setIsShown] = createSignal(false);

	return (
		<div class="flex flex-col space-y-4 max-w-5xl w-full">
			<div
				class="flex space-x-4 items-center p-4 pr-8 w-full rounded cursor-pointer"
				classList={{
					"bg-sky-700/75": !isShown(),
					"bg-sky-700": isShown(),
				}}
				onClick={() => setIsShown((v) => !v)}
			>
				<Icon name={isShown() ? "chevronDown" : "chevronRight"} size="xl" class="text-white" />
				<div class="font-medium text-white">{props.title}</div>
			</div>

			<Show when={isShown()}>
				<p class="px-8 text-sky-950">{props.description}</p>
			</Show>
		</div>
	);
};

const Home: Component = () => {
	return (
		<>
			<div
				class="flex items-center justify-center w-full h-full min-h-[48rem] relative pt-18 parallax-background"
				style={{ "background-image": "url('/img/background-server.png')" }}
			>
				<div class="flex flex-col w-full px-4 py-12 gap-16">
					<div class="flex flex-col h-min max-w-4xl space-y-6 p-12 text-sky-950">
						<h3 class="text-2xl font-semibold">Mitra Inovasi Unggul</h3>
						<h1 class="text-6xl font-bold">Trusted IT Solutions for Faster Business Operations</h1>
						<p>Providing Intelligent Software for Efficient Solutions</p>
						<div class="flex flex-row space-x-2.5">
							<a href="#contact">
								<button class="rounded bg-white px-6 py-2 font-medium cursor-pointer">
									Schedule Free Consultation
								</button>
							</a>
							<a href="#content">
								<button class="rounded border border-sky-950 px-6 py-2 font-medium cursor-pointer">
									Learn More
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 py-6">
				<img class="w-full max-w-[50%]" src="/img/indonesia.png" />

				<div id="content" class="flex flex-col space-y-8 px-4 lg:px-8 text-center lg:text-left text-sky-950">
					<h2 class="text-2xl lg:text-6xl font-extrabold object-cover">24/7 Support</h2>
					<div class="text-xl font-semibold text-sky-950/75">Melayani client di seluruh Indonesia</div>
				</div>
			</div>

			<div class="flex flex-col py-4 lg:py-16 px-4 lg:px-16 bg-gradient-to-b from-sky-200 to-white">
				<h2 class="text-2xl lg:text-4xl font-bold space-x-1.5">
					<span class="text-sky-950">Solution for your Business</span>
				</h2>

				<div class="w-full max-w-[36rem] pt-4 pb-12 text-lg text-sky-950">
					Highlighting the key features and benefits of the software company's flagship products.
				</div>

				<div class="grid 2xl:grid-flow-row 2xl:grid-cols-3 py-12 gap-4">
					<Product
						title="IT Inventory App"
						description="Kami percaya efisiensi bukan hanya soal angka, tapi tentang bagaimana teknologi mempermudah manusia. Melalui IT Inventory App, perusahaan dapat memantau seluruh perangkat, lisensi, dan aset digital secara real-time — tanpa lagi laporan manual yang memakan waktu."
						imageUrl="/img/it-inventory.png"
					/>

					<Product
						title="CN App"
						description="Dalam dunia bisnis yang serba cepat, komunikasi internal yang efisien adalah segalanya. Dengan CN App berbasis CEISA 4.0, kami membantu perusahaan menyatukan data lintas departemen melalui sistem yang aman dan mudah diakses."
						imageUrl="/img/cn-app.png"
					/>

					<Product
						title="Basic Internal App"
						description="Bagi banyak perusahaan kecil dan menengah, digitalisasi sering terdengar mahal dan rumit. Kami ingin mengubah pandangan itu. Melalui Internal App, kami membantu tim Anda beralih dari proses manual ke sistem digital yang sederhana namun efektif — mulai dari pengajuan approval, absensi, hingga manajemen gudang."
						imageUrl="/img/basic-app.png"
					/>
				</div>
			</div>

			<div class="flex flex-col py-4 lg:py-16 px-4 lg:px-16">
				<h2 class="text-2xl lg:text-4xl font-bold space-x-1.5 text-sky-950">Our Work</h2>

				{/* <div class="w-full max-w-[36rem] pt-4 pb-8 text-lg text-sky-950">
					Lorem ipsum dolor sit amet que spada lorem ipsumin dolor sit
				</div> */}

				<div class="grid lg:grid-flow-row lg:grid-cols-3 py-12 gap-4">
					<Insight
						title="Regional"
						imageUrl="/img/cities.jpg"
						description="Dari Pulau Jawa hingga Pulau Sumatera, kami telah berkolaborasi dengan lebih dari 30 perusahaan dalam mengembangkan aplikasi digital yang meningkatkan efisiensi operasional dan keandalan data. Setiap proyek kami dirancang dengan pendekatan profesional, hasil nyata, dan teknologi terkini untuk mendorong pertumbuhan bisnis klien kami."
					/>
					<Insight
						title="CEISA Professional"
						imageUrl="/img/ceisa.jpg"
						description="Kami turut berkontribusi dalam pengembangan sistem CEISA 4.0 dengan mendukung digitalisasi proses ekspor-impor Indonesia melalui platform yang aman, modern, dan terintegrasi dengan kebutuhan industri. Solusi IT Inventory kami membantu perusahaan menyiapkan, mengirim, dan memantau dokumen kepabeanan yang terhubung dengan CEISA 4.0 secara lebih mudah, cepat, dan efisien, sekaligus meningkatkan transparansi alur kerja dan data antar lembaga."
					/>
					<Insight
						imageUrl="/img/people_2.jpg"
						title="Widely Diverse Partners"
						description="Mulai dari sistem inventaris IT, aplikasi internal kantor, hingga platform CN App (CEISA 4.0), kami membantu perusahaan meningkatkan efisiensi, akurasi, dan pertumbuhan bisnis melalui teknologi yang andal dan terukur. Fleksibilitas kami dalam menyesuaikan sistem membuat setiap aplikasi menjadi relevan, scalable, dan mudah diadopsi oleh tim internal klien."
					/>
				</div>
			</div>

			<div id="faq" class="flex flex-col lg:flex-row py-4 lg:py-16 px-4 lg:px-16 lg:space-x-8">
				<div class="space-y-8">
					<h2 class="text-lg lg:text-2xl font-semibold space-x-1.5 text-sky-950">FAQs</h2>
					<h2 class="text-2xl lg:text-4xl font-bold space-x-1.5 text-sky-950">Most Asked Question</h2>

					<div class="w-full max-w-[36rem] pt-4 pb-8 text-lg text-sky-950">
						Didn’t find what you’re looking for? Let us know, We’ve got real humans ready to answer.
					</div>
				</div>

				<div class="flex flex-col grow space-y-4 py-12">
					<Faq
						title="Apa itu IT Inventory App dan bagaimana manfaatnya bagi bisnis?"
						description="IT Inventory App cocok untuk perusahaan yang ingin mendapatkan fasilitas seperti KB,GB,KEK,KITE,dll, App ini akan memberikan kemudahan untuk user dalam penginputan dan pelaporan fasilitas tersebut."
					/>
					<Faq
						title="Apa keunggulan CN App (CEISA 4.0)?"
						description="CN App yang kami sediakan mengikuti standar CEISA 4.0 (Customs-Excise Information System and Automation) dan mendukung pengelolaan e-consignment note (resi digital) secara aman, cepat, dan terintegrasi, sehingga cocok untuk perusahaan logistik, ekspor-impor, atau distribusi."
					/>
					<Faq
						title="Apa itu Basic Internal App dan siapa yang cocok menggunakannya?"
						description="Basic Internal App merupakan solusi digital untuk otomatisasi pekerjaan internal, seperti manajemen gudang, absensi, approval, dan pelaporan. Ideal bagi UMKM atau perusahaan yang ingin digitalisasi tanpa biaya tinggi."
					/>
					<Faq
						title="Apakah solusi yang ditawarkan bisa disesuaikan (custom) dengan kebutuhan perusahaan kami?"
						description="Tentu bisa, setiap proyek kami mulai dengan analisis kebutuhan bisnis untuk memastikan desain, fitur, dan workflow benar-benar sesuai tujuan perusahaan Anda."
					/>
					<Faq
						title="Apakah tersedia layanan after-sales dan maintenance?"
						description="Tersedia, kami menyediakan layanan maintenance berkala, bug fixing, update fitur, dan technical support dari tim MIU agar aplikasi Anda selalu optimal dan aman digunakan."
					/>
					<Faq
						title="Apakah data perusahaan kami akan aman?"
						description="Keamanan adalah prioritas utama kami. Setiap sistem yang kami bangun dilengkapi dengan enkripsi, role-based access, dan sistem autentikasi."
					/>
				</div>
			</div>

			<Registration />
		</>
	);
};

export default Home;
