import { useEffect, useState } from "react"

const useReviewdata = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviewdata.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews, setReviews];
}
export default useReviewdata;