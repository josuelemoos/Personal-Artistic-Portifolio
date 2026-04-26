const data = window.PORTFOLIO_DATA;

const $ = (selector) => document.querySelector(selector);
const modal = $(".artwork-modal");
const modalImage = $(".artwork-modal__image");
const modalTitle = $("#artwork-modal-title");
const modalMeta = $(".artwork-modal__meta");
const modalDescription = $(".artwork-modal__caption p");
const modalCloseButton = $(".artwork-modal__close");
const modalBackdrop = $(".artwork-modal__backdrop");
let lastArtworkTrigger = null;

function text(value, fallback = "") {
  return value || fallback;
}

function escapeHTML(value) {
  return text(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderNav() {
  $(".brand").textContent = data.artist.name;
}

function renderHero() {
  document.title = `${data.artist.name} | ${data.meta.siteTitle}`;
  $(".hero__eyebrow").textContent = data.hero.eyebrow;
  $(".hero__title").textContent = data.hero.title;
  $(".hero__description").textContent = data.hero.description;

  const primary = $(".hero__primary");
  primary.textContent = data.hero.primaryAction.label;
  primary.href = data.hero.primaryAction.href;

  const secondary = $(".hero__secondary");
  secondary.textContent = data.hero.secondaryAction.label;
  secondary.href = data.hero.secondaryAction.href;
}

function workCard(work, index) {
  const imageMarkup = work.image
    ? `<img src="${escapeHTML(work.image)}" alt="${escapeHTML(work.title)}">`
    : `<div class="work-card__placeholder" aria-hidden="true"><span>${String(index + 1).padStart(2, "0")}</span></div>`;

  return `
    <article class="work-card" data-work-index="${index}">
      <button class="work-card__trigger" type="button" ${work.image ? "" : "disabled"} aria-label="Open ${escapeHTML(work.title)} artwork">
        <span class="work-card__image">${imageMarkup}</span>
      </button>
      <div class="work-card__body">
        <div class="work-card__meta">${escapeHTML(work.year)} · ${escapeHTML(work.medium)}</div>
        <h3>${escapeHTML(work.title)}</h3>
        <p>${escapeHTML(work.description)}</p>
      </div>
    </article>
  `;
}

function renderWorks() {
  $(".works-grid").innerHTML = data.works.map(workCard).join("");
}

function openArtwork(index, trigger) {
  const work = data.works[index];

  if (!work || !work.image) {
    return;
  }

  lastArtworkTrigger = trigger;
  modalImage.src = work.image;
  modalImage.alt = work.title;
  modalTitle.textContent = work.title;
  modalMeta.textContent = `${text(work.year)} · ${text(work.medium)}`;
  modalDescription.textContent = work.description;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modalCloseButton.focus();
}

function closeArtwork() {
  modal.hidden = true;
  modalImage.src = "";
  document.body.classList.remove("modal-open");

  if (lastArtworkTrigger) {
    lastArtworkTrigger.focus();
    lastArtworkTrigger = null;
  }
}

function setupArtworkModal() {
  $(".works-grid").addEventListener("click", (event) => {
    const trigger = event.target.closest(".work-card__trigger");

    if (!trigger || trigger.disabled) {
      return;
    }

    const card = trigger.closest(".work-card");
    openArtwork(Number(card.dataset.workIndex), trigger);
  });

  modalCloseButton.addEventListener("click", closeArtwork);
  modalBackdrop.addEventListener("click", closeArtwork);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeArtwork();
    }
  });
}

function renderAbout() {
  $(".about__role").textContent = `${data.artist.role} · ${data.artist.location}`;
  $(".about__bio").textContent = data.artist.shortBio;
  $(".about__text").innerHTML = data.artist.about.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("");
}

function renderProjects() {
  $(".projects-list").innerHTML = data.projects
    .map(
      (project, index) => {
        const imageMarkup = project.image
          ? `<img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}">`
          : `<div class="project-item__placeholder" aria-hidden="true"><span>${String(index + 1).padStart(2, "0")}</span></div>`;

        const linkMarkup = project.link
          ? `<a class="project-item__link" href="${escapeHTML(project.link)}" target="_blank" rel="noreferrer">${escapeHTML(project.linkLabel || "Open project")}</a>`
          : "";

        return `
        <article class="project-item">
          <div class="project-item__image">${imageMarkup}</div>
          <div>
            <span>${escapeHTML(project.status)}</span>
            <h3>${escapeHTML(project.title)}</h3>
            <p>${escapeHTML(project.description)}</p>
            ${linkMarkup}
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function renderContact() {
  $(".contact__intro").textContent = data.contact.intro;
  const links = [
    { label: "Email", href: `mailto:${data.contact.email}` },
    ...data.contact.links
  ];

  $(".contact-links").innerHTML = links
    .map((link) => `<a href="${escapeHTML(link.href)}" target="_blank" rel="noreferrer">${escapeHTML(link.label)}</a>`)
    .join("");
}

renderNav();
renderHero();
renderWorks();
renderAbout();
renderProjects();
renderContact();
setupArtworkModal();
