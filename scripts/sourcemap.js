module.exports = function () {
  console.log(
    "🟢 jsDir -> ",
    process.env.VERCEL_ENV,
    process.env.VERCEL_GIT_COMMIT_SHA
  );
};
