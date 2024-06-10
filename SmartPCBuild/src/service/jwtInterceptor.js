
import authService from './authService';

const environment = {
  defaultauth: 'custom',
  host: 'https://phamthuyfood.io.vn',
};

export const jwtInterceptor = (url, options = {}) => {
  let modifiedUrl = url;
  let headers = options.headers || {};

  if (environment.defaultauth === 'firebase') {
    const currentUser = authService.currentUser();
    if (currentUser && currentUser.token) {
      headers['Authorization'] = `Bearer ${currentUser.token}`;
    }
  } else {
    if (!url.includes('http') && !url.includes('assets')) {
      modifiedUrl = environment.host + url;
    }

    const currentUser = authService.currentUser();
    const workSpace = localStorage.getItem('workspace');
    let workSpaceID = '';
    if (workSpace) {
      workSpaceID = workSpace;
    }

    if (currentUser && currentUser.token) {
      headers['Authorization'] = `Bearer ${currentUser.token}`;
      headers['workspace'] = workSpaceID ? workSpaceID : '';
    }
  }

  return fetch(modifiedUrl, {
    ...options,
    headers,
  });
};
