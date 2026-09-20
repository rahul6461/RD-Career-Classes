// Vanilla JavaScript for R.D. Career Classes (Agra)
import './index.css';

// Math Shortcut Demos dataset
const SHORTCUT_DEMOS = [
  {
    id: 'compound-interest',
    title: 'Compound Interest Rate Trick',
    category: 'Arithmetic / CGL & Airforce Y',
    problem: 'Find CI on ₹12,000 for 2 years at 12.5% p.a. without using the formula.',
    traditionalTime: '2.5 to 3 Minutes',
    traditionalSteps: [
      'Write A = P(1 + r/100)^n formula',
      'Compute A = 12000 * (1 + 12.5/100)^2',
      'Multiply (9/8) * (9/8) = 81/64',
      'Long division: 12000 * 81 / 64 = 15,187.50',
      'Subtract P: CI = 15,187.50 - 12,000 = ₹3,187.50'
    ],
    raviTrick: 'Fraction Ladder (12.5% = 1/8) & Ratio 8:9',
    raviTime: '8 Seconds Mental Calculation',
    raviExplanation: 'Principal = 8^2 = 64 units = ₹12,000. Amount = 9^2 = 81 units. CI = 81 - 64 = 17 units. 17 * (12000/64) = ₹3,187.50 in 2 steps!'
  },
  {
    id: 'time-work',
    title: 'Time & Work Efficiency Trick',
    category: 'Arithmetic / SSC GD & Airforce',
    problem: 'A does work in 12 days, B in 15 days, C in 20 days. If they work alternately starting with A, when does work finish?',
    traditionalTime: '3 to 4 Minutes',
    traditionalSteps: [
      'Calculate individual 1-day work: 1/12, 1/15, 1/20',
      'Find LCM of 12, 15, 20 = 60',
      'Sum 3-day work = 5 + 4 + 3 = 12 units',
      'Divide 60 / 12 = 5 complete cycles of 3 days',
      'Total days = 5 * 3 = 15 days'
    ],
    raviTrick: 'LCM Total Work (60 Units) + Cycloid Clock Method',
    raviTime: '10 Seconds',
    raviExplanation: 'Efficiencies: A=5, B=4, C=3. 3-day cycle = 12 units. 60 / 12 = 5 exact cycles. 5 * 3 = 15 days straight away without touching fractions!'
  },
  {
    id: 'speed-distance',
    title: 'Relative Speed Trains Crossing',
    category: 'Mechanics / Technical Math',
    problem: 'Two trains of 180m and 120m run in opposite directions at 54 km/h and 90 km/h. Find crossing time in seconds.',
    traditionalTime: '2 Minutes',
    traditionalSteps: [
      'Total distance = 180 + 120 = 300 meters',
      'Relative speed = 54 + 90 = 144 km/h',
      'Convert 144 * (5/18) = 40 m/s',
      'Time = Distance / Speed = 300 / 40 = 7.5 seconds'
    ],
    raviTrick: '18 Table Factor Trick (144 = 18 * 8 → Speed = 5 * 8 = 40 m/s)',
    raviTime: '5 Seconds',
    raviExplanation: '18 km/h is 5 m/s. 144 km/h is 18 * 8, so speed is instantly 5 * 8 = 40 m/s. Total distance 300 / 40 = 7.5 seconds without scratchpad!'
  }
];

// 1. WhatsApp form submission function
export function sendInquiry(event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  const nameEl = document.getElementById('name');
  const phoneEl = document.getElementById('phone');
  const courseEl = document.getElementById('course');
  const categoryEl = document.getElementById('category');

  const name = nameEl ? nameEl.value.trim() : '';
  const phone = phoneEl ? phoneEl.value.trim() : '';
  const course = courseEl ? courseEl.value : '';
  const category = categoryEl ? categoryEl.value : 'General';

  if (!name || !phone) {
    alert('Please enter your Name and WhatsApp Contact Number.');
    return;
  }

  const msg = `Hello Ravi Sir,%0A%0AAn inquiry has been submitted for *R.D. Career Classes*:%0A%0A👤 *Name:* ${encodeURIComponent(
    name
  )}%0A📞 *Phone:* ${encodeURIComponent(phone)}%0A🎯 *Target Course:* ${encodeURIComponent(
    course
  )}%0A🎖️ *Category/Discount Eligibility:* ${encodeURIComponent(
    category
  )}%0A%0APlease share batch timings, address details, and fee structure.`;

  window.open(`https://wa.me/919808124401?text=${msg}`, '_blank');

  // Show inline success confirmation banner
  const statusEl = document.getElementById('inquiry-status');
  if (statusEl) {
    statusEl.classList.remove('hidden');
    setTimeout(() => {
      statusEl.classList.add('hidden');
    }, 6000);
  }
}

