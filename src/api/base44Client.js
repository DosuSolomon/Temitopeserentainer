// Use relative URLs so requests go through Vite proxy
// This works for both local development and when accessed from mobile devices on the same network

const fetchApi = async (endpoint, options = {}) => {
  const response = await fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || `HTTP ${response.status}`);
  }
  
  return response.json();
};

// Mock the Base44 SDK interface for compatibility
export const base44 = {
  entities: {
    Song: {
      list: async (sort) => {
        const sortParam = sort ? `?sort=${sort}` : '';
        return fetchApi(`/api/songs${sortParam}`);
      },
      filter: async (where, sort) => {
        const params = new URLSearchParams();
        if (where?.is_available !== undefined) params.append('is_available', where.is_available);
        if (sort) params.append('sort', sort);
        const query = params.toString() ? `?${params.toString()}` : '';
        return fetchApi(`/api/songs${query}`);
      },
      create: async (data) => {
        return fetchApi('/api/songs', {
          method: 'POST',
          body: JSON.stringify(data),
        });
      },
      delete: async (id) => {
        return fetchApi(`/api/songs/${id}`, {
          method: 'DELETE',
        });
      },
      update: async (id, data) => {
        return fetchApi(`/api/songs/${id}`, {
          method: 'PATCH',
          body: JSON.stringify(data),
        });
      },
    },
    SongRequest: {
      list: async () => {
        return fetchApi('/api/requests');
      },
      filter: async (where, sort) => {
        const params = new URLSearchParams();
        if (where?.status) params.append('status', where.status);
        if (sort) params.append('sort', sort);
        const query = params.toString() ? `?${params.toString()}` : '';
        return fetchApi(`/api/requests${query}`);
      },
      create: async (data) => {
        return fetchApi('/api/requests', {
          method: 'POST',
          body: JSON.stringify(data),
        });
      },
      update: async (id, data) => {
        return fetchApi(`/api/requests/${id}`, {
          method: 'PATCH',
          body: JSON.stringify(data),
        });
      },
    },
  },
};

export default base44;

