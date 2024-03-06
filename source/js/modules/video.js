export const video = document.querySelector('.gym__video').addEventListener('click', (event) => {
  const template = event.currentTarget.querySelector('template');
  event.currentTarget.replaceChildren(template.content);
});

