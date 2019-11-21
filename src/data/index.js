export const getGamesData = () =>
  JSON.parse(localStorage.getItem("games")) || initialGames;

export const saveGamesData = games =>
  localStorage.setItem("games", JSON.stringify(games));

const initialGames = [
  {
    id: 134,
    title: "The Witcher 3 Wild hunt",
    price: 29.99,
    thumbnail:
      "https://images.gog.com/60c724a052275a049d857d53957dc38e9347742f52372bb956d992b43efa8fb5_product_card_v2_mobile_slider_639.jpg",
    images: [
      "https://i.ytimg.com/vi/TZ_G6XiHoUA/maxresdefault.jpg",
      "http://www.gamersbook.com/Portals/0/images/2014/the-witcher-3-wild-hunt-gameplay.jpg",
      "https://i.ytimg.com/vi/xx8kQ4s5hCY/maxresdefault.jpg"
    ]
  },
  {
    id: 142,
    title: "Metal Gear Solid V",
    price: 34.99,
    thumbnail:
      "https://hb.imgix.net/598dfe28ff7dee43e7f400a7c239ee3f1d5297b3.png?auto=compress,format&fit=crop&h=353&w=616&s=9cdac38ff871b0c186ec79bc07c0e78c",
    images: [
      "https://i.ytimg.com/vi/A9JV0EvCkMI/maxresdefault.jpg",
      "https://i.ytimg.com/vi/9IRLMCQcO5s/maxresdefault.jpg",
      "https://attackofthefanboy.com/wp-content/uploads/2015/09/Metal-Gear-Solid-V-The-Phantom-Pain-Guide-How-to-Fast-Travel-760x428.jpg"
    ]
  },
  {
    id: 114,
    title: "Super Meat Boy",
    price: 19.99,
    thumbnail:
      "https://d3tg06jbotvai2.cloudfront.net/game_tetiere/upload/gameimage/file/40397.jpeg",
    images: [
      "https://i.ytimg.com/vi/OEcBTND0r7M/maxresdefault.jpg",
      "https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fsmboriginal%2FSMB_Gallery_05-1280x720-afd4c2d3b54a41113edf036e88756830cf153edd.jpg",
      "https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1578/15787979/3372744-6195008276-8K_6n.jpg"
    ]
  }
];
