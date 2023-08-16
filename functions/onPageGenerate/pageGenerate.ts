export default async function main(data) {
  return {
    "path": `${data.slug}`,
    "content": <h1>${data.name}</h1>
  };
}