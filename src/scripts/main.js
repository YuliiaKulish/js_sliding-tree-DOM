'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const treeItems = document.querySelectorAll('.tree li');

  treeItems.forEach((li) => {
    const childUl = li.querySelector('ul');

    if (childUl) {
      const span = document.createElement('span');

      const textParts = [];

      for (const node of li.childNodes) {
        if (node === childUl) {
          break;
        }

        if (node.nodeType === Node.TEXT_NODE) {
          textParts.push(node.textContent.trim());
        }
      }

      span.textContent = textParts.join(' ').trim();

      li.insertBefore(span, childUl);

      for (const node of Array.from(li.childNodes)) {
        if (node === span || node === childUl) {
          continue;
        }
        li.removeChild(node);
      }

      span.addEventListener('click', () => {
        childUl.style.display =
          childUl.style.display === 'none' ? 'block' : 'none';
      });
    }
  });
});
