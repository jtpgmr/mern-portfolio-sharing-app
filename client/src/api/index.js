import axios from "axios";

const PORT = process.env.REACT_APP_PORT || 5000;

const url = `http://localhost:${PORT}/posts`;

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`, deletePost);