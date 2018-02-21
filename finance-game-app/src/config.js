export default {
  cognito: {
    USER_POOL_ID: "us-east-2_Zg93lnTUO",
    APP_CLIENT_ID: "1bm8373hje99jhor8roa8hs97l"
  }
};

//arn:aws:cognito-idp:us-east-2:813677626090:userpool/us-east-2_Zg93lnTUO
//domain: https://finance-game-app.auth.us-east-2.amazoncognito.com

/*aws cognito-idp sign-up \
  --region us-east-2 \
  --client-id 1bm8373hje99jhor8roa8hs97l \
  --username admin@example.com \
  --password Passw0rd!

aws cognito-idp admin-confirm-sign-up \
  --region us-east-2 \
  --user-pool-id us-east-2_Zg93lnTUO \
  --username admin@example.com*/