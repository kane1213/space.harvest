// declare global {
//   // interface Window {
//   //   buildingTime: string; // 假設您的屬性是一個字符串
//   // }
//   var buildingTime: string;
// }

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: function
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: function
  }
}

interface KindData {
  ID: number
  name: string
  CreatedAt: string
  UpdatedAt: string
}

export {}
