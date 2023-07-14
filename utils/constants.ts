export const isLocal =
  typeof window !== 'undefined' && window.location.host.includes('localhost');
