/* Paragráfo de feedback de envio do formulário */
const feedback = document.getElementById("cta-feedback");


/* Faq */

const faqItens = document.querySelectorAll('.faq-item');

faqItens.forEach(faqItem => {
    faqItem.addEventListener('click', () => {
        const faqBody = faqItem.querySelector('.faq-body');
        faqBody.classList.toggle('active');
    });
});

/* Form */

const form = document.getElementById("cta-form");
/* Botão submit */
const submitButton = form.querySelector("button[type='submit']")

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    const name = document.getElementById("name-cta-form").value;
    const lastName = document.getElementById("last-name-cta-form").value;
    const email = document.getElementById("email-cta-form").value;

    /* Objeto pronto para enviar */
    const payload = {
    last_name: lastName,
    name: name,
    email: email
  }

    const response = await fetch("https://lead.machadodevweb.icu/webhook/form-lead-salesforce", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (data.success) {
        feedback.textContent = "Enviado com sucesso!";
        feedback.style.display = "block";
        feedback.style.color = "green";
        form.reset()
        submitButton.disabled = false;
        submitButton.textContent = "Solicite agora sua análise gratuita";
    } else {
        feedback.textContent = data.message || "Erro ao enviar. Tente novamente.";
        feedback.style.display = "block";
        feedback.style.color = "red";
        submitButton.disabled = false;
        submitButton.textContent = "Solicite agora sua análise gratuita";
    }

});