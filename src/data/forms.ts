export const form_point = {
    formspreeEndpoint: "https://formspree.io/f/mzdqwrzl",
};

export interface ContactFormData {
    nome: string;
    email: string;
    mensagem: string;
}

export const formatContactPayload = (form: ContactFormData) => {
    return {
        name: form.nome,
        email: form.email,
        message: form.mensagem,
        _subject: `Contato Portfólio: ${form.nome}`,
    };
};

export const submitContactForm = async (form: ContactFormData): Promise<boolean> => {
    const data = formatContactPayload(form);
    try {
        const response = await fetch(form_point.formspreeEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.ok;
    } catch {
        return false;
    }
};
