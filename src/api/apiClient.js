const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://song-request-backend.onrender.com';

async function fetchAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || `HTTP ${response.status}`);
  }

  return response.json();
}

// Song API
export const songApi = {
  list: async (sort = '-created_date') => {
    const order = sort.startsWith('-') ? 'desc' : 'asc';
    const orderBy = sort.replace('-', '');
    const songs = await fetchAPI(`/api/songs?sort=${sort}`);
    return songs;
  },

  create: async (data) => {
    return fetchAPI('/api/songs', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  update: async (id, data) => {
    return fetchAPI(`/api/songs/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  delete: async (id) => {
    return fetchAPI(`/api/songs/${id}`, {
      method: 'DELETE',
    });
  },
};

// SongRequest API
export const requestApi = {
  list: async (status = null, sort = '-created_date') => {
    let query = `/api/requests?sort=${sort}`;
    if (status) {
      query += `&status=${status}`;
    }
    return fetchAPI(query);
  },

  create: async (data) => {
    return fetchAPI('/api/requests', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  update: async (id, data) => {
    return fetchAPI(`/api/requests/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },
};
