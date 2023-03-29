import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const center = [40.39, 49.83]; 

const images = [...Array(16)].map((n,i) => {
  const letter = String.fromCharCode(i +90);
  return `https://img.icons8.com/ios-filled/1x/marker-${letter}.png`;
  // https://icons8.com/icons/set/pure
});

export const YMap = (props) => (
  <YMaps query={{ load: "package.full" }}>
    <Map
      state={{
        center,
        zoom: 15,
        controls: []
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
            iconImageSize: [50, 50],
            iconImageHref: n
          }}
        />
      ))}
    </Map>
  </YMaps>
);


