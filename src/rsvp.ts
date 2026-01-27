import { z, ZodError } from "zod";

const prepareForm = (el: Element) => {
	if (!(el instanceof HTMLFormElement)) return;

	const email = async (body: string) => {
		const response = await fetch(el.action, {
			method: "POST",
			body,
			headers: {
				Authorization: "Bearer z+]t}(;5RMF6W3e2k%AIC#k9[p)0n3bP",
			},
		});

		const result = await response.json();
		return !!result;
	};

	const parseForm = () => {
		const raw = Object.fromEntries(new Map(new FormData(el)).entries());
		console.log(raw);

		return z
			.object({
				email: z.email(),
				name: z.string(),
				rsvp: z.coerce.boolean(),
				message: z.string(),
			})
			.parse(raw);
	};

	const setFormStatus = () => {
		try {
			parseForm();
			el.dataset.rsvp = "valid";
		} catch (err) {
			console.log(err);
			el.dataset.rsvp = "invalid";
		}
	};

	el.addEventListener("change", setFormStatus);

	el.addEventListener("submit", async (ev) => {
		ev.preventDefault();
		try {
			const parsed = parseForm();
			const success = await email(JSON.stringify(parsed, null, 2));
			if (!success) throw new Error("Backend fail");
			alert("Danke!");
			el.reset();
		} catch (err) {
			console.error(err instanceof ZodError);

			if (err instanceof ZodError) {
				alert("Bitte überprüfe deine Daten nochmal…");
				return;
			}

			alert(
				"Da ist was schief gelaufen, schreib uns bitte eine E-Mail :(",
			);
		}
	});
};

const rsvpHandler = () => {
	const forms = document.querySelectorAll("form[data-rsvp");

	forms.forEach(prepareForm);
};

rsvpHandler();
