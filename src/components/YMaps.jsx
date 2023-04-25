import { YMaps, Map, Placemark, GeoObject } from "@pbe/react-yandex-maps";

const center = [40.39, 49.83]; 
// геокоординаты Баку

const images = [...Array(26)].map((n,i) => {
  const letter = String.fromCharCode(i + 97);
  return `https://img.icons8.com/ios-filled/2x/marker-${letter}.png`;
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
        zoom: 13,
        // масштабирование карты
        controls: []
        // Элементы управления картой.
      }}
      width="100vw"
      height="100vh"
    >
        <GeoObject
          geometry={{
            type:'LineString',
            coordinates: [
              [40.407215, 49.930896],

            ],
          }}
          />
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


