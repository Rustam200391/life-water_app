import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const center = [40.39, 49.83]; 
// геокоординаты Баку

const images = [...Array(16)].map((n,i) => {
  // перебор массива с изображениями иконок
  const letter = String.fromCharCode(i +90);
  //String.fromCharCode - возвращает строку, созданную из указанной последовательности кодовых единиц UTF-16
  return `https://img.icons8.com/ios-filled/1x/marker-${letter}.png`;
  
  // https://icons8.com/icons/set/pure
});

export const YMap = (props) => (
  <YMaps query={{ load: "package.full" }}>
  {/* пакет Ymaps по умолчанию */}
    <Map
    // Класс для создания и управления картой
      state={{
        // Параметры карты.
        center,
        // геокоординаты
        zoom: 15,
        // масштабирование карты
        controls: []
        // Элементы управления картой.
      }}
      width="100vw"
      height="100vh"
    >
      {images.map((n) => (
        <Placemark
          key={n}
          geometry={center.map((c) => c + (Math.random() - 0.6))}
          options={{
            iconLayout: "default#image",
            iconImageSize: [50, 50],//размер иконки
            iconImageHref: n
          }}
        />
      ))}
    </Map>
  </YMaps>
);



