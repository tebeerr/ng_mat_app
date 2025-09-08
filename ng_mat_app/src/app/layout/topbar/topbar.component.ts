import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  template: `
    <header class="topbar">
      <div class="search">
        <input class="search-input" placeholder="Search..." />
        <button class="search-btn" aria-label="Search">
          <img src="assets/icons/search.svg" alt="search" />
        </button>
      </div>
      <div class="actions">
        <button class="icon-btn" aria-label="Apps">
          <img src="assets/icons/dashboard_icon.svg" alt="apps" />
        </button>
        <button class="icon-btn" aria-label="Notifications">
          <span class="badge">5</span>
          <img src="assets/icons/notification.svg" alt="notifications" />
        </button>
        <button class="icon-btn" aria-label="Account">
          <img src="assets/icons/profil_icon.svg" alt="account" />
        </button>
      </div>
    </header>
  `,
  styles: [
    `
    .topbar { display: flex; align-items: center; justify-content: space-between; padding: 8px 16px; }
    .search { display: flex; align-items: center; gap: 8px; }
    .search-input { border: none; border-bottom: 1px solid #ccc; padding: 6px 4px; outline: none; background: transparent; }
    .search-btn { border: none; background: white; width: 36px; height: 36px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 1px 3px rgba(0,0,0,.2); cursor: pointer; }
    .actions { display: flex; align-items: center; gap: 12px; }
    .icon-btn { position: relative; border: none; background: transparent; cursor: pointer; }
    .icon-btn img { width: 20px; height: 20px; }
    .badge { position: absolute; top: -6px; right: -6px; background: #e53935; color: white; border-radius: 10px; padding: 0 5px; font-size: 11px; line-height: 18px; min-width: 18px; text-align: center; }
    `
  ]
})
export class TopbarComponent {}
