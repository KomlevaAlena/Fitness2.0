export const video = function () {
  const element = document.querySelector('.gym__video');
  if (element !== null) {
    element.addEventListener('click', (event) => {
      const template = event.currentTarget.querySelector('template');
      event.currentTarget.replaceChildren(template.content);
    });
  }
};
