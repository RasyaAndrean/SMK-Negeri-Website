// @ts-nocheck
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';

export const api = {
  // Collaboration endpoints
  getCollaborations: () =>
    fetch(`${API_BASE_URL}/collaborations`).then(res => res.json()),
  getCollaboration: (id: string) =>
    fetch(`${API_BASE_URL}/collaborations/${id}`).then(res => res.json()),
  createCollaboration: (data: any) =>
    fetch(`${API_BASE_URL}/collaborations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => res.json()),
  joinCollaboration: (id: string, data: any) =>
    fetch(`${API_BASE_URL}/collaborations/${id}/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => res.json()),
  getCollaborationMessages: (id: string) =>
    fetch(`${API_BASE_URL}/collaborations/${id}/messages`).then(res =>
      res.json()
    ),
  addCollaborationMessage: (id: string, data: any) =>
    fetch(`${API_BASE_URL}/collaborations/${id}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => res.json()),
  updateCollaborationProgress: (id: string, data: any) =>
    fetch(`${API_BASE_URL}/collaborations/${id}/progress`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => res.json()),

  // Auth endpoints
  login: (data: any) =>
    fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => res.json()),
  register: (data: any) =>
    fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => res.json()),

  // AI Recommendation endpoints
  getRecommendations: (userId: string) =>
    fetch(`${API_BASE_URL}/recommendations/${userId}`).then(res => res.json()),
  getLearningPath: (userId: string) =>
    fetch(`${API_BASE_URL}/recommendations/${userId}/learning-path`).then(res =>
      res.json()
    ),

  // AR Annotation endpoints
  getAnnotations: (collaborationId: string) =>
    fetch(`${API_BASE_URL}/ar/annotations/${collaborationId}`).then(res =>
      res.json()
    ),
  createAnnotation: (data: any) =>
    fetch(`${API_BASE_URL}/ar/annotations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => res.json()),
  getAnnotationById: (id: string) =>
    fetch(`${API_BASE_URL}/ar/annotations/id/${id}`).then(res => res.json()),
  getAnnotationsByTag: (tag: string) =>
    fetch(`${API_BASE_URL}/ar/annotations/tag/${tag}`).then(res => res.json()),
  verifyAnnotation: (id: string) =>
    fetch(`${API_BASE_URL}/ar/annotations/${id}/verify`, {
      method: 'PUT',
    }).then(res => res.json()),
};
