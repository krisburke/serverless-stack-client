export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: 'pk_test_zUDbd4CeVkdnQdqxZdt4Ouly00DQ1N2B7f',
    s3: {
        REGION: 'us-east-1',
        BUCKET: 'serverless-stack-notes-app-uploads-kb',
    },
    apiGateway: {
        REGION: 'us-east-1',
        URL: 'https://emj6nxyg1k.execute-api.us-east-1.amazonaws.com/prod',
    },
    cognito: {
        REGION: 'us-east-1',
        USER_POOL_ID: 'us-east-1_rJXzKX3fb',
        APP_CLIENT_ID: '728p6f801e2t7a9cqb7ceurfq4',
        IDENTITY_POOL_ID: 'us-east-1:cb860c3a-571c-49c1-989f-e0f42ed2bade',
    },
};
