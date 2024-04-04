import { createContext, useState, useEffect } from "react";
export const NewsContext = createContext(null)
const ContextProvider = ({children}) => {
    const [category, setCategory] = useState([])
    const [news, setNews] = useState([])
    
    useEffect(() => {
        fetch('/src/data/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    useEffect(() => {
        fetch('/src/data/categories.json')
            .then(result => result.json())
            .then(data => setCategory(data))
    }, [])

    const apiContext = {news, category}

    return (
        <div>
            <NewsContext.Provider value={apiContext}>
                {children}
            </NewsContext.Provider>
        </div>
    );
};

export default ContextProvider;