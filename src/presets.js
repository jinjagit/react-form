export const getPreset = (name) => {
  let preset = {};

  switch(name) {
    case 'b1': // Brussels, 21st June, 2022
      preset = {
        date: '2022-06-21',
        latitude: '50.8476',
        longitude: '4.3572',
        utcOffset: '2',
      };
      break;
      case 'b2': // Brussels, 21st December, 2022
      preset = {
        date: '2022-12-21',
        latitude: '50.8476',
        longitude: '4.3572',
        utcOffset: '1',
      };
      break;
    default:
      break;
  }

  return preset;
}