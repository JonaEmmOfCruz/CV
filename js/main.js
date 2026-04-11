const translations = {
    es: {
        // Títulos de sección
        education: 'Educación',
        skills_title: 'Skills',
        languages_title: 'Lenguajes',
        frameworks_title: 'Librerias y Frameworks',
        database_title: 'Base de datos',
        erp_title: 'ERP',
        software_title: 'Software',
        languages_section: 'Idiomas',
        native: 'Nativo',
        english_lang: 'Inglés',
        soft_skills_title: 'Habilidades',
        github_stats: 'GitHub Stats',
        repositories: 'Repositorios',
        languages_used: 'Lenguajes',
        experience_title: 'Experiencia Laboral',
        certifications_title: 'Diplomas y Certificaciones',
        contact_title: 'Medios de contacto',
        location: 'Ubicación',
        email: 'Correo',
        // Grados y trabajos
        degree1: 'Ingeniería en Sistemas Computacionales',
        degree2: 'Tecnólogo en Sistemas Informáticos',
        year_present: '2023 - Actualidad',
        job_title1: 'Tecnólogo Profesional en Sistemas Informáticos',
        job_title2: 'Estudiante de Ingeniería en Sistemas Computacionales',
        summary: 'Estudiante de 6° semestre de Ingeniería en Sistemas Computacionales y Tecnólogo Profesional en Sistemas Informaticos con experiencia en el desarrollo de soluciones digitales y automatización de procesos. Mi enfoque principal es transformar necesidades operativas en herramientas tecnológicas que reduzcan tiempos y optimicen recursos. Especializado en implementar tecnologías modernas para generar un impacto medible en la eficiencia y el rendimiento del entorno empresarial.',
        freelance_title: 'Desarrollador Freelance',
        present: '2023 - Actualidad',
        freelance_place: 'Proyectos Independientes',
        intern_title: 'Practicante TI',
        social_service_title: 'Servicio Social',
        // Listas
        soft_skills: [
            'Actitud positiva', 'Trabajo en equipo', 'Responsabilidad',
            'Puntualidad', 'Ganas de trabajar', 'Capacidad de aprender rápidamente'
        ],
        freelance_desc: [
            'Automaticé el registro de datos de producción mediante un sistema web (CSV), reduciendo el tiempo de captura manual en un 50% y eliminando errores de transcripción.',
            'Optimicé la distribución de tareas mediante un algoritmo de asignación equitativa, incrementando la productividad operativa en un 15%.',
            'Modernicé la consulta de productos con un catálogo web visual, logrando una respuesta 2x más rápida para el equipo de ventas.',
            'Digitalicé el control de asistencia de personal, agilizando la generación de reportes de nómina de 3 días a solo unos minutos.'
        ],
        intern_desc: [
            'Minimicé el tiempo de inactividad de los usuarios en un 20% mediante un plan de mantenimiento preventivo y soporte técnico proactivo.',
            'Aseguré la integridad de la información aplicando protocolos de seguridad informática y gestionando eficientemente la plataforma SharePoint.',
            'Estandaricé procesos de diseño mediante la creación de manuales técnicos en AutoCAD, facilitando la capacitación de nuevos colaboradores.'
        ],
        social_service_desc: [
            'Simplifiqué los flujos administrativos de inscripción, reduciendo los tiempos de espera de los padres de familia durante periodos críticos.',
            'Fortalecí el equipo docente mediante la impartición de clases y actividades, logrando un cumplimiento del 100% del plan de estudios asignado.',
            'Mejoré la atención al usuario gestionando de manera efectiva la comunicación con padres de familia y autoridades escolares.'
        ]
    },
    en: {
        education: 'Education',
        skills_title: 'Skills',
        languages_title: 'Languages',
        frameworks_title: 'Libraries & Frameworks',
        database_title: 'Databases',
        erp_title: 'ERP',
        software_title: 'Software',
        languages_section: 'Languages',
        native: 'Native',
        english_lang: 'English',
        soft_skills_title: 'Soft Skills',
        github_stats: 'GitHub Stats',
        repositories: 'Repositories',
        languages_used: 'Languages',
        experience_title: 'Work Experience',
        certifications_title: 'Diplomas & Certifications',
        contact_title: 'Contact',
        location: 'Location',
        email: 'Email',
        degree1: 'Computer Systems Engineering',
        degree2: 'Computer Systems Technologist',
        year_present: '2023 - Present',
        job_title1: 'Professional Technologist in Computer Systems',
        job_title2: 'Computer Systems Engineering Student',
        summary: '6th semester student of Computer Systems Engineering and Professional Technologist in Computer Systems with experience in developing digital solutions and process automation. My main focus is transforming operational needs into technological tools that reduce time and optimize resources. Specialized in implementing modern technologies to generate measurable impact on business efficiency and performance.',
        freelance_title: 'Freelance Developer',
        present: '2023 - Present',
        freelance_place: 'Independent Projects',
        intern_title: 'IT Intern',
        social_service_title: 'Social Service',
        soft_skills: [
            'Positive attitude', 'Teamwork', 'Responsibility',
            'Punctuality', 'Willingness to work', 'Fast learning ability'
        ],
        freelance_desc: [
            'Automated production data logging through a web system (CSV), reducing manual entry time by 50% and eliminating transcription errors.',
            'Optimized task distribution using an equitable assignment algorithm, increasing operational productivity by 15%.',
            'Modernized product consultation with a visual web catalog, achieving 2x faster response for the sales team.',
            'Digitized staff attendance tracking, streamlining payroll report generation from 3 days to just a few minutes.'
        ],
        intern_desc: [
            'Minimized user downtime by 20% through a preventive maintenance plan and proactive technical support.',
            'Ensured information integrity by applying computer security protocols and efficiently managing the SharePoint platform.',
            'Standardized design processes by creating technical manuals in AutoCAD, facilitating the training of new collaborators.'
        ],
        social_service_desc: [
            'Simplified administrative enrollment flows, reducing waiting times for parents during critical periods.',
            'Strengthened the teaching team by delivering classes and activities, achieving 100% compliance with the assigned curriculum.',
            'Improved user service by effectively managing communication with parents and school authorities.'
        ]
    }
};

