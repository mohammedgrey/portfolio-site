const image = (path: string) => "/assets/images/" + path;

const images = {
  home: {
    light: image("home/light.png"),
    desk: image("home/desk.png"),
    laptop: {
      base: image("home/laptop/base.svg"),
      top: {
        open: image("home/laptop/top/open.svg"),
        closed: image("home/laptop/top/closed.svg"),
      },
    },
    frame: {
      outline: image("home/frame/outline.png"),
      photo: image("home/frame/photo.jpg"),
    },
    books: {
      cleanCode: image("home/books/cleanCode.png"),
    },
  },
};
export default images;
