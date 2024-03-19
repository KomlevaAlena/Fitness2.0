// export const video = function () {
//   const element = document.querySelector('.gym__video');
//   if (element !== null) {
//     element.addEventListener('click', (event) => {
//       const template = event.currentTarget.querySelector('template');
//       event.currentTarget.replaceChildren(template.content);
//     });
//   }
// };

const initVideo = () => {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player = document.querySelector(".gym__video-player");
  let link = document.querySelector(".gym__video-button");

  link.addEventListener("click", (evt) => {
    evt.preventDefault();
    player.classList.add("is-show");
    new YT.Player(player, {
      // height: '285',
      // width: '544',
      videoId: "9TZXsZItgdw",
      events: {
        onReady: (e) => e.target.playVideo()
      }
    });
    evt.stopPropagation();
  });
};

export {initVideo};
