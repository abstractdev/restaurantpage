function contact() {
    const body = document.querySelector('body');
    const contactContent = document.createElement('div');
    const formContainer = document.createElement('div');
    const form = document.createElement('form');
    const nameLabel = document.createElement('label');
    const emailLabel = document.createElement('label');
    const messageLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const emailInput = document.createElement('input');
    const messageTextArea = document.createElement('textarea');
    const nameLabelContainer = document.createElement('div');
    const emailLabelContainer = document.createElement('div');
    const messageTextAreaContainer = document.createElement('div');
    const contactUsContainer = document.createElement('div');
    const contactUs = document.createElement('h1');

    const createContactContent = (() => {
        contactContent.classList.add('contactContent');
        formContainer.classList.add('formContainer');
        form.classList.add('form');
        nameLabel.classList.add('nameLabel');
        nameLabel.setAttribute('for', 'nameInput');
        nameLabel.textContent = "Name";
        emailLabel.classList.add('emailLabel');
        emailLabel.setAttribute('for', 'emailInput');
        emailLabel.textContent = "E-mail";
        messageLabel.classList.add('messageLabel');
        messageLabel.setAttribute('for', 'messageTextArea');
        messageLabel.textContent = "Message";
        nameInput.classList.add('nameInput');
        nameInput.setAttribute('name', 'nameInput');
        nameInput.setAttribute('type', 'text');
        emailInput.classList.add('emailInput');
        emailInput.setAttribute('name', 'emailInput');
        emailInput.setAttribute('type', 'text');
        messageTextArea.classList.add('messageTextArea');
        messageTextArea.setAttribute('name', 'messageTextArea');
        nameLabelContainer.classList.add('nameLabelContainer');
        emailLabelContainer.classList.add('emailLabelContainer');
        messageTextAreaContainer.classList.add('messageTextAreaContainer');
        contactUsContainer.classList.add('contactUsContainer');
        contactUs.classList.add('contactUs');
        contactUs.textContent = "Contact Us"

        body.appendChild(contactContent);
        contactContent.appendChild(contactUsContainer);
        contactContent.appendChild(formContainer);
        contactUsContainer.appendChild(contactUs);
        formContainer.appendChild(nameLabelContainer);
        formContainer.appendChild(emailLabelContainer);
        formContainer.appendChild(messageTextAreaContainer);
        nameLabelContainer.appendChild(nameLabel);
        nameLabelContainer.appendChild(nameInput);
        emailLabelContainer.appendChild(emailLabel);
        emailLabelContainer.appendChild(emailInput);
        messageTextAreaContainer.appendChild(messageLabel);
        messageTextAreaContainer.appendChild(messageTextArea);
    })();
}

export { contact };