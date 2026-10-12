import { Navigate } from "@solidjs/router";
import App from "./App";
import About from "./pages/about";
import Contact from "./pages/contact";
import DokumenBarangKiriman from "./pages/dokumen-barang-kiriman";
import Home from "./pages/home.page";
import Products from "./pages/product";
import { Product } from "./pages/product/product.page";

export const routes = [
	{
		path: "/",
		component: App,
		children: [
			{
				path: "/",
				component: Home,
			},
			{
				path: "/product",
				component: Products,
			},
			,
			{
				path: "/product/:product",
				component: Product,
			},
			{
				path: "/about",
				component: About,
			},
			{
				path: "/contact",
				component: Contact,
			},
			{
				path: "/dokumen-barang-kiriman",
				component: DokumenBarangKiriman,
			},
			{
				path: "*",
				component: () => <Navigate href={"/"} />,
			},
		],
	},
];
