import axios from 'axios'
const API = axios.create({
	baseURL: 'http://localhost:5000'
})
API.interceptors.request.use(req => {
	if (localStorage.getItem('profile')) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem('profile')).token
		}`
	}
	return req
})

export const signIn = formData => API.post('/users/signin', formData)
export const signUp = formData => API.post('/users/signup', formData)

// export const createBlog = (blogData) => API.post("/blog", blogData);
// export const getBlogs = () => API.get("/blog"); //blog?page=${page}
// export const getBlog = (id) => API.get(`/blog/${id}`); //blog?page=${page}