// 2. Modal Inquiry Submission
export function sendModalInquiry(event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  const nameEl = document.getElementById('modal-name');
  const phoneEl = document.getElementById('modal-phone');
  const courseEl = document.getElementById('modal-course');
  const timingEl = document.getElementById('modal-timing');

  const name = nameEl ? nameEl.value.trim() : '';
  const phone = phoneEl ? phoneEl.value.trim() : '';
  const course = courseEl ? courseEl.value : 'Airforce X & Y Group / Agniveer';
  const timing = timingEl ? timingEl.value : 'Morning Batch (8:00 AM)';

  if (!name || !phone) {
    alert('Please provide your name and WhatsApp number.');
    return;
  }

  const msg = `Hello Ravi Sir,%0A%0AI want to book a Free Demo Class at *R.D. Career Classes* (Agra):%0A%0A👤 *Name:* ${encodeURIComponent(
    name
  )}%0A📞 *Phone:* ${encodeURIComponent(phone)}%0A🎯 *Course:* ${encodeURIComponent(
    course
  )}%0A⏰ *Preferred Time:* ${encodeURIComponent(
    timing
  )}%0A%0APlease reserve my seat and send directions.`;

  window.open(`https://wa.me/919808124401?text=${msg}`, '_blank');
  closeInquiryModal();
}

// 3. Floating WhatsApp Form Submission
export function sendFloatingInquiry(event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  const nameEl = document.getElementById('float-name');
  const phoneEl = document.getElementById('float-phone');
  const courseEl = document.getElementById('float-course');
  const categoryEl = document.getElementById('float-category');

  const name = nameEl ? nameEl.value.trim() : '';
  const phone = phoneEl ? phoneEl.value.trim() : '';
  const course = courseEl ? courseEl.value : 'Airforce X & Y Group / Agniveer';
  const category = categoryEl ? categoryEl.value : 'General';

  if (!name || !phone) {
    alert('Please enter your name and phone number.');
    return;
  }

  const msg = `Hello Ravi Sir,%0A%0AQuick inquiry from website for *R.D. Career Classes*:%0A%0A👤 *Name:* ${encodeURIComponent(
    name
  )}%0A📞 *Phone:* ${encodeURIComponent(phone)}%0A🎯 *Target:* ${encodeURIComponent(
    course
  )}%0A🎖️ *Concession:* ${encodeURIComponent(
    category
  )}%0A%0APlease connect on WhatsApp.`;

  window.open(`https://wa.me/919808124401?text=${msg}`, '_blank');
  toggleFloatingChat();
}

