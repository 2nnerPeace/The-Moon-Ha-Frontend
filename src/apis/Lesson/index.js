import instance from '..';

export const LessonRegisterAPI = (lessonRegister, thumbnailFile, videoFile) => {
  const formData = new FormData();
  formData.append('registerRequest', new Blob([JSON.stringify(lessonRegister)], { type: 'application/json' }));
  formData.append('thumbnailFile', thumbnailFile);
  formData.append('previewVideoFile', videoFile);

  return instance.post('/admin/lesson/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const ShoreFormRegisterAPI = (shortFormRegister, thumbnailFile, videoFile) => {
  const formData = new FormData();
  formData.append('registerRequest', new Blob([JSON.stringify(shortFormRegister)], { type: 'application/json' }));
  formData.append('thumbnailFile', thumbnailFile);
  formData.append('shortFormVideoFile', videoFile);

  return instance.post('/admin/shortform/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const fetchLessonListAPI = (lessonRequest) => {
  return instance.get('/admin/lesson/list', lessonRequest);
};

export const fetchLessonDetailAPI = (lessonId) => {
  return instance.get(`/admin/lesson/detail/${lessonId}`);
};

export const fetchShortFormAPI = (branchId, yearMonth) => {
  const params = new URLSearchParams();

  if (branchId !== null && branchId !== undefined) {
    params.append('branchId', branchId);
  }

  params.append('yearMonth', yearMonth);

  return instance.get(`/admin/shortform/list?${params.toString()}`);
};

export const fetchLessonByTutorAPI = () => {
  return instance.get('/lesson/by-tutor');
};
