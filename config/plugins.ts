export default ({ env }) => {
  const awsConfig = {
    s3Options: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: env("AWS_REGION"),
      params: {
        ACL: env("AWS_ACL", "public-read"),
        signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
        Bucket: env("AWS_BUCKET"),
      },
    },
  };

  // Check if required AWS credentials are present
  if (!awsConfig.s3Options.accessKeyId || !awsConfig.s3Options.secretAccessKey || !awsConfig.s3Options.region || !awsConfig.s3Options.params.Bucket) {
    console.error('Missing required AWS credentials. Please check your environment variables.');
  }

  return {
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: awsConfig,
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