// 4. Modal Dialog Controllers
export function openInquiryModal(courseName) {
  const modal = document.getElementById('inquiry-modal');
  const courseSelect = document.getElementById('modal-course');
  if (courseSelect && courseName) {
    courseSelect.value = courseName;
  }
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

export function closeInquiryModal() {
  const modal = document.getElementById('inquiry-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

// 5. Mobile Menu Toggle
export function toggleMobileMenu() {
  const menu = document.getElementById('mobile-nav-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  if (menu) {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      if (iconOpen) iconOpen.classList.add('hidden');
      if (iconClose) iconClose.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
      if (iconOpen) iconOpen.classList.remove('hidden');
      if (iconClose) iconClose.classList.add('hidden');
    }
  }
}

// 6. Floating Chat Drawer Toggle
export function toggleFloatingChat() {
  const drawer = document.getElementById('floating-chat-drawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
  }
}

// 7. Copy Address with feedback
export function copyAddress() {
  const addressText = 'Diamond City, Gwalior Rd, Nagla Padma, Agra, Rohta, Uttar Pradesh 282009';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(addressText).then(() => {
      const btn = document.getElementById('copy-address-btn');
      if (btn) {
        const origText = btn.innerHTML;
        btn.innerHTML = '<span>✓ Copied to Clipboard!</span>';
        setTimeout(() => {
          btn.innerHTML = origText;
        }, 2500);
      }
    }).catch(() => {
      alert('Address: ' + addressText);
    });
  } else {
    alert('Address: ' + addressText);
  }
}

// 8. Math Shortcut Tab Switcher
export function selectShortcutDemo(demoId) {
  const demo = SHORTCUT_DEMOS.find((d) => d.id === demoId) || SHORTCUT_DEMOS[0];

  // Update tabs active state
  document.querySelectorAll('.shortcut-tab-btn').forEach((tab) => {
    const btnId = tab.getAttribute('data-demo-id');
    if (btnId === demoId) {
      tab.className =
        'shortcut-tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0F172A] text-white shadow-md transition-all cursor-pointer';
    } else {
      tab.className =
        'shortcut-tab-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer';
    }
  });

  // Update DOM content
  const titleEl = document.getElementById('demo-problem-title');
  const catEl = document.getElementById('demo-category-badge');
  const tradTimeEl = document.getElementById('demo-traditional-time');
  const tradStepsEl = document.getElementById('demo-traditional-steps');
  const raviTrickEl = document.getElementById('demo-ravi-trick');
  const raviTimeEl = document.getElementById('demo-ravi-time');
  const raviExpEl = document.getElementById('demo-ravi-explanation');

  if (titleEl) titleEl.innerText = `"${demo.problem}"`;
  if (catEl) catEl.innerText = `Exam Problem (${demo.category})`;
  if (tradTimeEl) tradTimeEl.innerText = demo.traditionalTime;
  if (raviTrickEl) raviTrickEl.innerText = demo.raviTrick;
  if (raviTimeEl) raviTimeEl.innerText = demo.raviTime;
  if (raviExpEl) raviExpEl.innerText = demo.raviExplanation;

  if (tradStepsEl) {
    tradStepsEl.innerHTML = demo.traditionalSteps
      .map(
        (step, idx) => `
        <div class="flex items-start gap-2">
          <span class="text-slate-400 font-bold select-none">${idx + 1}.</span>
          <span>${step}</span>
        </div>
      `
      )
      .join('');
  }
}

// Expose functions globally on window for inline HTML onclick/onsubmit handlers
window.sendInquiry = sendInquiry;
window.sendModalInquiry = sendModalInquiry;
window.sendFloatingInquiry = sendFloatingInquiry;
window.openInquiryModal = openInquiryModal;
window.closeInquiryModal = closeInquiryModal;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleFloatingChat = toggleFloatingChat;
window.copyAddress = copyAddress;
window.selectShortcutDemo = selectShortcutDemo;

// Initialization function for events
function initApp() {
  // Mobile Nav link click closes menu
  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('mobile-nav-menu');
      if (menu) menu.classList.add('hidden');
      const iconOpen = document.getElementById('menu-icon-open');
      const iconClose = document.getElementById('menu-icon-close');
      if (iconOpen) iconOpen.classList.remove('hidden');
      if (iconClose) iconClose.classList.add('hidden');
    });
  });

  // Attach inquiry form event listener
  const form = document.getElementById('admission-inquiry-form');
  if (form) {
    form.addEventListener('submit', sendInquiry);
  }

  const modalForm = document.getElementById('modal-inquiry-form');
  if (modalForm) {
    modalForm.addEventListener('submit', sendModalInquiry);
  }

  const floatForm = document.getElementById('float-inquiry-form');
  if (floatForm) {
    floatForm.addEventListener('submit', sendFloatingInquiry);
  }

  // Close modal when clicking outside backdrop
  const modalBackdrop = document.getElementById('inquiry-modal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeInquiryModal();
      }
    });
  }

  // Escape key closes modal & float drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeInquiryModal();
      const floatDrawer = document.getElementById('floating-chat-drawer');
      if (floatDrawer) floatDrawer.classList.add('hidden');
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
