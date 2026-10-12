import { Component } from "solid-js";

export const CFit: Component = () => {
	return (
		<div class="flex justify-center py-8">
			<div class="flex flex-col lg:flex-row w-full max-w-[96rem]">
				<div class="flex-1 space-y-8 bg-blue-500 text-white p-8">
					<h2 class="text-3xl font-bold">C-FIT</h2>
					<div class="text-right">
						C-FIT adalah singkatan dari Custom(er)s Flow IT Inventory, yang mengartikan bahwa program C-FIT
						ini akan melengkapi & memenuhi (FIT) flow yang diinginkan dari Bea Cukai (Customs) dan Pelanggan
						(Customers), dan biasa digunakan untuk KB,PLB,GB, & KITE.
					</div>
				</div>
				<div class="flex-1 space-y-8 p-8 bg-neutral-100">
					<h2 class="text-3xl font-bold">C-FIT Exclusive</h2>
					<div class="text-right">
						C-FIT Exclusive mencakup semua fitur C-FIT, dengan tambahan fitur dan laporan lain yang lebih
						exclusive terhadap setiap Customer.
					</div>
					<div class="flex justify-end">
						<img src="/img/miu.png" class="w-16 h-16" />
					</div>
				</div>
			</div>
		</div>
	);
};
