import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse
} from 'axios'
import store from '@/store';
import router from '@/router';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${process.env?.VUE_APP_API_HOST}`,
    timeout: 0,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*"
    }
})

axiosInstance.interceptors.request.use(
    function (config: AxiosRequestConfig) {
        const user = store.getters['users/userInfo']
        if (user) config.headers['access-token'] = `${user.token.accessToken}`;
        return config
    },
    function (error: any) {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    function (response: AxiosResponse) {
        return response
    },
    async function (error: any) {
        console.error('[ERROR] axiosInstance.interceptors.response ...', error.response || error);
        if (error.message === 'Network Error') {
            return router.push({ name: '500' });
            // return Promise.resolve({ status: 500, message: error.message });
        }
        if (error.response.status === 401) {
            // const isLogin = store.getters['users/isLogin'];
            const originalRequest = error.response.config
            if (error.response.data.body.code === 40102 && !originalRequest._retry) {
                originalRequest._retry = true;

                const userInfo = store.getters['users/userInfo'];
                const refreshTokenRes = await store.dispatch('users/refreshToken', userInfo.token.refreshToken);
                if (refreshTokenRes.value.code === 200) {
                    store.commit('users/refreshToken', refreshTokenRes.value.result.token);
                    return axiosInstance(originalRequest);
                } else {
                    store.dispatch('users/logout');
                }
            } else {
                store.dispatch('users/logout');
            }
            return Promise.resolve(error.response);
        } else if (error.response.status === 409) {
            return Promise.resolve(error.response);
        } else {
            return Promise.reject(error);
        }
        // const {
        //     config,
        //     response: { status, data }
        // } = error;
        // const user = store.getters['users/userInfo'];
        // if(user){
        //     const expiration = moment(user.token.expiration);
        //     const current = moment();
        //     const during = moment.duration(current.diff(expiration)).asMilliseconds();

        //     if(during >= 0){
        //         store.dispatch('users/logout');
        //         store.dispatch('common/showLogin', true);
        //         return Promise.reject(false);
        //     }
        // }
        // return Promise.reject(error);
    }
);

export default axiosInstance;
