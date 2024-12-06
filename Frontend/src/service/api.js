/* eslint-disable dot-notation */
/* eslint-disable consistent-return */

import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = process.env.REACT_APP_BACKEND_URL;
export const getApi = async (path) => {
  try {
    // eslint-disable-next-line prefer-const
    let response = await axios.get(baseUrl + path, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
    // eslint-disable-next-line dot-notation
    if (response.data.token && response.data.token !== null) {
      // eslint-disable-next-line dot-notation
      localStorage.setItem('token', response.data.token);
    }
    if (response && response.status === 200) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error) {
    if (error && error.response) {
      if (error && error.response && error.response.status === 400) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
          console.log(error);
        }
      }
    }
  }
};

export const postApi = async (path, data) => {
  try {
    const response = await axios.post(baseUrl + path, data, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
    if (response.data.token && response.data.token !== null) {
      localStorage.setItem('token', response?.data?.token);
    }

    if (response && response.status === 200) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error) {
    if (error && error.response) {
      if (error && error.response.data && error.response.status === 401) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        }
      }
    }
  }
};

export const EditApi = async (path, data) => {
  try {
    const response = await axios.put(baseUrl + path, data, {
      headers: {
        Authorization: localStorage?.getItem('token')
      }
    });

    if (response.data.token && response.data.token !== null) {
      localStorage.setItem('token', response.data.token);
    }
    if (response && response.status === 200) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error) {
    if (error && error.response) {
      if (error && error.response && error.response.status === 400) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        }
      }
    }
  }
};

export const deleteApi = async (path) => {
  try {
    const response = await axios.delete(baseUrl + path, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });

    if (response.data.token && response.data.token !== null) {
      localStorage.setItem('token', response.data.token);
    }
    if (response && response.status === 200) {
      toast.success(response.data.message);
    }

    return response;
  } catch (error) {
    if (error && error.response) {
      if (error && error.response && error.response.status === 400) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        }
      }
    }
  }
};

export const deleteManyApi = async (path, data) => {
  try {
    const response = await axios.post(baseUrl + path, data, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
    if (response.data.token && response.data.token !== null) {
      localStorage.setItem('token', response?.data?.token);
    }

    if (response && response.status === 200) {
      toast.success(response.data.message);
    }
    return response;
  } catch (error) {
    if (error && error.response) {
      if (error && error.response.data && error.response.status === 401) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        }
      }
    }
  }
};
