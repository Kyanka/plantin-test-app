export const nextApiFetch = async (path: string) =>
    await fetch(`${process.env.strokeMiterlimi}api/${path}`).then((res) =>
      res.json()
    );
  