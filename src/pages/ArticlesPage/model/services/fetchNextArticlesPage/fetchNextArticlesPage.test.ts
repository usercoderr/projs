// import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
// import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
// import { fetchNextArticlesPage } from './fetchNextArticlesPage';
//
// jest.mock('../fetchArticlesList/fetchArticlesList');
// describe('fetchNextArticlesPage', () => {
//     test('success', async () => {
//         const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
//             articlesPage: {
//                 page: 1,
//                 ids: [],
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: true,
//             },
//         });
//         await thunk.callThunk();
//         expect(thunk.dispatch).toBeCalledTimes(4);
//         expect(fetchArticlesList).toBeCalledWith({ page: 3 });
//     });
// });
