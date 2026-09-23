export const getApps = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    next: {revalidate: 10} 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch apps data");
  }

  return res.json();
};