function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-list]').forEach(container => {
        const key = container.getAttribute('data-i18n-list');
        const items = dict[key];
        if (Array.isArray(items)) {
            const children = container.children;
            for (let i = 0; i < Math.min(children.length, items.length); i++) {
                children[i].textContent = items[i];
            }
        }
    });

    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    localStorage.setItem('preferredLang', lang);
}

// Inicializar idioma
const savedLang = localStorage.getItem('preferredLang') || 'es';
applyLanguage(savedLang);

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});

// ========================
// GITHUB STATS (original)
// ========================
const GITHUB_USERNAMES = ['JonaEmmOfCruz', 'JonaEmmOfCruzCerda'];

async function fetchAllGitHubData() {
    try {
        const totalReposElement = document.getElementById('total-repos');
        if (totalReposElement) totalReposElement.textContent = '...';

        let totalRepos = 0;
        const combinedLanguages = {};

        for (const username of GITHUB_USERNAMES) {
            try {
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                if (!userResponse.ok) continue;
                const userData = await userResponse.json();
                totalRepos += userData.public_repos || 0;

                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                if (!reposResponse.ok) continue;
                const reposData = await reposResponse.json();

                for (const repo of reposData) {
                    if (repo.language) {
                        combinedLanguages[repo.language] = (combinedLanguages[repo.language] || 0) + 1;
                    }
                }
            } catch (userError) {
                console.error(`Error con el usuario ${username}:`, userError);
            }
        }

        if (totalReposElement) totalReposElement.textContent = totalRepos;
        displayLanguages(combinedLanguages);
    } catch (error) {
        console.error('Error general:', error);
        const totalReposElement = document.getElementById('total-repos');
        if (totalReposElement) totalReposElement.textContent = '—';
        const container = document.getElementById('languages-container');
        if (container) container.innerHTML = '<p style="color: #5a5a64; text-align: center;">No se pudieron cargar los datos</p>';
    }
}

function displayLanguages(languages) {
    const container = document.getElementById('languages-container');
    if (!container) return;

    const sortedLanguages = Object.entries(languages).sort((a, b) => b[1] - a[1]);
    if (sortedLanguages.length === 0) {
        container.innerHTML = '<p class="loading">No hay lenguajes</p>';
        return;
    }

    const maxCount = sortedLanguages[0][1];
    container.innerHTML = sortedLanguages.map(([language, count]) => {
        const percentage = (count / maxCount) * 100;
        return `
                    <div class="language-item">
                        <div class="language-top">
                            <span class="language-name">${language}</span>
                            <span class="language-count">${count}</span>
                        </div>
                        <div class="language-bar-bg">
                            <div class="language-bar-fill" data-width="${percentage}"></div>
                        </div>
                    </div>
                `;
    }).join('');

    setTimeout(() => {
        document.querySelectorAll('.language-bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
        });
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAllGitHubData();
});

document.getElementById('exportPDFBtn').addEventListener('click', async function () {
    const element = document.querySelector('.resume-card');
    const btn = this;
    const originalText = btn.innerHTML;

    // Mostrar estado de carga
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PDF';
    btn.disabled = true;

    try {
        // Capturar el elemento como canvas
        const canvas = await html2canvas(element, {
            scale: 2.5,                // Alta calidad
            backgroundColor: '#f1f5f9',
            logging: false,
            allowTaint: true,
            useCORS: true
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);

        // Configurar PDF en A4 vertical
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // Dimensiones de la página A4 (en mm)
        const pageWidth = pdf.internal.pageSize.getWidth();   // 210 mm
        const pageHeight = pdf.internal.pageSize.getHeight(); // 297 mm

        // Márgenes deseados (en mm)
        const margin = 10; // 1 cm a cada lado
        const maxContentWidth = pageWidth - 2 * margin;
        const maxContentHeight = pageHeight - 2 * margin;

        // Dimensiones originales del canvas en píxeles
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Calcular factor de escala para que el contenido quepa dentro del área útil
        const scaleX = maxContentWidth / canvasWidth;
        const scaleY = maxContentHeight / canvasHeight;
        let scale = Math.min(scaleX, scaleY); // Mantener proporción

        // Si la escala es mayor que 1 (imagen más pequeña que el área), no ampliamos más de 1 para no pixelar
        scale = Math.min(scale, 1.2); 

        // Calcular dimensiones finales de la imagen en el PDF
        const imgWidth = canvasWidth * scale;
        const imgHeight = canvasHeight * scale;

        // Calcular posición para centrar horizontal y verticalmente
        const xOffset = (pageWidth - imgWidth) / 2;
        const yOffset = (pageHeight - imgHeight) / 2;

        // Agregar imagen al PDF
        pdf.addImage(imgData, 'JPEG', xOffset, yOffset, imgWidth, imgHeight);

        // Guardar el archivo
        pdf.save('Jonathan_De_La_Cruz_CV.pdf');

    } catch (error) {
        console.error('Error al generar PDF:', error);
        alert('Ocurrió un error al generar el PDF. Inténtalo de nuevo.');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
});