'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const treeItems = document.querySelectorAll('.tree li');

  treeItems.forEach((li) => {
    const childUl = li.querySelector(':scope > ul');

    if (!childUl) {
      return;
    }

    for (const node of Array.from(li.childNodes)) {
      if (node === childUl) {
        break;
      }

      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
        const span = document.createElement('span');

        span.textContent = node.textContent.trim();
        node.replaceWith(span);

        span.addEventListener('click', () => {
          childUl.hidden = !childUl.hidden;
        });
      }
    }
  });
});
