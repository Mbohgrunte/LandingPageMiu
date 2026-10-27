import { createSignal, type Component } from "solid-js";
import { Api } from "../../api";

type ContactFormProps = {
	title: string;
};

export const ContactForm: Component<ContactFormProps> = (props) => {
	const api = new Api();
	const [isSubmitting, setIsSubmitting] = createSignal(false);
	const [successMessage, setSuccessMessage] = createSignal("");
	const [errorMessage, setErrorMessage] = createSignal("");

	const onSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		const form = event.currentTarget;
		if (!(form instanceof HTMLFormElement)) {
			setErrorMessage("Form tidak dapat diproses. Silakan muat ulang halaman dan coba kembali.");
			return;
		}

		setIsSubmitting(true);
		setSuccessMessage("");
		setErrorMessage("");

		const formData = new FormData(form);

		try {
			await api.contactUsSubmission({
				name: String(formData.get("name") ?? ""),
				email: String(formData.get("email") ?? ""),
				address: String(formData.get("company") ?? ""),
				description: String(formData.get("message") ?? ""),
			});
			setSuccessMessage("Pesan Anda berhasil dikirim. Tim kami akan segera menghubungi Anda.");
			form.reset();
		} catch (error) {
			setErrorMessage(error instanceof Error ? error.message : "Pesan gagal dikirim. Silakan coba kembali.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form class="contact-form" onSubmit={onSubmit}>
			<h2>{props.title}</h2>
			<p class="contact-form__description">
				Konsultasikan kebutuhan digitalisasi proses bisnis Anda bersama tim kami.
			</p>

			{successMessage() && (
				<p class="contact-form__success" role="status">
					{successMessage()}
				</p>
			)}
			{errorMessage() && (
				<p class="contact-form__error-summary" role="alert">
					{errorMessage()}
				</p>
			)}

			<label for="contact-name">Nama</label>
			<input
				id="contact-name"
				name="name"
				type="text"
				autocomplete="name"
				placeholder="Nama lengkap"
				maxlength="120"
				required
			/>

			<label for="contact-email">Email</label>
			<input
				id="contact-email"
				name="email"
				type="email"
				autocomplete="email"
				placeholder="nama@perusahaan.com"
				maxlength="255"
				required
			/>

			<label for="contact-company">Perusahaan</label>
			<input
				id="contact-company"
				name="company"
				type="text"
				autocomplete="organization"
				placeholder="Nama perusahaan"
				maxlength="255"
			/>

			<label for="contact-message">Deskripsi</label>
			<textarea
				id="contact-message"
				name="message"
				rows="4"
				maxlength="5000"
				placeholder="Ceritakan kebutuhan Anda..."
				required
			/>

			<p class="contact-form__note">Pesan Anda akan dikirim langsung ke tim kami.</p>
			<button type="submit" disabled={isSubmitting()}>
				{isSubmitting() ? "Mengirim..." : "Kirim Pesan"} <span aria-hidden="true">→</span>
			</button>
		</form>
	);
};
