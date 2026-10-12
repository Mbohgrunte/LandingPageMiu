export class Api {
	private baseUrl = import.meta.env.VITE_API_BASE_URL;

	async contactUsSubmission(data: { name: string; email: string; address: string; description: string }) {
		return await fetch(`${this.baseUrl}/contact-us`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
	}
}
