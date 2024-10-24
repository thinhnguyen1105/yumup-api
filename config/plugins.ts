export default ({ env }) => {
  console.log('Environment variables:', {
    AWS_ACCESS_KEY_ID: env("AWS_ACCESS_KEY_ID"),
    AWS_ACCESS_SECRET: env("AWS_ACCESS_SECRET"),
    AWS_REGION: env("AWS_REGION"),
    AWS_ACL: env("AWS_ACL"),
    AWS_SIGNED_URL_EXPIRES: env("AWS_SIGNED_URL_EXPIRES"),
    AWS_BUCKET: env("AWS_BUCKET"),
  });

  return {
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET"),
          region: env("AWS_REGION"),
          params: {
            ACL: env("AWS_ACL", "public-read"),
            signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
            Bucket: env("AWS_BUCKET"),
          },
        },
        debug: true,
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  };
};
