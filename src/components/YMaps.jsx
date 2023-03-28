import { YMaps,Map } from '@pbe/react-yandex-maps';

export const YMap = () => (
  <YMaps>
    <div>
    <p>Sources of drinking water!</p>
      <Map defaultState={{ center: [40.39, 49.83], zoom: 15 }} 
      width="100vw"
      height="100vh"
       />
    </div>
  </YMaps>
);


