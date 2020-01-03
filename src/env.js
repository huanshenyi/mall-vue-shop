let baseURL;
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = '開発のバックエンドurl/api';
        break;
    case 'test':
        baseURL = 'バックエンドurl/api';
        break;
    case 'production':
        baseURL = '本物のurl/api';
        break;
    default:
        baseURL = '本物のバックエンドurl/api';
        break;
}

export default {
    baseURL
}
