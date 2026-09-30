"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { catalog } from "./catalog";

const contactEmail = "info@omnimpresa.it";
const divisionOptions = Object.entries(catalog);

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const divisionRef = useRef<HTMLSelectElement>(null);
  const [preparedMessage, setPreparedMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("divisione");
    const division = divisionOptions.find(([key]) => key === slug);
    if (division && divisionRef.current) {
      divisionRef.current.value = division[1].name;
    }
  }, []);

  function prepareMessage() {
    const form = formRef.current;
    if (!form || !form.reportValidity()) return null;

    const fields = new FormData(form);
    const division = String(fields.get("divisione") || "Informazioni");
    const subject = `Richiesta OMNIMPRESA · ${division}`;
    const body = [
      `Nome e azienda: ${String(fields.get("nome") || "").trim()}`,
      `Email: ${String(fields.get("email") || "").trim()}`,
      `Divisione: ${division}`,
      "",
      String(fields.get("messaggio") || "").trim() ||
        "Vorrei ricevere maggiori informazioni.",
    ].join("\n");
    const message = `A: ${contactEmail}\nOggetto: ${subject}\n\n${body}`;
    setPreparedMessage(message);
    return { subject, body, message };
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = prepareMessage();
    if (!message) return;

    setStatus(
      "Messaggio preparato. Completa l'invio nella tua app di posta. Se non si apre, copia il testo qui sotto e invialo a info@omnimpresa.it.",
    );
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(message.subject)}&body=${encodeURIComponent(message.body)}`;
  }

  async function copyMessage() {
    const message = prepareMessage();
    if (!message) return;

    try {
      if (!navigator.clipboard?.writeText)
        throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(message.message);
      setStatus(
        "Testo copiato. Incollalo in una nuova email e invialo a info@omnimpresa.it. La richiesta non è ancora stata inviata.",
      );
    } catch {
      setStatus(
        "Puoi selezionare e copiare il testo qui sotto, poi inviarlo a info@omnimpresa.it dalla tua email.",
      );
    }
  }

  return (
    <form ref={formRef} onSubmit={submit} className="contact-form">
      <label>
        Nome e azienda
        <input
          name="nome"
          autoComplete="name"
          required
          placeholder="Il tuo nome e azienda"
        />
      </label>
      <label>
        Email di lavoro
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="nome@azienda.it"
        />
      </label>
      <label>
        Di cosa hai bisogno?
        <select name="divisione" ref={divisionRef} defaultValue="">
          <option value="">
            Scegli una divisione, oppure chiedi informazioni
          </option>
          {divisionOptions.map(([slug, division]) => (
            <option key={slug} value={division.name}>
              {division.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Il tuo progetto
        <textarea
          name="messaggio"
          placeholder="Raccontaci in breve di cosa hai bisogno"
          rows={3}
        />
      </label>
      <small className="form-note">
        Prepareremo un’email per {contactEmail}. Potrai inviarla dalla tua app
        di posta oppure copiare il testo.
      </small>
      <div className="contact-form-actions">
        <button className="button" type="submit">
          Prepara email
        </button>
        <button className="button light" type="button" onClick={copyMessage}>
          Copia messaggio
        </button>
      </div>
      <p className="contact-status" role="status" aria-live="polite">
        {status}
      </p>
      {preparedMessage ? (
        <label className="prepared-message">
          Testo pronto da copiare
          <textarea
            readOnly
            value={preparedMessage}
            rows={8}
            onFocus={(event) => event.currentTarget.select()}
          />
        </label>
      ) : null}
    </form>
  );
}
