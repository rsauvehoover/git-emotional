export const ACTIONS = {
  UPDATE_URL: 'UPDATE_URL',
  UPDATE_RAW_DATA : 'UPDATE_RAW_DATA',
}

export function updateUrl(type, url) {
  return { type: type, url};
}

export function updateRawData(type, data) {
  return { type: type, data };
}
