
const GITHUB_USERNAMES = ['JonaEmmOfCruz', 'JonaEmmOfCruzCerda'];

async function fetchAllGitHubData() {
    try {
        const totalReposElement = document.getElementById('total-repos');
        if (totalReposElement) {
            totalReposElement.textContent = '...';
        }

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

        if (totalReposElement) {
            totalReposElement.textContent = totalRepos;
        }

        displayLanguages(combinedLanguages);

    } catch (error) {
        console.error('Error general:', error);
        const totalReposElement = document.getElementById('total-repos');
        if (totalReposElement) {
            totalReposElement.textContent = '—';
        }
        const container = document.getElementById('languages-container');
        if (container) {
            container.innerHTML = '<p style="color: #5a5a64; text-align: center;">No se pudieron cargar los datos</p>';
        }
    }
}

function displayLanguages(languages) {
    const container = document.getElementById('languages-container');
    if (!container) return;

    const sortedLanguages = Object.entries(languages)
        .sort((a, b) => b[1] - a[1]);

    if (sortedLanguages.length === 0) {
        container.innerHTML = '<p style="color: #5d8cb5; text-align: center;">No hay lenguajes para mostrar</p>';
        return;
    }

    let html = '';
    const maxCount = sortedLanguages[0][1];

    sortedLanguages.forEach(([language, count]) => {
        const percentage = (count / maxCount) * 100;

        html += `
            <div style="margin-bottom: 1rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem;">
                    <span style="font-size: 0.85rem; font-weight: 500; color: #1a1a1a;">${language}</span>
                    <span style="font-size: 0.8rem; color: #5d8cb5;">${count} repo${count !== 1 ? 's' : ''}</span>
                </div>
                <div style="height: 4px; background: rgba(0, 0, 0, 0.1); border-radius: 2px; overflow: hidden;">
                    <div style="height: 100%; width: 0%; background: #5d8cb5; border-radius: 2px; transition: width 0.8s ease;" 
                         class="language-bar" data-percentage="${percentage}"></div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    setTimeout(() => {
        document.querySelectorAll('.language-bar').forEach(bar => {
            bar.style.width = bar.getAttribute('data-percentage') + '%';
        });
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAllGitHubData();

    document.querySelectorAll('.project-link[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
});


function downloadPDF() {
    const element = document.querySelector(".resume-card");

    const opt = {
        margin: 0.3,
        filename: "Jonathan_De_La_Cruz_CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(opt).from(element).save();
}


function initProjectModals() {
    const projectCards = document.querySelectorAll('.project-card');
    const modals = document.querySelectorAll('.project-modal');
    
    projectCards.forEach((card, index) => {
        const link = card.querySelector('.project-link');
        if (link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        }

        card.addEventListener('click', (e) => {
            if (e.target.closest('.project-link')) {
                return;
            }
            
            const modalId = `project-modal-${index + 1}`;
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });

        card.style.cursor = 'pointer';
        card.setAttribute('title', 'Click para ver más detalles');
    });

    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.close-modal');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    document.querySelectorAll('.modal-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Enlace clickeado:', link.href);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAllGitHubData();
    initProjectModals(); 
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cert-group-card');
    cards.forEach(card => {
      const list = card.querySelector('.cert-sub-list');
      if (!list) return;
      const items = list.querySelectorAll('li');
      if (items.length === 1) {
        card.classList.add('single-cert');
      } else {
        card.classList.add('multi-cert');
      }
    });
  });