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
const blogSlice = createSlice({
	name: 'blog',
	initialState: {
		blogs: [],
		error: '',
		loading: false
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
		}
	}
})
export default blogSlice.reducer
