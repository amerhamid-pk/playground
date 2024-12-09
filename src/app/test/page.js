// /src/app/example/page.js
"use client";

import { useEffect, useState } from "react";

export default function ExamplePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/example", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result.message);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-4 mx-auto">
      <h1 className="text-lg font-bold">API Example Page</h1>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <p className="text-green-500">{data || "Loading..."}</p>
      )}
    </div>
  );
}
