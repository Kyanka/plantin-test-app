export const nextApiFetch = async (path: string) =>
    await fetch(`${process.env.NEXT_API_URL}api/${path}`).then((res) =>
      res.json()
    );
  