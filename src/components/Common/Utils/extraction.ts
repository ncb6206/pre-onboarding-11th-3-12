export const extraUrl = (url: string) => {
  const regex = /https:\/\/github\.com\/([^/]+)\/([^/]+)/;
  const match = url.match(regex);

  if (match !== null) {
    const [, org, repo] = match;
    return { org, repo };
  } else {
    return {};
  }
};
