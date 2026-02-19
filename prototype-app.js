// ─── View Switching ───
const viewTabs = document.querySelectorAll('.topbar-tab[data-view]');
const views = document.querySelectorAll('main[class^="view-"]');

viewTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.view;
        viewTabs.forEach(t => t.classList.toggle('active', t === tab));
        views.forEach(v => v.classList.toggle('active', v.id === 'view-' + target));
    });
});

// ─── Queue Click → Review View ───
document.querySelectorAll('.queue-item').forEach(item => {
    item.addEventListener('click', () => {
        const viewTab = document.querySelector('.topbar-tab[data-view="review"]');
        if (viewTab) viewTab.click();
    });
});

// ─── Mini Queue Selection ───
document.querySelectorAll('.rq-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.rq-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// ─── Approve / Reject / Edit Feedback ───
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('action-approve')) {
            btn.textContent = '✓ Approved';
            btn.style.background = 'var(--green-bg)';
            btn.style.borderColor = 'var(--green)';
            btn.disabled = true;
        } else if (btn.classList.contains('action-reject')) {
            btn.textContent = '✕ Rejected';
            btn.style.background = 'var(--red-bg)';
            btn.style.borderColor = 'var(--red)';
        } else if (btn.classList.contains('action-edit')) {
            btn.textContent = '✎ Editing…';
            btn.style.background = 'var(--yellow-bg)';
            btn.style.borderColor = 'var(--yellow)';
        }
    });
});

// ─── Field Accept Buttons ───
document.querySelectorAll('.field-action').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.textContent = '✓';
        btn.style.color = 'var(--green)';
        btn.style.background = 'var(--green-bg)';
        btn.style.borderColor = 'rgba(34,197,94,0.3)';
        btn.classList.remove('edited');
    });
});
