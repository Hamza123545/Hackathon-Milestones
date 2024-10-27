const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collecting form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.split('\n').filter(item => item.trim() !== '');
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.split('\n').filter(item => item.trim() !== '');
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split('\n').filter(item => item.trim() !== '');

    // Constructing the resume HTML
    const resumeHtml = `
        <div class="resume" style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
            <h1 class="center" style="text-align: center; color: #333; margin-bottom: 20px;">Resume</h1>
            <section style="margin-bottom: 20px;">
                <h2 style="color: #007acc; border-bottom: 2px solid #007acc; padding-bottom: 5px; margin-bottom: 10px;">Personal Information</h2>
                <ul style="list-style-type: none; padding: 0;">
                    <li style="margin: 10px 0;"><strong>Name:</strong> ${name}</li>
                    <li style="margin: 10px 0;"><strong>Email:</strong> ${email}</li>
                    <li style="margin: 10px 0;"><strong>Contact No:</strong> ${phone}</li>
                </ul>
            </section>
            <section style="margin-bottom: 20px;">
                <h2 style="color: #007acc; border-bottom: 2px solid #007acc; padding-bottom: 5px; margin-bottom: 10px;">Education</h2>
                <ul style="list-style-type: none; padding: 0;">
                    ${education.map(item => `<li style="margin: 10px 0;">${item}</li>`).join('')}
                </ul>
            </section>
            <section style="margin-bottom: 20px;">
                <h2 style="color: #007acc; border-bottom: 2px solid #007acc; padding-bottom: 5px; margin-bottom: 10px;">Experience</h2>
                <ul style="list-style-type: none; padding: 0;">
                    ${experience.map(item => `<li style="margin: 10px 0;">${item}</li>`).join('')}
                </ul>
            </section>
            <section>
                <h2 style="color: #007acc; border-bottom: 2px solid #007acc; padding-bottom: 5px; margin-bottom: 10px;">Skills</h2>
                <ul style="list-style-type: none; padding: 0;">
                    ${skills.map(item => `<li style="margin: 10px 0;">${item}</li>`).join('')}
                </ul>
            </section>
        </div>
    `;

    // Displaying the resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    } else {
        console.error('The resume display element is missing');
    }
});
