export default ({ env }) => {
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
        // Thêm cấu hình cho video
        breakpoints: {
          xlarge: 1920,
          large: 1000,
          medium: 750,
          small: 500,
          xsmall: 64,
        },
        // Tăng kích thước tối đa cho phép upload
        sizeLimit: 1024 * 1024 * 1024, // 1GB
        // Thêm các định dạng video được phép
        extensions: [".mp4", ".avi", ".mov", ".wmv", ".flv"],
        mimeTypes: [
          "video/mp4",
          "video/avi",
          "video/quicktime",
          "video/x-ms-wmv",
          "video/x-flv",
        ],
        actionOptions: {
          upload: {
            // Tăng thời gian timeout cho upload
            timeout: 60000 * 60, // 1 giờ
          },
          uploadStream: {
            // Tăng kích thước chunk cho stream upload
            chunkSize: 1024 * 1024 * 5, // 5MB per chunk
          },
          delete: {},
        },
      },
    },
  };
};
