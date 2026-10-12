import { Component } from "solid-js";

export const Clients: Component = () => {
	return (
		<div class="flex w-full max-w-fit items-center overflow-x-auto space-x-12 p-2">
			<div class="shrink-0">
				<img src="/img/clients/advantage-scm.png" class="h-16 w-auto" />
			</div>
			<div class="shrink-0">
				<img src="/img/clients/bpr-ss.png" class="h-16 w-auto" />
			</div>
			<div class="shrink-0">
				<img src="/img/clients/bmr.png" class="h-16 w-auto" />
			</div>
			<div class="shrink-0">
				<img src="/img/clients/jnt.png" class="h-16 w-auto" />
			</div>
		</div>
	);
};
