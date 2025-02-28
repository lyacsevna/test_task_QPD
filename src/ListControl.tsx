import { useState, useEffect } from "react";

const testMockData = (dataItemsCount: number) => {
  let dataArray: string[] = [];

  for (let i = 0; i < dataItemsCount; i++) {
    dataArray.push(`Test item ${i + 1}`);
  }
  return dataArray;
};

const ListControl = () => {
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

 
  const getItemsToLoad = () => {
    const itemHeight = 50;
    const viewportHeight = window.innerHeight;
    const itemsToLoad = Math.ceil(viewportHeight / itemHeight);
    return itemsToLoad;
  };

  const loadMoreItems = () => {
    if (loading || !hasMore) return; 

    setLoading(true);
    const newItems = testMockData(getItemsToLoad());
    setItems((prev) => [...prev, ...newItems]);
    setLoading(false);
  };

  useEffect(() => {
    loadMoreItems(); 
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Бесконечный скроллинг</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ListControl;
