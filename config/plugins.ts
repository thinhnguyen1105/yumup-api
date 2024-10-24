export default ({ env }) => {
  return {
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_ACCESS_SECRET"),
          },
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
