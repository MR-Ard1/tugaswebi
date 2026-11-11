const CONTACTS = [
  {
    name: "WhatsApp",
    label: "+62 812-3456-7890",
    url: "https://wa.me/6281234567890?text=" +
         encodeURIComponent("Halo Ridwan, saya melihat portfolio kamu."),
    icon: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  },
  {
    name: "Email",
    label: "hello@example.com",
    url: "mailto:hello@example.com",
    icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  },
  {
    name: "Instagram",
    label: "@username",
    url: "https://instagram.com/username",
    icon: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  },
  {
    name: "GitHub",
    label: "github.com/username",
    url: "https://github.com/username",
    icon: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  },
  {
    name: "LinkedIn",
    label: "linkedin.com/in/username",
    url: "https://linkedin.com/in/username",
    icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  },
];
const itemsHTML = CONTACTS.map((c) => `
    <a class="contact-item" href="${c.url}" target="_blank" rel="noopener noreferrer">
      <span class="contact-item__icon">
        <svg viewBox="0 0 24 24" aria-hidden="true">${c.icon}</svg>
      </span>
      <span class="contact-item__text">
        <span class="contact-item__name">${c.name}</span>
        <span class="contact-item__label">${c.label}</span>
      </span>
    </a>`).join("");

  const modalHTML = `
    <div class="modal fade" id="contactModal" tabindex="-1" role="dialog"
         aria-labelledby="contactModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div>
              <h5 class="modal-title font-weight-bold" id="contactModalTitle">Let's Connect</h5>
              <small class="text-muted">Pilih salah satu cara untuk menghubungi saya.</small>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Tutup">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">${itemsHTML}</div>
        </div>
      </div>
    </div>`;

  $("body").append(modalHTML);
$("#contact-btn").on("click", function (e) {
    e.preventDefault();               
    $("#contactModal").modal("show");
  });