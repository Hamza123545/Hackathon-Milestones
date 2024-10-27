const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.split('\n');
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.split('\n');
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split('\n');

    const resumeHTML = `
      <div class="resume" style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
            <h1 style="text-align: center; color: #333;">Editable Resume</h1>
            <section style="margin-bottom: 20px;">
                <h2 style="color: #007acc;">Personal Information</h2>
                <ul style="list-style-type: none; padding: 0;">
                    <li><strong>Name:</strong> <span contenteditable="true">${name}</span></li>
                    <li><strong>Email:</strong> <span contenteditable="true">${email}</span></li>
                    <li><strong>Contact no:</strong> <span contenteditable="true">${phone}</span></li>
                </ul>
            </section>
            <section style="margin-bottom: 20px;">
                <h2 style="color: #007acc;">Education</h2>
                <ul contenteditable="true" style="list-style-type: none; padding: 0;">
                    ${education.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </section>
            <section style="margin-bottom: 20px;">
                <h2 style="color: #007acc;">Experience</h2>
                <ul contenteditable="true" style="list-style-type: none; padding: 0;">
                    ${experience.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </section>
            <section style="margin-bottom: 20px;">
                <h2 style="color: #007acc;">Skills</h2>
                <ul contenteditable="true" style="list-style-type: none; padding: 0;">
                    ${skills.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </section>
        </div>
    `;

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing');
    }
});
