import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../api'

export const createBlog = createAsyncThunk(
	'blog/createBlog',
	async ({ blogData, navigate }, { rejectWithValue }) => {
		try {
			const response = await api.createBlog(blogData)
			navigate('/')
			return response.data
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	}
)
export const getBlogs = createAsyncThunk(
	'blog/getBlogs',
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.getBlogs()
			return response.data
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	}
)
export const getBlog = createAsyncThunk(
	'tour/getBlog',
	async (id, { rejectWithValue }) => {
		try {
			const response = await api.getBlog(id)
			return response.data
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	}
)
export const getBlogByTag = createAsyncThunk(
	'tour/getBlogByTag',
	async (tag, { rejectWithValue }) => {
		try {
			const response = await api.getBlogByTag(tag)
			return response.data
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	}
)
const blogSlice = createSlice({
	name: 'blog',
	initialState: {
		blog: {},
		blogs: [],
		error: '',
		loading: false,
		tagBlog: []
	},
	extraReducers: {
		[createBlog.pending]: (state, action) => {
			state.loading = true
		},
		[createBlog.fulfilled]: (state, action) => {
			state.loading = false
			state.blogs = [action.payload]
		},
		[createBlog.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload.message
		},
		[getBlogs.pending]: (state, action) => {
			state.loading = true
		},
		[getBlogs.fulfilled]: (state, action) => {
			state.loading = false
			state.blogs = action.payload
		},
		[getBlogs.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload.message
		},
		[getBlog.pending]: (state, action) => {
			state.loading = true
		},
		[getBlog.fulfilled]: (state, action) => {
			state.loading = false
			state.blog = action.payload
		},
		[getBlog.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload.message
		},
		[getBlogByTag.pending]: (state, action) => {
			state.loading = true
		},
		[getBlogByTag.fulfilled]: (state, action) => {
			state.loading = false
			state.tagBlog = action.payload
		},
		[getBlogByTag.rejected]: (state, action) => {
			state.loading = false
			state.error = action.payload.message
		}
	}
})
export default blogSlice.reducer
