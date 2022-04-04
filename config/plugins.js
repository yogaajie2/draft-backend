module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AKIAY7IUBKKA7W6KQAES'),
      secretAccessKey: env('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'),
      region: 'us-east-1',
      params: {
        Bucket: 'draft-uploads',
      },
    },
  },
});