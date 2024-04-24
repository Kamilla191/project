import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ReviewItem from "./ReviewItem";
import { data } from "./data";

const LIMIT = 7;


export default function Review1() {

    const [postData, setPostData] = useState(data.slice(0, LIMIT))
    const [visible, setVisible] = useState(LIMIT)
    const [hasMore, setHasMore] = useState(true)

    const fetchData = () => {
        const newLimit = visible + LIMIT;
        const dataToAdd = data.slice(visible, newLimit);

        if(data.length > postData.length) {
            setTimeout(() => {
                setPostData([...postData].concat(dataToAdd))
            }, 2000)
            setVisible(newLimit)
        } else {
            setHasMore(false)
        }
    }

    return(
        <>
            
                <InfiniteScroll
                    dataLength={postData.length}
                    next={fetchData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}>
                        {postData.map(item =>{
                            return (
                                <div id="review text" className="review_text">
                                    <ReviewItem key={item.id} name={item.name} email={item.email} body={item.body} />
                                </div>
                            )
                        })}
                </InfiniteScroll>
            
        </>
    )
}